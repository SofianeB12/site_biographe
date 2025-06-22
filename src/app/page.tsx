import BanierePhoto from "@/components/BanierePhoto";
import { PresentationAccueil } from "@/components/PresentationAccueil";
import ContactForm from "../components/ContactForm";
import Prestations from "@/components/Prestations";

export default function HomePage() {
  return (
    <section className="">
      <BanierePhoto/>
      <div id="presentation">
      <PresentationAccueil />
      </div>
      <div id="tarifs" className="bg-background2">
        <Prestations></Prestations>
      </div>
      <section id="contact" className="bg-background">
      <ContactForm />
      </section>
      

    </section>
  );
}
