import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Umbau-Allrounder GmbH | Ihr Partner für Umbauten und Renovationen in Zürich",
  description:
    "Professionelle Umbau- und Renovationsarbeiten in Zürich. Bauleitung, Beratung, Maurerarbeiten, Gipserarbeiten, Renovationen und Bodenverlegung aus einer Hand.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
