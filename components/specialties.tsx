import {
  Sparkles,
  CircleDot,
  Layers,
  ScanFace,
  Shield,
  Smile,
} from "lucide-react";

const specialties = [
  {
    icon: CircleDot,
    title: "Implantes Dentários",
    description:
      "Implantes de última geração com técnicas minimamente invasivas para substituição de dentes perdidos com máxima naturalidade.",
  },
  {
    icon: Layers,
    title: "Próteses sobre Implantes",
    description:
      "Próteses fixas e removíveis sobre implantes, devolvendo função mastigatória e estética de forma duradoura.",
  },
  {
    icon: Sparkles,
    title: "Lentes de Contato Dental",
    description:
      "Facetas ultrafinas em porcelana para correção estética do sorriso com mínimo desgaste dental.",
  },
  {
    icon: ScanFace,
    title: "Planejamento Digital",
    description:
      "Tecnologia 3D para planejamento preciso de tratamentos, simulação de resultados e cirurgias guiadas.",
  },
  {
    icon: Shield,
    title: "Reabilitação Oral Complexa",
    description:
      "Tratamentos integrados para casos de grande destruição dentária, devolvendo função e estética.",
  },
  {
    icon: Smile,
    title: "Estética do Sorriso",
    description:
      "Clareamento, restaurações estéticas e harmonização do sorriso com técnicas avançadas.",
  },
];

export function Specialties() {
  return (
    <section
      id="especialidades"
      data-mvp-section="especialidades"
      className="mvp-section"
    >
      <div className="mvp-container">
        <div className="mvp-section-head">
          <span className="mvp-kicker">Especialidades</span>
          <h2 className="mvp-title text-balance">Tratamentos de Excelência</h2>
          <p className="mvp-lead">
            Oferecemos uma gama completa de tratamentos em reabilitação oral,
            sempre com foco na qualidade e nos resultados duradouros.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((specialty) => (
            <article
              key={specialty.title}
              className="mvp-card group flex h-full flex-col p-6 sm:p-7 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mvp-icon-box mb-5 h-14 w-14 transition-colors group-hover:bg-secondary/20">
                <specialty.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {specialty.title}
              </h3>
              <p className="mvp-copy--sm mt-3">
                {specialty.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
