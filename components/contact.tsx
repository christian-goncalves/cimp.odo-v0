"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    content: "Rua do Imperador, 123 - Centro",
    subtitle: "Petrópolis, RJ - 25620-000",
  },
  {
    icon: Phone,
    title: "Telefone",
    content: "(24) 2246-3905",
    subtitle: "WhatsApp disponível",
  },
  {
    icon: Mail,
    title: "E-mail",
    content: "contato@cimpodo.com.br",
    subtitle: "Resposta em até 24h",
  },
  {
    icon: Clock,
    title: "Horário",
    content: "Seg - Sex: 8h às 18h",
    subtitle: "Sáb: 8h às 12h",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Meu nome é ${formData.name}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/552422463905?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contato" data-mvp-section="contato" className="mvp-section">
      <div className="mvp-container">
        <div className="mvp-section-head">
          <span className="mvp-kicker">Contato</span>
          <h2 className="mvp-title text-balance">Entre em Contato</h2>
          <p className="mvp-lead">
            Agende sua avaliação e dê o primeiro passo para transformar seu
            sorriso.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="mvp-card mvp-card--muted flex items-start gap-4 p-5"
                >
                  <div className="mvp-icon-box">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{info.title}</h3>
                    <p className="mt-1 text-sm text-foreground">{info.content}</p>
                    <p className="text-xs text-muted-foreground">{info.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mvp-panel overflow-hidden p-2">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted sm:aspect-[16/9]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.0428956772!2d-43.17847!3d-22.50556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDMwJzIwLjAiUyA0M8KwMTAnNDIuNSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização CIMP.odo"
                />
              </div>
            </div>
          </div>

          <div className="mvp-panel p-6 sm:p-8 lg:p-10">
            <h3 className="mvp-title-sm mb-6">
              Envie sua Mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mvp-input-label">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mvp-input"
                  placeholder="Seu nome"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mvp-input-label">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mvp-input"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mvp-input-label">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mvp-input"
                    placeholder="(24) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mvp-input-label">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mvp-input resize-none"
                  placeholder="Como podemos ajudar?"
                />
              </div>

              <button
                type="submit"
                className="mvp-btn mvp-btn--primary w-full px-6 py-4 text-base"
              >
                <Send className="h-5 w-5" />
                Enviar via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
