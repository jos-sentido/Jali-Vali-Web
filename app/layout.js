import "./globals.css";
import { Lexend, Source_Sans_3 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company } from "@/lib/site";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://jalievali.mx"),
  title: {
    default: "JALIE-VALI Constructora | Infraestructura hidráulica, sanitaria y eléctrica",
    template: "%s | JALIE-VALI Constructora",
  },
  description: company.description,
  keywords: [
    "constructora infraestructura hidráulica",
    "redes sanitarias y pluviales",
    "desazolves y recuperación de cauces",
    "instalaciones eléctricas industriales",
    "constructora licitaciones México",
    "cárcamos de bombeo",
  ],
  openGraph: {
    title: "JALIE-VALI Constructora",
    description: company.description,
    type: "website",
    locale: "es_MX",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX" className={`${lexend.variable} ${sourceSans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <a href="#main" className="skip-link">Saltar al contenido</a>
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
