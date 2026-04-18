import { GraduationCap, Award, BookOpen, Target } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    title: "Formação Acadêmica",
    description:
      "Graduação em Odontologia pela Universidade Federal Fluminense (UFF)",
  },
  {
    icon: Award,
    title: "Especialização",
    description:
      "Especialista em Prótese Dentária e Implantodontia pela ABO-RJ",
  },
  {
    icon: BookOpen,
    title: "Educação Continuada",
    description:
      "Cursos e atualizações constantes em centros de referência no Brasil e exterior",
  },
  {
    icon: Target,
    title: "Foco Clínico",
    description:
      "Reabilitação Oral de Alta Complexidade com abordagem personalizada",
  },
];

export function About() {
  return (
    <section
      id="sobre"
      data-mvp-section="sobre"
      className="mvp-section mvp-section--muted"
    >
      <div className="mvp-container">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
          <div className="space-y-8">
            <div className="mvp-panel p-6 sm:p-8 lg:p-10">
              <div className="space-y-4">
                <span className="mvp-kicker">Sobre o Profissional</span>
                <h2 className="mvp-title text-balance">Dr. David Guedes</h2>
                <p className="mvp-lead">
                  Com mais de 15 anos de experiência em odontologia, o Dr.
                  David Guedes dedica sua carreira à excelência em
                  reabilitação oral. Sua abordagem combina conhecimento técnico
                  avançado com um atendimento humanizado, garantindo resultados
                  que transformam vidas.
                </p>
                <p className="mvp-copy">
                  Especializado em casos complexos, utiliza as mais modernas
                  tecnologias e técnicas para oferecer tratamentos seguros,
                  eficientes e com resultados estéticos naturais.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {credentials.map((item) => (
                <div
                  key={item.title}
                  className="mvp-card mvp-card--muted flex h-full gap-4 p-5"
                >
                  <div className="mvp-icon-box mvp-icon-box--sm">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mvp-copy--sm mt-1 text-xs">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:sticky lg:top-28">
            <div className="mvp-panel relative overflow-hidden p-8 sm:p-10">
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-secondary/20 blur-2xl" />
              <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />

              <div className="relative rounded-2xl border border-border bg-gradient-to-b from-white to-muted/30 p-8 text-center">
                <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-secondary/20">
                  <span className="font-serif text-6xl font-bold text-primary">
                    DG
                  </span>
                </div>
                <p className="mt-6 font-serif text-2xl font-semibold text-foreground">
                  Dr. David Guedes
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Cirurgião-Dentista
                </p>
                <p className="mt-1 text-xs text-primary">CRO-RJ 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
