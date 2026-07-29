import Link from "next/link";
import { Logo } from "@/components/Logo";
import { PageTransition } from "@/components/PageTransition";
import { SideNav } from "./SideNav";
import "./app.css";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="shell">
      <aside className="side">
        <Link href="/">
          <Logo size={17} />
        </Link>
        <SideNav />
        <div className="side-foot">
          <b>acme.indexlink.io</b>
          Hub live · readiness 82%
          <div className="progress-track" style={{ marginTop: 8 }}>
            <div className="progress-fill" style={{ width: "82%" }} />
          </div>
        </div>
      </aside>
      <main className="main">
        <PageTransition>{children}</PageTransition>
      </main>
    </div>
  );
}
