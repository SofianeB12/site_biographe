import "@/src/styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300','400','500','600','700'], // charge seulement ce dont tu as besoin
  display: 'swap',
  variable: '--font-quicksand', // pratique si tu veux l’utiliser avec Tailwind
  preload: true, // recommandé
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={quicksand.variable}>
      <body className="flex flex-col min-h-screen bg-background fo">
        <Navbar />
        {/* Ajout du padding-top pour éviter le chevauchement */}
        <main className="flex-grow pt-navbarsize">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

