import { Configurator } from "@/components/experience/Configurator";
import { IntakeModal } from "@/components/intake/IntakeModal";
import { intakeProps } from "@/components/intake/intake-props";
import { site } from "@/content/site";
import "./experience.css";

// Publieke, interactieve M7 service-catalogus / online experience.
export default function HomePage() {
  return (
    <main className="exp-root" data-theme="dark">
      <Configurator />
      {/* Korte intake: opent via de intake-blokken of /letsgo#intake */}
      <IntakeModal {...intakeProps()} privacyHref={`${site.url}/privacybeleid`} />
    </main>
  );
}
