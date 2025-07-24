import BanierePhoto from "../components/BanierePhoto";
import { PresentationAccueil } from "../components/PresentationAccueil";
import ContactSimple from "../components/ContactSimple";
import Prestations from "../components/Prestations";
import Tarifs from "../components/Tarifs";

export default function HomePage() {
  return (
    <section>
      <div id="baniere">
      <BanierePhoto/>
      </div>
      <div className="">
      <div id="presentation">
      <PresentationAccueil />
      </div>
      <section id="prestations" className="bg-background2">
        <Prestations></Prestations>
      </section>
      <section id="tarifs" className="bg-background">
        <Tarifs></Tarifs>
      </section>
      <section id="contact" className="bg-background2">
      <ContactSimple />
      </section>
      </div>

    </section>
  );
}
