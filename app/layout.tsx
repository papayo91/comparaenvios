import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import GoogleMapsProvider from "@/components/maps/GoogleMapsProvider";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title:
    "Compara Envíos | Cotiza envíos nacionales, internacionales y mensajería local",

  description:
    "Compara tarifas entre las principales transportadoras de Colombia. Cotiza envíos nacionales, internacionales y mensajería local desde un solo lugar.",

  keywords: [
    "envíos",
    "cotizar envíos",
    "transportadoras",
    "Coordinadora",
    "Servientrega",
    "Inter Rapidísimo",
    "TCC",
    "Envía",
    "mensajería local",
    "envíos internacionales",
    "envíos nacionales",
    "Bucaramanga",
    "Compara Envíos",
  ],

  authors: [{ name: "Compara Envíos" }],
  creator: "Compara Envíos",

  openGraph: {
    title: "Compara Envíos",
    description:
      "Encuentra la mejor tarifa para tus envíos nacionales, internacionales y mensajería local.",
    url: "https://comparaenvios.co",
    siteName: "Compara Envíos",
    locale: "es_CO",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <GoogleMapsProvider>
          {children}
        </GoogleMapsProvider>

        {/* Botón flotante de WhatsApp */}
        <WhatsAppButton />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-OG9BFQFWK6"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              window.dataLayer.push(arguments);
            }

            gtag('js', new Date());
            gtag('config', 'G-OG9BFQFWK6');
          `}
        </Script>
      </body>
    </html>
  );
}