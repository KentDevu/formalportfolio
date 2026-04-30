"use client";

import { useEffect, useState, useCallback, useRef } from "react";

const PROJECTS = [
  {
    num: "01",
    name: "Secuvia",
    live: true,
    desc: "Serverless SaaS for phishing detection & threat intel. AWS Lambda microservices, multi-source CTI from VirusTotal, AbuseIPDB, Shodan, URLhaus, OTX. LLM-based analysis with confidence scoring. Gmail API & IMAP ingestion.",
    tags: ["AWS Lambda", "DynamoDB", "Cloudflare R2", "CTI", "LLM"],
    color: "#c6ff3d",
    href: "https://secuvia.vercel.app/",
  },
  {
    num: "02",
    name: "ChatFlow AI",
    live: false,
    desc: "Multi-tenant SaaS for automated Facebook Messenger replies & post comment responses. Meta Graph API webhooks, Gemini AI for contextual reasoning, n8n workflow orchestration for lead capture and CRM sync.",
    tags: ["n8n", "Meta Graph API", "Next.js", "Gemini AI"],
    color: "#6d8eff",
    href: "https://github.com/Kentdevu",
  },
  {
    num: "03",
    name: "Smart Form Encoder",
    live: false,
    desc: "Cross-platform automated OCR for government forms. React Native mobile capture, Django + PaddleOCR field extraction, LLM post-processing for error correction, Next.js verification dashboard.",
    tags: ["React Native", "Django", "PaddleOCR", "LLM"],
    color: "#febc2e",
    href: "https://github.com/Kentdevu",
  },
  {
    num: "04",
    name: "Avitus IMS",
    live: false,
    desc: "Nationwide inventory management across Avitus Kidney Care branches. Real-time tracking, stock movement logging, branch-level visibility. Scalable REST API with Django, admin dashboard with Next.js + MUI + TanStack.",
    tags: ["Django", "Next.js", "MySQL", "REST"],
    color: "#ff4d3d",
    href: "https://github.com/Kentdevu",
  },
  {
    num: "05",
    name: "FitUp",
    live: true,
    desc: "AI-powered fitness planner with RAG pipeline grounded in curated fitness knowledge base. Structured workout programs based on user goals, body metrics, experience. Progress tracking and adaptive recommendations.",
    tags: ["React", "TypeScript", "Node.js", "Groq", "RAG"],
    color: "#c6ff3d",
    href: "https://fit-up-dun.vercel.app/",
  },
  {
    num: "06",
    name: "AckAI",
    live: false,
    desc: "Real-time AI legal assistance platform for AWS Cloud Club PH Innovation Cup 2025. Agora Conversational AI + Amazon Kendra for RAG-based legal document retrieval and Q&A.",
    tags: ["Agora AI", "Amazon Kendra", "DynamoDB", "S3"],
    color: "#6d8eff",
    href: "https://github.com/Kentdevu",
  },
  {
    num: "07",
    name: "Auralis",
    live: false,
    desc: "End-to-end phishing detection platform. Reduced manual analyst workload by 70–75%. Presented at GDG First AI Regional Conference at Holy Angel University.",
    tags: ["Next.js", "Django", "SIEM", "SOC"],
    color: "#c6ff3d",
    href: "https://github.com/Kentdevu",
  },
];

type Project = (typeof PROJECTS)[number];

export function WorkSection() {
  const [active, setActive] = useState<Project | null>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width;
      el.style.setProperty("--iframe-scale", String(w / 1440));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [active]);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close]);

  return (
    <section id="work" className="work" data-section="work">
      <div className="work-head">
        <div>
          <div className="section-label reveal">02 / Selected Work</div>
          <h2 className="work-title reveal">
            Products that <span className="serif">move numbers</span>, not just
            ship.
          </h2>
        </div>
        <p className="work-subtitle reveal">
          Seven selected engagements — from security SaaS to AI chatbot
          platforms to nationwide inventory systems.
        </p>
      </div>

      <div className="work-list reveal-stagger">
        {PROJECTS.map((p) => (
          <div
            key={p.num}
            className="work-item"
            data-name={p.name}
            data-color={p.color}
            onClick={() => setActive(p)}
          >
            <div className="work-num">{p.num}</div>
            <div className="work-name">
              {p.name}
              {p.live && (
                <span className="status">
                  <span className="live-dot" />
                  Live
                </span>
              )}
            </div>
            <div className="work-desc">{p.desc}</div>
            <div className="work-tags">
              {p.tags.map((t) => (
                <span key={t} className="work-tag">
                  {t}
                </span>
              ))}
            </div>
            <div className="work-arrow">→</div>
          </div>
        ))}
      </div>

      {active && (
        <div className="work-dialog-overlay" onClick={close}>
          <div
            className="work-dialog"
            onClick={(e) => e.stopPropagation()}
            style={{ "--project-color": active.color } as React.CSSProperties}
          >
            {active.live ? (
              <div className="work-dialog-browser">
                <div className="work-dialog-bar">
                  <div className="work-dialog-dots">
                    <span className="work-dialog-dot" />
                    <span className="work-dialog-dot" />
                    <span className="work-dialog-dot" />
                  </div>
                  <div className="work-dialog-url">
                    {active.href.replace(/^https?:\/\//, "")}
                  </div>
                  <a
                    className="work-dialog-visit"
                    href={active.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Site →
                  </a>
                </div>
                <div className="work-dialog-viewport" ref={viewportRef}>
                  <iframe
                    src={active.href}
                    title={`${active.name} preview`}
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  />
                </div>
              </div>
            ) : (
              <div className="work-dialog-info">
                <div className="work-dialog-info-num">{active.num}</div>
                <h3 className="work-dialog-info-name">{active.name}</h3>
                <p className="work-dialog-info-desc">{active.desc}</p>
                <div className="work-dialog-info-tags">
                  {active.tags.map((t) => (
                    <span key={t} className="work-dialog-info-tag">{t}</span>
                  ))}
                </div>
                <a
                  className="work-dialog-visit"
                  href={active.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub →
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
