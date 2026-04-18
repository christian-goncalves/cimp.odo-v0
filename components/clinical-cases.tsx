"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const cases = [
  {
    id: 1,
    title: "Reabilitação Total Superior",
    description:
      "Paciente com perda total dos dentes superiores. Realizada reabilitação com implantes e prótese fixa em porcelana.",
    category: "Implantes",
  },
  {
    id: 2,
    title: "Lentes de Contato",
    description:
      "Correção estética com 10 lentes de contato em porcelana para harmonização do sorriso.",
    category: "Estética",
  },
  {
    id: 3,
    title: "Reabilitação Inferior",
    description:
      "Protocolo inferior sobre 4 implantes com prótese fixa, devolvendo função mastigatória completa.",
    category: "Implantes",
  },
  {
    id: 4,
    title: "Coroas em Porcelana",
    description:
      "Substituição de restaurações antigas por coroas em porcelana com alta estética.",
    category: "Prótese",
  },
];

export function ClinicalCases() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section
      id="casos"
      data-mvp-section="casos"
      className="mvp-section mvp-section--muted"
    >
      <div className="mvp-container">
        <div className="mvp-section-head">
          <span className="mvp-kicker">Resultados Reais</span>
          <h2 className="mvp-title text-balance">Casos Clínicos</h2>
          <p className="mvp-lead">
            Conheça alguns dos resultados alcançados em nossos tratamentos de
            reabilitação oral.
          </p>
        </div>

        <div className="relative">
          <div className="mvp-panel overflow-hidden p-2 sm:p-3">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {cases.map((caseItem) => (
                <article key={caseItem.id} className="w-full flex-shrink-0 p-2">
                  <div className="grid gap-8 rounded-2xl border border-border/80 bg-white p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:p-10">
                    <div className="aspect-[4/3] rounded-2xl border border-border bg-gradient-to-b from-muted/70 to-white">
                      <div className="flex h-full items-center justify-center text-center p-8">
                        <div>
                          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-secondary/20">
                            <span className="text-3xl font-bold text-primary">
                              {caseItem.id}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Antes e Depois
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center space-y-4">
                      <span className="mvp-chip text-sm">
                        {caseItem.category}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-foreground text-balance">
                        {caseItem.title}
                      </h3>
                      <p className="mvp-copy">
                        {caseItem.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              className="mvp-btn mvp-btn--icon"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>

            <div className="flex gap-2">
              {cases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "h-2.5 rounded-full transition-all",
                    index === activeIndex
                      ? "w-7 bg-primary"
                      : "w-2.5 bg-border hover:bg-primary/50"
                  )}
                  aria-label={`Ir para caso ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="mvp-btn mvp-btn--icon"
              aria-label="Próximo"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
