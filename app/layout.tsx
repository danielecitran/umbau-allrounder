import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata = {
  metadataBase: new URL("https://umbau-allrounder.ch"),
  title:
    "Umbau-Allrounder GmbH - Ihr Partner für hochwertige Umbauten und Renovationen",
  description:
    "Professionelle Umbau- und Renovationsarbeiten in Zürich und Umgebung. Wir verwandeln Ihre Räume mit Fachkompetenz und Leidenschaft.",
  keywords:
    "Umbau, Renovation, Sanierung, Zürich, Bauunternehmen, Umbau-Allrounder, Allrounder, Allroundservice, Maurerarbeiten, Gipserarbeiten, Bodenverlegung, Modernisierung, Renovationsarbeiten, Umbauarbeiten, Bauleitung",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "Next.js",
  applicationName: "Umbau-Allrounder GmbH",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Umbau-Allrounder GmbH" }],
  creator: "Umbau-Allrounder GmbH",
  publisher: "Umbau-Allrounder GmbH",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/logos/LOGO-Transparent.png",
        color: "#000000",
      },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    url: "https://umbau-allrounder.ch",
    title:
      "Umbau-Allrounder GmbH - Ihr Partner für hochwertige Umbauten und Renovationen",
    description:
      "Professionelle Umbau- und Renovationsarbeiten in Zürich und Umgebung. Wir verwandeln Ihre Räume mit Fachkompetenz und Leidenschaft.",
    siteName: "Umbau-Allrounder GmbH",
    images: [
      {
        url: "https://umbau-allrounder.ch/logos/LOGO-wTBlack.png",
        width: 800,
        height: 200,
        alt: "Umbau-Allrounder GmbH Logo",
        type: "image/png",
      },
    ],
    locale: "de_CH",
    countryName: "Switzerland",
    phoneNumbers: ["+41 79 293 05 19"],
    emails: ["info@umbau-allrounder.ch"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Umbau-Allrounder GmbH - Ihr Partner für hochwertige Umbauten und Renovationen",
    description:
      "Professionelle Umbau- und Renovationsarbeiten in Zürich und Umgebung. Wir verwandeln Ihre Räume mit Fachkompetenz und Leidenschaft.",
    images: ["https://umbau-allrounder.ch/logos/LOGO-wTBlack.png"],
    creator: "@umbau_allrounder",
    site: "@umbau_allrounder",
  },
  alternates: {
    canonical: "https://umbau-allrounder.ch",
    languages: {
      "de-CH": "https://umbau-allrounder.ch",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        {/* SEO: LocalBusiness Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Umbau-Allrounder GmbH",
              image: {
                "@type": "ImageObject",
                url: "https://umbau-allrounder.ch/logos/LOGO-wTBlack.png",
                width: 800,
                height: 200,
              },
              "@id": "https://umbau-allrounder.ch/",
              url: "https://umbau-allrounder.ch/",
              telephone: "+41 79 293 05 19",
              email: "info@umbau-allrounder.ch",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Friedackerstrasse 37",
                addressLocality: "Zürich",
                postalCode: "8050",
                addressCountry: "CH",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "47.407890281597766",
                longitude: "8.553993265415455",
              },
              description:
                "Ihr Partner für Umbau, Renovation und Sanierung in Zürich.",
              areaServed: [
                "Zürich",
                "Zürich Umgebung",
                "Kanton Zürich",
                "Deutschschweiz",
              ],
              priceRange: "$$",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Umbau-Dienstleistungen",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Bauleitung",
                      description:
                        "Wir übernehmen die vollständige Koordination Ihres Bauprojekts – von der Planung bis zur Fertigstellung. Dabei sorgen wir für einen reibungslosen Ablauf und die termingerechte Ausführung aller Arbeiten.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Beratung",
                      description:
                        "Wir beraten Sie umfassend zu allen Aspekten Ihres Umbau- oder Renovationsprojekts. Wir helfen Ihnen, die richtigen Materialien, Designs und Lösungen für Ihre Bedürfnisse zu finden.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Maurerarbeiten",
                      description:
                        "Wir übernehmen alle Maurerarbeiten sorgfältig und fachgerecht. Dabei legen wir Wert auf saubere Ausführung, langlebige Ergebnisse und den Einsatz solider Materialien.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Gipserarbeiten",
                      description:
                        "Wir sorgen für makellose Wand- und Deckenoberflächen. Ob Neugestaltung oder Reparatur - wir garantieren ein erstklassiges Finish, das Ihre Räume in neuem Glanz erstrahlen lässt.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Allgemeine Renovationen",
                      description:
                        "Wir bieten komplette Renovationslösungen für Wohn- und Geschäftsräume. Unser Team kümmert sich um alle Aspekte der Erneuerung, vom Boden bis zur Decke, und verwandelt veraltete Räume in moderne Wohlfühlorte.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Bodenverlegung",
                      description:
                        "Wir verlegen verschiedenste Bodenbeläge mit höchster Sorgfalt. Ob Parkett, Laminat, Fliesen oder Vinyl - wir sorgen für eine fachgerechte Installation und ein perfektes Ergebnis.",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
