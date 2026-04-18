import { Quote as QuoteIcon } from "lucide-react";

export function Quote() {
  return (
    <section data-mvp-section="quote" className="mvp-section mvp-section--accent">
      <div className="mvp-container mvp-container--narrow">
        <div className="rounded-3xl border border-primary-foreground/20 bg-primary-foreground/5 px-6 py-12 text-center sm:px-10 sm:py-14 lg:px-16">
          <QuoteIcon className="mx-auto mb-8 h-12 w-12 text-primary-foreground/35" />
          <blockquote className="font-serif text-2xl font-medium leading-relaxed text-primary-foreground text-balance sm:text-3xl lg:text-4xl">
            &ldquo;Cada sorriso que transformamos é uma história de confiança
            renovada. Meu compromisso é devolver não apenas a função, mas a
            alegria de sorrir sem medo.&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="text-lg font-semibold text-primary-foreground">
              Dr. David Guedes
            </p>
            <p className="text-sm text-primary-foreground/75">
              Especialista em Reabilitação Oral
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
