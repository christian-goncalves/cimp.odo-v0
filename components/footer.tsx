import Link from "next/link";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#casos", label: "Casos Clínicos" },
  { href: "#noticias", label: "Blog" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

const specialties = [
  "Implantes Dentários",
  "Próteses sobre Implantes",
  "Lentes de Contato Dental",
  "Reabilitação Oral",
  "Estética do Sorriso",
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/cimpodo", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/cimpodo", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com/cimpodo", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mvp-container">
        <div className="grid gap-10 py-14 sm:py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20">
                <span className="font-serif text-xl font-bold text-primary-foreground">
                  C
                </span>
              </div>
              <div>
                <span className="block text-lg font-bold text-primary-foreground">
                  CIMP.odo
                </span>
                <span className="block text-xs text-primary-foreground/70">
                  Dr. David Guedes
                </span>
              </div>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-primary-foreground/75">
              Especialista em Reabilitação Oral de Alta Complexidade.
              Transformando sorrisos com excelência e tecnologia de ponta.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-secondary/20"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 font-semibold text-primary-foreground">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/75 transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-semibold text-primary-foreground">Especialidades</h3>
            <ul className="space-y-3">
              {specialties.map((specialty) => (
                <li key={specialty}>
                  <span className="text-sm text-primary-foreground/75">{specialty}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-semibold text-primary-foreground">Contato</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                <span className="text-sm text-primary-foreground/75">
                  Rua do Imperador, 123 - Centro
                  <br />
                  Petrópolis, RJ - 25620-000
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-secondary" />
                <a
                  href="tel:+552422463905"
                  className="text-sm text-primary-foreground/75 transition-colors hover:text-secondary"
                >
                  (24) 2246-3905
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-secondary" />
                <a
                  href="mailto:contato@cimpodo.com.br"
                  className="text-sm text-primary-foreground/75 transition-colors hover:text-secondary"
                >
                  contato@cimpodo.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center lg:flex-row lg:gap-4 lg:text-left">
            <p className="text-sm text-primary-foreground/70">
              {new Date().getFullYear()} CIMP.odo. Todos os direitos reservados.
            </p>
            <p className="text-sm text-primary-foreground/70 lg:text-right">
              CRO-RJ 12345 | Responsável Técnico: Dr. David Guedes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
