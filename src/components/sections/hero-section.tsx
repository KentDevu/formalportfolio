"use client";

import { Terminal } from "@/components/terminal";

export function HeroSection() {
  return (
    <section id="hero" className="hero" data-section="hero">
      <div className="hero-left">
        <div className="hero-meta reveal">Portfolio / 2026 — v.01</div>
        <h1 className="hero-name reveal">
          Kent Harold
          <br />
          <span className="serif">Belen</span>
          <span className="cursor-block" />
        </h1>
        <p className="hero-tagline reveal">
          <span className="hl">Software Engineer</span> at Tenext.AI &amp;{" "}
          <span className="hl">Tech Lead</span> at Catalyx Solutions. I deploy
          AI agents, architect security automation platforms, and ship products
          that measurably move numbers.
        </p>
        <div className="hero-stats reveal-stagger">
          <div>
            <div className="hero-stat-num">
              <span data-count="49996" data-suffix="+">
                0
              </span>
            </div>
            <div className="hero-stat-label">Lines shipped</div>
          </div>
          <div>
            <div className="hero-stat-num">
              Top{" "}
              <span data-count="4" data-suffix="%">
                0
              </span>
            </div>
            <div className="hero-stat-label">TryHackMe global</div>
          </div>
          <div>
            <div className="hero-stat-num">
              <span data-count="99.9" data-decimals="1" data-suffix="%">
                0
              </span>
            </div>
            <div className="hero-stat-label">Prod uptime</div>
          </div>
        </div>
      </div>

      <div className="hero-right reveal">
        <Terminal />
      </div>
    </section>
  );
}
