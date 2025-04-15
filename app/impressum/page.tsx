import React from 'react';
import Link from 'next/link';

const ImpressumPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <div className="w-full max-w-5xl items-start justify-between text-sm lg:flex lg:flex-col">
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>
        <p className="mb-2">Umbau-Allrounder GmbH</p>
        <p>Friedackerstrasse 37</p>
        <p>8050 Zürich</p>
        <p className="mt-2"><a href="mailto:info@umbau-allrounder.ch">info@umbau-allrounder.ch</a></p>
        <p>+41 79 293 05 19</p>
        <p>umbau-allrounder.ch</p>
        <p className="mt-2">Handelsregister-Nr.: CH-020.4.065.511-1</p>
        <p>Rechtsform: Gesellschaft mit beschränkter Haftung, GmbH</p>

        <Link href="/" className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
          Zurück zur Hauptseite
        </Link>
      </div>
    </main>
  );
};

export default ImpressumPage;
