import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Umbau-Allrounder GmbH - Ihr Partner für hochwertige Umbauten und Renovationen",
  description:
    "Professionelle Umbau- und Renovationsarbeiten in Zürich und Umgebung. Wir verwandeln Ihre Räume mit Fachkompetenz und Leidenschaft.",
  openGraph: {
    title:
      "Umbau-Allrounder GmbH - Ihr Partner für hochwertige Umbauten und Renovationen",
    description:
      "Professionelle Umbau- und Renovationsarbeiten in Zürich und Umgebung. Wir verwandeln Ihre Räume mit Fachkompetenz und Leidenschaft.",
    url: "https://umbau-allrounder.ch",
    siteName: "Umbau-Allrounder GmbH",
    images: [
      {
        url: "/logos/LOGO-wTBlack.png",
        width: 800,
        height: 200,
        alt: "Umbau-Allrounder GmbH Logo",
      },
    ],
    locale: "de_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Umbau-Allrounder GmbH - Ihr Partner für hochwertige Umbauten und Renovationen",
    description:
      "Professionelle Umbau- und Renovationsarbeiten in Zürich und Umgebung. Wir verwandeln Ihre Räume mit Fachkompetenz und Leidenschaft.",
    images: ["/logos/LOGO-wTBlack.png"],
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
              address: {
                "@type": "PostalAddress",
                streetAddress: "Friedackerstrasse 37",
                addressLocality: "Zürich",
                postalCode: "8050",
                addressCountry: "CH",
              },
              description:
                "Ihr Partner für Umbau, Renovation und Sanierung in Zürich.",
              areaServed: "Zürich",
              priceRange: "$$",
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
