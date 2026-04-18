import { spawn } from "node:child_process";
import path from "node:path";

const host = process.env.VISUAL_HOST || "127.0.0.1";
const port = process.env.VISUAL_PORT || "3001";
const baseUrl = process.env.VISUAL_BASE_URL || `http://${host}:${port}`;
const validateScriptPath = path.resolve("scripts", "visual", "validate-regression.mjs");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const runCommand = (commandLine, options = {}) =>
  new Promise((resolve, reject) => {
    const child = spawn(commandLine, {
      stdio: "inherit",
      shell: true,
      env: { ...process.env, ...(options.env || {}) },
      ...options,
    });

    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`Falha ao executar '${commandLine}' (exit ${code})`));
    });
  });

const waitForServer = async () => {
  const timeoutAt = Date.now() + 90000;

  while (Date.now() < timeoutAt) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 3000);
      const response = await fetch(baseUrl, { method: "GET", signal: controller.signal });
      clearTimeout(timeout);

      if (response.ok || (response.status >= 300 && response.status < 500)) {
        return;
      }
    } catch (_error) {
      // Sem acao: apenas re-tentativa ate timeout.
    }

    await sleep(1000);
  }

  throw new Error(`Servidor nao respondeu em ${baseUrl} dentro do tempo limite.`);
};

const isServerReachable = async () => {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2500);
    const response = await fetch(baseUrl, { method: "GET", signal: controller.signal });
    clearTimeout(timeout);
    return response.ok || (response.status >= 300 && response.status < 500);
  } catch (_error) {
    return false;
  }
};

const stopServer = async (serverProcess) => {
  if (!serverProcess || serverProcess.killed) {
    return;
  }

  if (process.platform === "win32") {
    await new Promise((resolve) => {
      const killer = spawn("taskkill", ["/pid", String(serverProcess.pid), "/t", "/f"], {
        stdio: "ignore",
      });
      killer.on("close", () => resolve());
      killer.on("error", () => resolve());
    });
    return;
  }

  serverProcess.kill("SIGTERM");
  await sleep(500);
};

const run = async () => {
  console.log("[stage6] 1/3 build: npm run build");
  await runCommand("npm run build");

  let serverProcess = null;
  const serverAlreadyRunning = await isServerReachable();

  if (serverAlreadyRunning) {
    console.log(`[stage6] 2/3 start: servidor ja ativo em ${baseUrl}, reutilizando instancia.`);
  } else {
    console.log(`[stage6] 2/3 start: npm run start -- --hostname ${host} --port ${port}`);
    serverProcess = spawn(`npm run start -- --hostname ${host} --port ${port}`, {
      stdio: "inherit",
      shell: true,
      env: { ...process.env, PORT: String(port) },
    });
  }

  try {
    await waitForServer();
    console.log("[stage6] 3/3 validate: visual regression baseline");
    await runCommand(`node "${validateScriptPath}"`, {
      env: { VISUAL_BASE_URL: baseUrl },
    });
  } finally {
    await stopServer(serverProcess);
  }
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
