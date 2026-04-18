"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#casos", label: "Casos Clínicos" },
  { href: "#noticias", label: "Notícias" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mvp-container">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary sm:h-12 sm:w-12">
              <span className="font-serif text-lg font-bold text-primary-foreground sm:text-xl">
                C
              </span>
            </div>
            <div className="hidden sm:block">
              <span className="block text-base font-bold text-foreground md:text-lg">
                CIMP.odo
              </span>
              <span className="block text-xs text-muted-foreground">
                Dr. David Guedes
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="tel:+552422463905"
              className="mvp-btn mvp-btn--primary hidden px-4 py-2 text-sm md:flex lg:px-5 lg:py-2.5"
            >
              <Phone className="h-4 w-4" />
              Agendar Consulta
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-md p-2 text-foreground transition-colors hover:bg-muted/70 lg:hidden"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-border bg-background/95 backdrop-blur-md lg:hidden sm:max-h-[calc(100svh-5rem)]">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+552422463905"
                className="mvp-btn mvp-btn--primary mx-4 mt-4 px-5 py-2.5 text-sm"
              >
                <Phone className="h-4 w-4" />
                Agendar Consulta
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
