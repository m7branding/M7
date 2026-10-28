import { FloatDock } from "@/components/chrome/FloatDock";

// TIJDELIJK (agent D): de dock met een test-WhatsApp-nummer bekijken. Wordt weer verwijderd.
export default function DockLab() {
  return (
    <main style={{ minHeight: "300vh", background: "radial-gradient(60% 50% at 70% 80%, #1a1a22, #030304)", padding: 40, color: "#fff" }}>
      <p>dock lab</p>
      <FloatDock whatsapp="31600000000" email="hello@m7branding.com" />
    </main>
  );
}
