import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Umbau-Allrounder GmbH | Umbau & Renovation in Zürich",
  description:
    "Ihr Partner für Umbau, Renovation und Sanierung in Zürich. Umbau-Allrounder GmbH – Zuverlässig, erfahren und kompetent.",
  openGraph: {
    title: "Umbau-Allrounder GmbH | Umbau & Renovation in Zürich",
    description:
      "Ihr Partner für Umbau, Renovation und Sanierung in Zürich. Umbau-Allrounder GmbH – Zuverlässig, erfahren und kompetent.",
    type: "website",
    locale: "de_CH",
    url: "https://umbau-allrounder.ch/",
    siteName: "Umbau-Allrounder GmbH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Umbau-Allrounder GmbH | Umbau & Renovation in Zürich",
    description:
      "Ihr Partner für Umbau, Renovation und Sanierung in Zürich. Umbau-Allrounder GmbH – Zuverlässig, erfahren und kompetent.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        {/* SEO: LocalBusiness Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Umbau-Allrounder GmbH',
              image: 'https://umbau-allrounder.ch/logo.png', // Passe ggf. den Pfad an
              '@id': 'https://umbau-allrounder.ch/',
              url: 'https://umbau-allrounder.ch/',
              telephone: '+41 79 293 05 19', // Passe ggf. die Nummer an
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Friedackerstrasse 37', // Passe ggf. an
                addressLocality: 'Zürich',
                postalCode: '8050',
                addressCountry: 'CH',
              },
              description: 'Ihr Partner für Umbau, Renovation und Sanierung in Zürich.',
              areaServed: 'Zürich',
              priceRange: '$$'
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
