"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Quanto tempo dura um implante dentário?",
    answer:
      "Com os cuidados adequados, um implante dentário pode durar por toda a vida. A taxa de sucesso dos implantes é de aproximadamente 98%. É fundamental manter uma boa higiene oral e realizar visitas regulares ao dentista para garantir a longevidade do tratamento.",
  },
  {
    question: "O procedimento de implante é doloroso?",
    answer:
      "O procedimento é realizado sob anestesia local, tornando-o indolor. Após a cirurgia, pode haver um desconforto leve que é facilmente controlado com medicações prescritas. A maioria dos pacientes relata que o pós-operatório é mais tranquilo do que esperavam.",
  },
  {
    question: "Qual o tempo de recuperação após um implante?",
    answer:
      "A recuperação inicial leva de 7 a 10 dias. Já a integração do implante ao osso (osseointegração) leva de 3 a 6 meses, dependendo do caso. Durante esse período, você pode levar uma vida normal com alguns cuidados específicos.",
  },
  {
    question: "Quem pode fazer implante dentário?",
    answer:
      "A maioria das pessoas pode receber implantes. Contudo, é necessária uma avaliação individual para verificar a saúde geral, quantidade e qualidade óssea, além de condições como diabetes descontrolado ou tabagismo intenso que podem afetar o tratamento.",
  },
  {
    question: "Qual a diferença entre lentes de contato e facetas?",
    answer:
      "As lentes de contato dental são mais finas (0,2 a 0,5mm) e geralmente não requerem desgaste dental. Já as facetas são um pouco mais espessas (0,5 a 0,7mm) e podem necessitar de um pequeno preparo do dente. A indicação depende de cada caso.",
  },
  {
    question: "Como funciona o planejamento digital do sorriso?",
    answer:
      "Utilizamos tecnologia 3D para criar uma simulação do resultado final antes de iniciar o tratamento. Isso permite que você visualize como ficará seu sorriso e participe das decisões. Além disso, essa tecnologia aumenta a precisão dos procedimentos.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      data-mvp-section="faq"
      className="mvp-section mvp-section--muted"
    >
      <div className="mvp-container mvp-container--compact">
        <div className="mvp-section-head">
          <span className="mvp-kicker">Dúvidas Frequentes</span>
          <h2 className="mvp-title text-balance">Perguntas e Respostas</h2>
          <p className="mvp-lead">
            Encontre respostas para as principais dúvidas sobre nossos
            tratamentos.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mvp-accordion-item"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-200",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-200 ease-out",
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <p className="mvp-copy px-6 pb-5">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
