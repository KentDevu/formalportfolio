import { Nav } from "@/components/sections/nav";
import { SideRail } from "@/components/sections/side-rail";
import { HeroSection } from "@/components/sections/hero-section";
import { MarqueeSection } from "@/components/sections/marquee-section";
import { WorkSection } from "@/components/sections/work-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TrajectorySection } from "@/components/sections/trajectory-section";
import { CredentialsSection } from "@/components/sections/credentials-section";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Interactions } from "@/components/interactions";

export default function Home() {
  return (
    <>
      <Interactions />
      <Nav />
      <SideRail />
      <HeroSection />
      <MarqueeSection />
      <WorkSection />
      <StatsSection />
      <TrajectorySection />
      <CredentialsSection />
      <AboutSection />
      <ContactSection />
      <footer className="footer">
        <div className="footer-left">
          <span>© 2026 Kent Harold Belen</span>
          <span>·</span>
          <span>Built in Next.js, hand-made with care</span>
        </div>
        <div>
          <span>v.01 — 2026.04</span>
        </div>
      </footer>
    </>
  );
}
