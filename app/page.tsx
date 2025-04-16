"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  HardHat,
  Brain,
  Hammer,
  Brush,
  Home as HomeIcon,
  Footprints,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GradientText } from "@/components/ui/gradient-text";

import React, { useState } from "react";

export default function Home() {
  // Function to handle smooth scrolling
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Contact Formular Error Handling
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    phone: "",
  });
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Handle Input Changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Check required fields
    if (!form.firstName || !form.lastName || !form.email || !form.message) {
      setFormError("Bitte füllen Sie alle erforderlichen Felder aus.");
      setFormSuccess(null);
      return;
    }
    // E-Mail validation
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setFormError("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      setFormSuccess(null);
      return;
    }
    setFormError(null);
    setIsLoading(true);
    // Send form data to Formspree
    try {
      const response = await fetch("https://formspree.io/f/mgvaqply", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Vorname: form.firstName,
          Nachname: form.lastName,
          "E-Mail": form.email,
          Telefon: form.phone || "",
          Nachricht: form.message,
        }),
      });
      if (response.ok) {
        setFormSuccess("Nachricht wurde erfolgreich übermittelt!");
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
          phone: "",
        });
      } else {
        setFormError(
          "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."
        );
        setFormSuccess(null);
      }
    } catch (error) {
      setFormError(
        "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."
      );
      setFormSuccess(null);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-full max-w-[1400px] mx-auto px-4 flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logos/U-Transparent.png"
                alt="Umbau-Allrounder GmbH - Ihr Partner für hochwertige Umbauten und Renovationen in Zürich"
                width={300}
                height={75}
                className="h-14 w-auto md:h-16"
              />
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#services"
                onClick={(e) => handleScroll(e, "services")}
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Dienstleistungen
              </Link>
              <Link
                href="#about"
                onClick={(e) => handleScroll(e, "about")}
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Über uns
              </Link>
              <Link
                href="#contact"
                onClick={(e) => handleScroll(e, "contact")}
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Kontakt
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button asChild>
              <Link href="#contact" onClick={(e) => handleScroll(e, "contact")}>
                Kontakt aufnehmen
              </Link>
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
                    Ihr Partner für <GradientText>hochwertige</GradientText>{" "}
                    Umbauten und Renovationen
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Wir verwandeln Ihre Räume mit Fachkompetenz und
                    Leidenschaft. Von der Beratung bis zur Fertigstellung -
                    alles aus einer Hand.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link
                      href="#contact"
                      onClick={(e) => handleScroll(e, "contact")}
                    >
                      Kontakt aufnehmen
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link
                      href="#services"
                      onClick={(e) => handleScroll(e, "services")}
                    >
                      Unsere Dienstleistungen
                    </Link>
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
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Unsere Dienstleistungen
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Wir bieten ein umfassendes Angebot an Bau- und
                  Renovationsdienstleistungen für Ihr Zuhause oder Geschäft.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <HardHat className="h-6 w-6" />
                  </div>
                  <CardTitle>Bauleitung</CardTitle>
                  <CardDescription>
                    Professionelle Koordination Ihres Projekts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Wir übernehmen die vollständige Koordination Ihres
                    Bauprojekts – von der Planung bis zur Fertigstellung. Dabei
                    sorgen wir für einen reibungslosen Ablauf und die
                    termingerechte Ausführung aller Arbeiten.
                  </p>
                </CardContent>
              </Card>
              <Card className="group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Brain className="h-6 w-6" />
                  </div>
                  <CardTitle>Beratung</CardTitle>
                  <CardDescription>
                    Fachkundige Unterstützung bei Ihren Entscheidungen
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Wir beraten Sie umfassend zu allen Aspekten Ihres Umbau-
                    oder Renovationsprojekts. Wir helfen Ihnen, die richtigen
                    Materialien, Designs und Lösungen für Ihre Bedürfnisse zu
                    finden.
                  </p>
                </CardContent>
              </Card>
              <Card className="group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Hammer className="h-6 w-6" />
                  </div>
                  <CardTitle>Maurerarbeiten</CardTitle>
                  <CardDescription>
                    Stabile Ausführung – vom Fundament bis zum Feinschliff
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Wir übernehmen alle Maurerarbeiten sorgfältig und
                    fachgerecht. Dabei legen wir Wert auf saubere Ausführung,
                    langlebige Ergebnisse und den Einsatz solider Materialien –
                    passend zum Umfang Ihres Bauprojekts.
                  </p>
                </CardContent>
              </Card>
              <Card className="group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Brush className="h-6 w-6" />
                  </div>
                  <CardTitle>Gipserarbeiten</CardTitle>
                  <CardDescription>
                    Perfekte Oberflächen für Ihre Räume
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Wir sorgen für makellose Wand- und Deckenoberflächen. Ob
                    Neugestaltung oder Reparatur - wir garantieren ein
                    erstklassiges Finish, das Ihre Räume in neuem Glanz
                    erstrahlen lässt.
                  </p>
                </CardContent>
              </Card>
              <Card className="group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <HomeIcon className="h-6 w-6" />
                  </div>
                  <CardTitle>Allgemeine Renovationen</CardTitle>
                  <CardDescription>
                    Umfassende Erneuerung Ihrer Räumlichkeiten
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Wir bieten komplette Renovationslösungen für Wohn- und
                    Geschäftsräume. Unser Team kümmert sich um alle Aspekte der
                    Erneuerung, vom Boden bis zur Decke, und verwandelt
                    veraltete Räume in moderne Wohlfühlorte.
                  </p>
                </CardContent>
              </Card>
              <Card className="group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Footprints className="h-6 w-6" />
                  </div>
                  <CardTitle>Bodenverlegung</CardTitle>
                  <CardDescription>
                    Hochwertige Böden für jeden Geschmack
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Wir verlegen verschiedenste Bodenbeläge mit höchster
                    Sorgfalt. Ob Parkett, Laminat, Fliesen oder Vinyl - wir
                    sorgen für eine fachgerechte Installation und ein perfektes
                    Ergebnis.
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
                  Über die Umbau-Allrounder GmbH
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Seit unserer Gründung haben wir uns auf Umbau- und
                  Renovationsarbeiten in Zürich und Umgebung spezialisiert. Wir
                  legen besonderen Wert auf persönlichen Kontakt und
                  individuelle Betreuung unserer Kunden.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p>Erfahrenes Team</p>
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
                    <p>Lokales Unternehmen</p>
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
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Kontaktieren Sie uns
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Wir freuen uns darauf, Ihr nächstes Projekt zu besprechen.
                  Kontaktieren Sie uns für eine kostenlose Beratung.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Kontaktinformationen</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <p>Friedackerstrasse 37</p>
                    </div>
                    <p className="pl-8">8050 Zürich</p>
                    <p className="pl-8">Schweiz</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <p>+41 79 293 05 19</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <p>
                      <a href="mailto:info@umbau-allrounder.ch">
                        info@umbau-allrounder.ch
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Schreiben Sie uns</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="first-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Vorname <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="first-name"
                          name="firstName"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Max"
                          value={form.firstName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="last-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Nachname <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="last-name"
                          name="lastName"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Muster"
                          value={form.lastName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        E-Mail <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="text"
                        name="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="max.muster@example.com"
                        value={form.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Telefon{" "}
                        <span className="text-xs text-muted-foreground">
                          (optional)
                        </span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="+41 79 123 45 67"
                        value={form.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Nachricht <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={form.message}
                        onChange={handleInputChange}
                      />
                    </div>
                    {/* Error message */}
                    {formError && (
                      <div className="text-red-600 text-xs text-left mb-2">
                        {formError}
                      </div>
                    )}
                    {/* Success message */}
                    {formSuccess && (
                      <div className="text-green-600 text-xs text-left mb-2">
                        {formSuccess}
                      </div>
                    )}
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            ></path>
                          </svg>
                          Wird gesendet ...
                        </span>
                      ) : (
                        "Nachricht senden"
                      )}
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
            &copy; {new Date().getFullYear()} Umbau-Allrounder GmbH
          </p>
          <div className="flex gap-4">
            <Link
              href="/impressum"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Impressum
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
