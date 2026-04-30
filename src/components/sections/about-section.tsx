export function AboutSection() {
  return (
    <section id="about" className="about" data-section="about">
      <div className="about-grid">
        <div className="about-left">
          <div className="section-label reveal">05 / About</div>
          <h2 className="about-title reveal">
            Software + <span className="serif">security</span>, in one person.
          </h2>
          <div className="about-body reveal">
            <p>
              I&apos;m a{" "}
              <span className="hl">Software Engineer at Tenext.AI</span> and{" "}
              <span className="hl">Tech Lead &amp; Co-Founder at Catalyx Solutions</span>,
              working at the intersection of AI agent deployment, full-stack
              engineering, and cybersecurity — a combination most teams hire
              three people for.
            </p>
            <p>
              My work ranges from{" "}
              <em>configuring and deploying AI agents</em> — chatbots, callbots,
              and emailbots — to{" "}
              <em>architecting security automation platforms</em> that cut
              analyst workload by 70%, to building{" "}
              <em>nationwide inventory systems</em> running across multiple
              branches. I&apos;ve presented at the GDG First AI Regional
              Conference, won the Base PH Hackathon, and hold a{" "}
              <span className="hl">
                Top 4% global ranking on TryHackMe
              </span>.
            </p>
            <p>
              I don&apos;t just ship code — I ship products that move numbers. If
              that sounds like what you need, let&apos;s talk.
            </p>
          </div>
        </div>

        <div className="about-right">
          <div className="section-label reveal">Trajectory</div>
          <div className="about-timeline reveal-stagger">
            <div className="tl-item now">
              <div className="tl-date">Apr 2026 — Now</div>
              <div className="tl-role">Software Engineer</div>
              <div className="tl-where">Tenext.AI · Makati (Hybrid)</div>
              <div className="tl-desc">
                Deploying AI agents — chatbots, callbots, emailbots. Embedding
                conversational AI into client CRMs and websites.
              </div>
            </div>
            <div className="tl-item now">
              <div className="tl-date">Oct 2025 — Now</div>
              <div className="tl-role">Tech Lead &amp; Co-Founder</div>
              <div className="tl-where">Catalyx Solutions · Remote</div>
              <div className="tl-desc">
                Co-founded a 4-person startup. Secuvia, ChatFlow AI, Smart Form
                Encoder.
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-date">Feb 2026 — May 2026</div>
              <div className="tl-role">Software Engineer Intern</div>
              <div className="tl-where">PMTI · Subic Bay Freeport Zone</div>
              <div className="tl-desc">
                Laravel backend. Built ePasada for driver operations.
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-date">Nov 2025 — Feb 2026</div>
              <div className="tl-role">Software Engineer</div>
              <div className="tl-where">Lujo PH · Remote</div>
              <div className="tl-desc">
                Backend &amp; REST APIs. Built Avitus IMS — nationwide inventory
                management.
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-date">Mar 2025 — Aug 2025</div>
              <div className="tl-role">Software Engineer Intern</div>
              <div className="tl-where">Kloudtech · Balanga City</div>
              <div className="tl-desc">
                Backend and frontend dev. Sprint planning, code reviews, system
                integration.
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-date">2022 — Jun 2026</div>
              <div className="tl-role">BS Computer Science</div>
              <div className="tl-where">Gordon College, Olongapo</div>
              <div className="tl-desc">
                Expected graduation June 2026. DataCamp Scholar. AWS Cloud Club
                Committee.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
