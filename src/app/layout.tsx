import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen bg-background">
        <Navbar />
        {/* Ajout du padding-top pour éviter le chevauchement */}
        <main className="flex-grow pt-navbarsize">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

