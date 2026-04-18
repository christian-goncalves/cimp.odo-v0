import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";

const baseUrl = process.env.VISUAL_BASE_URL || "http://127.0.0.1:3001";
const baselinePath = path.resolve(
  process.env.VISUAL_BASELINE_REPORT || "_tmp/stage5-visual-report.json",
);
const outRoot = path.resolve(process.env.VISUAL_OUT_DIR || "_tmp/stage6-visual-validation");
const screenshotsDir = path.join(outRoot, "screenshots");
const reportPath = path.join(outRoot, "report.json");

const viewports = [
  { name: "mobile", width: 390, height: 844 },
  { name: "tablet", width: 834, height: 1112 },
  { name: "desktop", width: 1440, height: 900 },
];

const evaluatePage = () => {
  const sectionNodes = Array.from(document.querySelectorAll("section[data-mvp-section]"));
  const sectionOrder = sectionNodes.map((node) => node.getAttribute("data-mvp-section") || "");
  const sectionRects = sectionNodes.map((node) => {
    const rect = node.getBoundingClientRect();
    return {
      id: node.getAttribute("data-mvp-section") || "",
      top: rect.top + window.scrollY,
      bottom: rect.bottom + window.scrollY,
      height: rect.height,
    };
  });

  let hasOverlap = false;
  for (let i = 0; i < sectionRects.length - 1; i += 1) {
    const current = sectionRects[i];
    const next = sectionRects[i + 1];
    if (next.top < current.bottom - 1) {
      hasOverlap = true;
      break;
    }
  }

  const docEl = document.documentElement;
  const rootOverflowDelta = docEl.scrollWidth - docEl.clientWidth;

  const currentX = window.scrollX;
  window.scrollTo(99999, 0);
  const maxHorizontalScroll = window.scrollX;
  window.scrollTo(currentX, 0);
  const horizontalScrollable = maxHorizontalScroll > 0;

  const viewportWidth = window.innerWidth;
  const overflowCandidates = Array.from(document.querySelectorAll("body *"))
    .map((node) => {
      const element = node;
      const rect = element.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) {
        return null;
      }

      const overflowRight = rect.right - viewportWidth;
      const overflowLeft = -rect.left;
      const overflowPx = Math.max(overflowRight, overflowLeft);
      if (overflowPx <= 1) {
        return null;
      }

      const style = getComputedStyle(element);
      return {
        tag: element.tagName.toLowerCase(),
        className: typeof element.className === "string" ? element.className.slice(0, 140) : "",
        overflowPx: Number(overflowPx.toFixed(2)),
        position: style.position,
      };
    })
    .filter(Boolean)
    .sort((a, b) => b.overflowPx - a.overflowPx)
    .slice(0, 8);

  const hero = document.querySelector("#hero");
  const heroHeading = hero?.querySelector("h1") || null;
  const heroPrimaryCta = hero?.querySelector('a[href="#contato"]') || null;

  const headingRect = heroHeading?.getBoundingClientRect() || null;
  const ctaRect = heroPrimaryCta?.getBoundingClientRect() || null;
  const heroSignals = {
    hasHeading: Boolean(heroHeading),
    hasPrimaryCta: Boolean(heroPrimaryCta),
    headingAboveFold: Boolean(headingRect && headingRect.top >= 0 && headingRect.top < window.innerHeight),
    ctaAboveFold: Boolean(ctaRect && ctaRect.top >= 0 && ctaRect.top < window.innerHeight),
  };

  return {
    sectionCount: sectionNodes.length,
    sectionOrder,
    sectionFlow: `${sectionOrder[0] || ""} -> ${sectionOrder[sectionOrder.length - 1] || ""}`,
    hasOverlap,
    horizontalOverflow: horizontalScrollable,
    rootOverflowDelta,
    overflowCandidates,
    heroSignals,
  };
};

