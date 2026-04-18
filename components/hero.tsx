import Link from "next/link";
import { ArrowRight, Award, Users, Clock } from "lucide-react";

const stats = [
  { icon: Award, value: "15+", label: "Anos de Experiência" },
  { icon: Users, value: "5000+", label: "Pacientes Atendidos" },
  { icon: Clock, value: "98%", label: "Taxa de Satisfação" },
];

export function Hero() {
  return (
    <section
      id="hero"
      data-mvp-section="hero"
      className="mvp-section mvp-section--hero"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/45" />
      <div className="absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl sm:h-96 sm:w-96" />
      <div className="absolute -left-24 bottom-1/4 h-72 w-72 rounded-full bg-secondary/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="mvp-container relative py-6 sm:py-10 md:py-12 lg:py-16">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 xl:gap-20">
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-foreground sm:text-sm sm:normal-case sm:tracking-normal">
              <Award className="h-4 w-4 text-secondary" />
              Especialista em Reabilitação Oral
            </div>

            <div className="space-y-5">
              <h1 className="font-serif text-3xl font-bold leading-tight text-balance sm:text-5xl lg:text-6xl">
                Transformando sorrisos com{" "}
                <span className="text-primary">excelência</span> e{" "}
                <span className="text-primary">precisão</span>
              </h1>

              <p className="mvp-lead max-w-2xl text-pretty">
                Dr. David Guedes oferece tratamentos de reabilitação oral de
                alta complexidade, utilizando tecnologia de ponta e técnicas
                avançadas para devolver a você um sorriso natural e funcional.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="#contato"
                className="mvp-btn mvp-btn--primary w-full px-8 py-4 text-base sm:w-auto"
              >
                Agende sua Avaliação
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="#casos"
                className="mvp-btn mvp-btn--secondary w-full px-8 py-4 text-base sm:w-auto"
              >
                Ver Casos Clínicos
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="mvp-card mvp-card--muted p-4 text-center sm:text-left"
                >
                  <div className="flex items-center justify-center gap-2 sm:justify-start">
                    <stat.icon className="h-4 w-4 text-secondary" />
                    <p className="text-xl font-bold text-foreground">
                      {stat.value}
                    </p>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="mvp-panel relative overflow-hidden p-7 sm:p-10 lg:p-12">
              <div className="absolute -top-16 right-0 h-40 w-40 rounded-full bg-secondary/10 blur-2xl" />
              <div className="absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-primary/10 blur-2xl" />

              <div className="relative text-center">
                <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-secondary/20 sm:h-32 sm:w-32">
                  <span className="font-serif text-4xl font-bold text-primary sm:text-5xl">
                    DG
                  </span>
                </div>
                <p className="font-serif text-2xl font-semibold text-foreground">
                  Dr. David Guedes
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  CRO-RJ 12345
                </p>
                <div className="mt-8 mx-auto max-w-xs rounded-2xl border border-secondary/40 bg-secondary/10 px-4 py-3">
                  <p className="text-sm font-medium text-foreground">
                    Reabilitação Oral de Alta Complexidade
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Planejamento individual e execução precisa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
