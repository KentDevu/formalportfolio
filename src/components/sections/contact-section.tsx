export function ContactSection() {
  return (
    <section id="contact" className="contact" data-section="contact">
      <div className="contact-available reveal">
        <span className="live-dot" />
        Available for select opportunities · 2026
      </div>
      <h2 className="contact-headline reveal">
        Let&apos;s build <span className="serif">something</span>
        <br />
        worth shipping <span className="at">@</span>{" "}
        <a href="mailto:belenkentharold@gmail.com">belenkentharold</a>.
      </h2>

      <div className="contact-grid">
        <div className="contact-channels reveal-stagger">
          <a className="ch-row" href="mailto:belenkentharold@gmail.com">
            <div className="ch-label">Email</div>
            <div className="ch-val">belenkentharold@gmail.com</div>
            <div className="ch-action">Write →</div>
          </a>
          <a className="ch-row" href="https://linkedin.com/in/kentharoldbelen" target="_blank" rel="noopener noreferrer">
            <div className="ch-label">LinkedIn</div>
            <div className="ch-val">/in/kentharoldbelen</div>
            <div className="ch-action">Connect →</div>
          </a>
          <a className="ch-row" href="https://github.com/Kentdevu" target="_blank" rel="noopener noreferrer">
            <div className="ch-label">GitHub</div>
            <div className="ch-val">@Kentdevu</div>
            <div className="ch-action">Follow →</div>
          </a>
          <a className="ch-row" href="tel:+639930426695">
            <div className="ch-label">Phone</div>
            <div className="ch-val">+63 993-042-6695</div>
            <div className="ch-action">Call →</div>
          </a>
          <a className="ch-row" href="/assets/resume.pdf" download>
            <div className="ch-label">Resume</div>
            <div className="ch-val">resume.pdf</div>
            <div className="ch-action">Download →</div>
          </a>
        </div>

        <div className="contact-side reveal-stagger">
          <div className="contact-meta-card">
            <h4>Based in</h4>
            <p className="big">
              Makati<span className="unit">, </span>PH
            </p>
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: 12,
                color: "var(--muted)",
                marginTop: 8,
              }}
            >
              Open to remote / hybrid / relocation
            </p>
          </div>
          <div className="contact-meta-card">
            <h4>Response time</h4>
            <p className="big">
              &lt; 24<span className="unit">h</span>
            </p>
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: 12,
                color: "var(--muted)",
                marginTop: 8,
              }}
            >
              Usually much faster during work hours
            </p>
          </div>
          <div className="contact-meta-card">
            <h4>Looking for</h4>
            <p>
              AI agent development, security automation, or automation
              engineering roles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
