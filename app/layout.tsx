import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "CIMP.odo | Dr. David Guedes - Reabilitação Oral em Petrópolis",
  description:
    "Especialista em Reabilitação Oral de Alta Complexidade. Implantes dentários, próteses e tratamentos estéticos com tecnologia de ponta em Petrópolis, RJ.",
  keywords: [
    "implantes dentários",
    "reabilitação oral",
    "prótese dentária",
    "dentista Petrópolis",
    "Dr. David Guedes",
  ],
  openGraph: {
    title: "CIMP.odo | Dr. David Guedes - Reabilitação Oral em Petrópolis",
    description:
      "Especialista em Reabilitação Oral de Alta Complexidade. Implantes dentários, próteses e tratamentos estéticos.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#306AE8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
