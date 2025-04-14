import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-full max-w-[1400px] mx-auto px-4 flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold">UMBAU-ALLROUNDER</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#services"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Dienstleistungen
              </Link>
              <Link
                href="#about"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Über uns
              </Link>
              <Link
                href="#testimonials"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Referenzen
              </Link>
              <Link
                href="#contact"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Kontakt
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button asChild>
              <Link href="#contact">Kontakt aufnehmen</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Ihr Partner für hochwertige Umbauten und Renovationen
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Wir verwandeln Ihre Räume mit Fachkompetenz und Leidenschaft. Von der Beratung bis zur
                    Fertigstellung - alles aus einer Hand.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="#contact">
                      Kostenlose Beratung
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#services">Unsere Dienstleistungen</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=800"
                width={800}
                height={550}
                alt="Umbau-Allrounder Projektbild"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Unsere Dienstleistungen</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Wir bieten ein umfassendes Angebot an Bau- und Renovationsdienstleistungen für Ihr Zuhause oder
                  Geschäft.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Bauleitung</CardTitle>
                  <CardDescription>Professionelle Koordination Ihres Projekts</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Wir übernehmen die komplette Koordination Ihres Bauprojekts, von der Planung bis zur Fertigstellung.
                    Unsere erfahrenen Bauleiter sorgen für einen reibungslosen Ablauf und termingerechte Ausführung.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Beratung</CardTitle>
                  <CardDescription>Fachkundige Unterstützung bei Ihren Entscheidungen</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Unsere Experten beraten Sie umfassend zu allen Aspekten Ihres Umbau- oder Renovationsprojekts. Wir
                    helfen Ihnen, die richtigen Materialien, Designs und Lösungen für Ihre Bedürfnisse zu finden.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Maurerarbeiten</CardTitle>
                  <CardDescription>Solide Grundlagen für Ihr Projekt</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Von Fundamentarbeiten bis hin zu dekorativen Mauerwerken - unsere Maurer führen alle Arbeiten mit
                    höchster Präzision und Qualität aus. Wir verwenden nur hochwertige Materialien für langlebige
                    Ergebnisse.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Gipserarbeiten</CardTitle>
                  <CardDescription>Perfekte Oberflächen für Ihre Räume</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Unsere Gipser sorgen für makellose Wand- und Deckenoberflächen. Ob Neugestaltung oder Reparatur -
                    wir garantieren ein erstklassiges Finish, das Ihre Räume in neuem Glanz erstrahlen lässt.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Allgemeine Renovationen</CardTitle>
                  <CardDescription>Umfassende Erneuerung Ihrer Räumlichkeiten</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Wir bieten komplette Renovationslösungen für Wohn- und Geschäftsräume. Unser Team kümmert sich um
                    alle Aspekte der Erneuerung, vom Boden bis zur Decke, und verwandelt veraltete Räume in moderne
                    Wohlfühlorte.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Bodenverlegung</CardTitle>
                  <CardDescription>Hochwertige Böden für jeden Geschmack</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Unsere Spezialisten verlegen verschiedenste Bodenbeläge mit höchster Sorgfalt. Ob Parkett, Laminat,
                    Fliesen oder Vinyl - wir sorgen für eine fachgerechte Installation und ein perfektes Ergebnis.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Über Umbau-Allrounder GmbH
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Seit unserer Gründung haben wir uns auf hochwertige Umbau- und Renovationsarbeiten in Zürich und
                  Umgebung spezialisiert. Als Kleinunternehmen legen wir besonderen Wert auf persönlichen Kontakt und
                  individuelle Betreuung unserer Kunden.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p>Erfahrenes Team von Fachleuten</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p>Qualitativ hochwertige Materialien und Ausführung</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p>Termintreue und transparente Kommunikation</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p>Umfassende Garantie auf alle Arbeiten</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p>Lokales Unternehmen mit Kenntnis der regionalen Besonderheiten</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Umbau-Allrounder Team"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Was unsere Kunden sagen</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Erfahren Sie, wie wir die Erwartungen unserer Kunden übertreffen und ihre Räume transformieren.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Familie Müller, Zürich</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="italic">
                    "Die Umbau-Allrounder GmbH hat unsere Küche komplett renoviert und wir sind begeistert vom Ergebnis.
                    Das Team war professionell, pünktlich und hat alle unsere Wünsche berücksichtigt. Wir können sie nur
                    wärmstens empfehlen!"
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Café Sonnenschein, Zürich</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="italic">
                    "Wir haben unser Café während der Betriebsferien renovieren lassen. Die Umbau-Allrounder haben nicht
                    nur termingerecht gearbeitet, sondern auch qualitativ hochwertige Arbeit geleistet. Unsere Kunden
                    sind begeistert vom neuen Look!"
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Herr Schmidt, Winterthur</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="italic">
                    "Nach einem Wasserschaden musste mein Badezimmer komplett saniert werden. Die Umbau-Allrounder haben
                    sich um alles gekümmert - von der Koordination mit der Versicherung bis zur perfekten Ausführung.
                    Das neue Bad ist ein Traum!"
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Frau Weber, Zürich</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="italic">
                    "Die Beratung war ausgezeichnet und hat mir geholfen, die richtigen Entscheidungen für meine
                    Wohnungsrenovierung zu treffen. Das Team war freundlich, sauber und hat qualitativ hochwertige
                    Arbeit geleistet. Ich bin rundum zufrieden!"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Kontaktieren Sie uns</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Wir freuen uns darauf, Ihr nächstes Projekt zu besprechen. Kontaktieren Sie uns für eine kostenlose
                  Beratung.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Kontaktinformationen</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <p>Musterstrasse 123, 8000 Zürich, Schweiz</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <p>+41 44 123 45 67</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <p>info@umbau-allrounder.ch</p>
                  </div>
                  <div className="pt-4">
                    <h3 className="font-medium mb-2">Öffnungszeiten:</h3>
                    <p>Montag - Freitag: 08:00 - 17:00 Uhr</p>
                    <p>Samstag: Nach Vereinbarung</p>
                    <p>Sonntag: Geschlossen</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Schreiben Sie uns</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="first-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Vorname
                        </label>
                        <input
                          id="first-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Max"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="last-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Nachname
                        </label>
                        <input
                          id="last-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Muster"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        E-Mail
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="max.muster@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Telefon
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="+41 79 123 45 67"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Nachricht
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Beschreiben Sie Ihr Projekt..."
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Nachricht senden
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="w-full max-w-[1400px] mx-auto px-4 flex flex-col items-center justify-between gap-4 md:flex-row md:px-6">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Umbau-Allrounder GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Impressum
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Datenschutz
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              AGB
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