const assertViewport = (current, baseline) => {
  const checks = [
    {
      id: "sectionCountStable",
      pass: current.sectionCount === baseline.sectionCount,
      expected: baseline.sectionCount,
      actual: current.sectionCount,
    },
    {
      id: "sectionOrderStable",
      pass: JSON.stringify(current.sectionOrder) === JSON.stringify(baseline.sectionOrder),
      expected: baseline.sectionOrder,
      actual: current.sectionOrder,
    },
    {
      id: "sectionFlowStable",
      pass: current.sectionFlow === baseline.sectionFlow,
      expected: baseline.sectionFlow,
      actual: current.sectionFlow,
    },
    {
      id: "noOverlap",
      pass: current.hasOverlap === false,
      expected: false,
      actual: current.hasOverlap,
    },
    {
      id: "noHorizontalOverflow",
      pass: current.horizontalOverflow === false,
      expected: false,
      actual: current.horizontalOverflow,
    },
    {
      id: "rootOverflowWithinTolerance",
      pass: current.rootOverflowDelta <= 1,
      expected: "<= 1",
      actual: current.rootOverflowDelta,
    },
    {
      id: "heroHeadingAboveFold",
      pass: current.heroSignals.headingAboveFold === true,
      expected: true,
      actual: current.heroSignals.headingAboveFold,
    },
    {
      id: "heroPrimaryCtaAboveFold",
      pass: current.heroSignals.ctaAboveFold === true,
      expected: true,
      actual: current.heroSignals.ctaAboveFold,
    },
  ];

  return {
    viewport: current.viewport,
    passed: checks.every((item) => item.pass),
    checks,
  };
};

const run = async () => {
  const baselineRaw = await fs.readFile(baselinePath, "utf8");
  const baseline = JSON.parse(baselineRaw);
  const baselineByViewport = new Map((baseline.results || []).map((item) => [item.viewport, item]));

  for (const viewport of viewports) {
    if (!baselineByViewport.has(viewport.name)) {
      throw new Error(`Baseline da Etapa 5 ausente para viewport '${viewport.name}'.`);
    }
  }

  await fs.mkdir(screenshotsDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const results = [];

  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      locale: "pt-BR",
      colorScheme: "light",
    });

    const page = await context.newPage();
    await page.goto(baseUrl, { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForTimeout(750);

    const metrics = await page.evaluate(evaluatePage);
    const screenshotFile = `${viewport.name}-${viewport.width}x${viewport.height}.png`;
    const screenshotPath = path.join(screenshotsDir, screenshotFile);
    await page.screenshot({ path: screenshotPath, fullPage: true });

    results.push({
      viewport: viewport.name,
      width: viewport.width,
      height: viewport.height,
      screenshot: screenshotPath,
      ...metrics,
    });

    await context.close();
  }

  await browser.close();

  const assertions = results.map((item) => assertViewport(item, baselineByViewport.get(item.viewport)));
  const failedViewports = assertions.filter((item) => !item.passed).map((item) => item.viewport);

  const summary = {
    passed: failedViewports.length === 0,
    totalViewports: assertions.length,
    passedViewports: assertions.filter((item) => item.passed).length,
    failedViewports,
  };

  const report = {
    generatedAt: new Date().toISOString(),
    stage: "stage6-governance",
    baseUrl,
    baselineReport: baselinePath,
    criteria: [
      "Sem sobreposicao entre secoes consecutivas",
      "Sem overflow horizontal",
      "Sem quebra estrutural (ordem e fluxo estaveis)",
      "Sem perda de prioridade visual no hero (heading + CTA acima da dobra)",
    ],
    summary,
    assertions,
    results,
  };

  await fs.mkdir(outRoot, { recursive: true });
  await fs.writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");

  console.log(JSON.stringify(report, null, 2));
  console.log(`\nRelatorio salvo em: ${reportPath}`);

  if (!summary.passed) {
    process.exit(1);
  }
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
