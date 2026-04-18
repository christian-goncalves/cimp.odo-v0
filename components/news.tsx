import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Implantes Dentários: Mitos e Verdades",
    excerpt:
      "Descubra a verdade sobre os implantes dentários e entenda por que essa é a melhor solução para substituição de dentes perdidos.",
    date: "15 Mar 2024",
    category: "Implantes",
  },
  {
    id: 2,
    title: "Cuidados Após a Colocação de Implantes",
    excerpt:
      "Saiba como cuidar corretamente dos seus implantes para garantir a longevidade do tratamento e evitar complicações.",
    date: "08 Mar 2024",
    category: "Cuidados",
  },
  {
    id: 3,
    title: "Lentes de Contato Dental: Vale a Pena?",
    excerpt:
      "Entenda as indicações, benefícios e limitações das lentes de contato dental para transformar seu sorriso.",
    date: "01 Mar 2024",
    category: "Estética",
  },
];

export function News() {
  return (
    <section id="noticias" data-mvp-section="noticias" className="mvp-section">
      <div className="mvp-container">
        <div className="mvp-section-head--split">
          <div className="space-y-4">
            <span className="mvp-kicker">Blog</span>
            <h2 className="mvp-title text-balance">Últimas Notícias</h2>
          </div>
          <Link href="#" className="mvp-link-cta self-start md:self-auto">
            Ver todos os artigos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.id}
              className="mvp-card group overflow-hidden p-0 hover:shadow-lg"
            >
              <div className="aspect-[16/10] bg-gradient-to-b from-muted/75 to-white flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {article.id}
                  </span>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="mvp-chip">{article.category}</span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    {article.date}
                  </span>
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground transition-colors group-hover:text-primary sm:text-lg">
                  {article.title}
                </h3>
                <p className="mvp-copy--sm line-clamp-2">{article.excerpt}</p>
                <Link href="#" className="mvp-link-cta mt-4">
                  Ler mais
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
