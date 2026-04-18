"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const handleClick = () => {
    const message = "Olá! Gostaria de agendar uma consulta.";
    const whatsappUrl = `https://wa.me/552422463905?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2.5 rounded-full border border-secondary/30 bg-secondary px-4 py-3 text-secondary-foreground shadow-lg shadow-secondary/25 transition-colors hover:bg-secondary/90 sm:bottom-6 sm:right-6 sm:gap-3 sm:px-5 sm:py-4"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden sm:inline font-medium">Fale Conosco</span>
    </button>
  );
}
