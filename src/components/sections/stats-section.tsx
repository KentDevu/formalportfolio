"use client";

import { useEffect, useRef } from "react";

const SLIDES = [
  {
    ghost: "70",
    kicker: "01 — Catalyx · Secuvia",
    count: 70,
    unit: "%",
    label: "phishing detection lift",
    blurb:
      "Architected a serverless security platform that reshaped phishing triage — multi-source CTI from VirusTotal, AbuseIPDB, Shodan, URLhaus with LLM-based confidence scoring.",
  },
  {
    ghost: "AI",
    kicker: "02 — Tenext.AI",
    count: 3,
    unit: "agents",
    label: "chatbot · callbot · emailbot",
    blurb:
      "Configured and deployed AI agents to automate customer interactions and business workflows. Embedded conversational AI into client CRMs and websites, automating lead capture.",
  },
  {
    ghost: "7",
    kicker: "03 — Catalyx · ChatFlow AI",
    count: 7,
    unit: "flows",
    label: "automated messenger workflows",
    blurb:
      "Multi-tenant SaaS for Facebook Messenger automation. Gemini AI reasoning, n8n orchestration for lead capture, CRM sync, and smart triggers — all webhook-driven.",
  },
  {
    ghost: "40",
    kicker: "04 — FitUp · AI personalization",
    count: 40,
    unit: "%",
    label: "user engagement ↑",
    blurb:
      "RAG-grounded AI fitness planner that didn't just retain users — it brought them back. +40% engagement from personalized, evidence-based workout generation via Groq.",
  },
];

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const idxRef = useRef<HTMLSpanElement>(null);
  const currentActiveRef = useRef(-1);
  const animatedRef = useRef(new Set<number>());

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const track = trackRef.current;
    const fill = fillRef.current;
    const idxLabel = idxRef.current;
    if (!section || !stage || !track || !fill || !idxLabel) return;

    const slides = track.querySelectorAll<HTMLElement>(".sp-slide");
    const total = slides.length;
    let stageWidth = 0;

    function measure() {
      stageWidth = stage!.clientWidth;
      slides.forEach((s) => {
        s.style.width = stageWidth + "px";
      });
      track!.style.width = stageWidth * total + "px";
      const vh = window.innerHeight;
      const travel = (total - 1) * stageWidth;
      const scrollLength = Math.max(travel * 1.15, vh * 1.5);
      section!.style.height = vh + scrollLength + "px";
    }

    function animateNumber(el: HTMLElement, target: number) {
      const dur = 900;
      const start = performance.now();
      function step(now: number) {
        const t = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = String(Math.round(target * eased));
        if (t < 1) requestAnimationFrame(step);
        else el.textContent = String(target);
      }
      requestAnimationFrame(step);
    }

    function update() {
      const currentStageW = stage!.clientWidth;
      if (currentStageW !== stageWidth && currentStageW > 0) {
        stageWidth = currentStageW;
        slides.forEach((s) => {
          s.style.width = stageWidth + "px";
        });
        track!.style.width = stageWidth * total + "px";
      }
      const rect = section!.getBoundingClientRect();
      const vh = window.innerHeight;
      const totalScroll = rect.height - vh;
      const p = Math.max(0, Math.min(1, -rect.top / totalScroll));

      const maxTranslate = (total - 1) * stageWidth;
      track!.style.transform = `translate3d(${-p * maxTranslate}px, 0, 0)`;

      const idx = Math.min(total - 1, Math.round(p * (total - 1)));
      if (idx !== currentActiveRef.current) {
        currentActiveRef.current = idx;
        idxLabel!.textContent = String(idx + 1).padStart(2, "0");
        const numEl = slides[idx].querySelector<HTMLElement>(".sp-num");
        if (numEl && !animatedRef.current.has(idx)) {
          animatedRef.current.add(idx);
          animateNumber(numEl, parseFloat(numEl.dataset.count || "0"));
        }
      }
      fill!.style.width = p * 100 + "%";
    }

    measure();
    update();

    const onScroll = () => requestAnimationFrame(update);
    const onResize = () => {
      measure();
      update();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      className="stats-pin"
      data-section="stats"
      ref={sectionRef}
    >
      <div className="stats-pin-inner">
        <div className="stats-pin-header">
          <div className="section-label">Impact / Measured</div>
          <div className="stats-pin-progress">
            <span className="stats-pin-count">
              <span ref={idxRef}>01</span>
              <span style={{ opacity: 0.4 }}> / 04</span>
            </span>
            <div className="stats-pin-bar">
              <div className="stats-pin-fill" ref={fillRef} />
            </div>
          </div>
        </div>

        <div className="stats-pin-stage" ref={stageRef}>
          <div className="stats-pin-track" ref={trackRef}>
            {SLIDES.map((slide, i) => (
              <div className="sp-slide" data-i={i} key={i}>
                <div className="sp-ghost">{slide.ghost}</div>
                <div className="sp-kicker">{slide.kicker}</div>
                <div className="sp-headline">
                  <span className="sp-num" data-count={slide.count}>
                    0
                  </span>
                  <span className="sp-unit">{slide.unit}</span>
                </div>
                <div className="sp-label">{slide.label}</div>
                <p className="sp-blurb">{slide.blurb}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="stats-pin-footer">
          <span className="sp-hint">scroll to advance</span>
          <span className="sp-meta">horizontal track · 4 metrics</span>
        </div>
      </div>
    </section>
  );
}
