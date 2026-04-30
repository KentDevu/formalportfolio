"use client";

import { useState } from "react";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "milestone", label: "Milestones" },
  { key: "cloud", label: "Cloud & AWS" },
  { key: "security", label: "Security" },
  { key: "data", label: "Data & ML" },
  { key: "networking", label: "Networking" },
];

const CREDS = [
  { cat: "milestone", catLabel: "Milestone / Oct 2025", title: "Cofounded Catalyx Solutions — Tech Lead", desc: "Co-founded a 4-person startup building security automation and AI-powered SaaS products. Led Secuvia, ChatFlow AI, and Smart Form Encoder." },
  { cat: "milestone", catLabel: "Milestone / Oct 2025", title: "Winner — Base PH Hackathon", desc: "Won national-scale competition demonstrating innovation and execution under pressure." },
  { cat: "milestone", catLabel: "Milestone / Aug 2025", title: "Presented Auralis — GDG First AI Regional Conference", desc: "Holy Angel University. Presented automated phishing detection platform to regional AI community." },
  { cat: "milestone", catLabel: "Milestone / Jun 2025", title: "Built AckAI — AWS Innovation Cup 2025", desc: "Real-time AI legal assistance using Agora Conversational AI, Amazon Kendra, DynamoDB, S3 for the national hackathon." },
  { cat: "milestone", catLabel: "Milestone / Jan 2025", title: "AWS Student Cloud Club PH Committee", desc: "Committee member contributing to cloud community initiatives and educational programs at Gordon College." },
  { cat: "milestone", catLabel: "Milestone / 2025", title: "DataCamp Scholar", desc: "Selected as DataCamp Scholar — completed certifications in Data Engineering, ML, Data Science, Python, and Data Visualization." },
  { cat: "security", catLabel: "Security / 2025", title: "Top 4% Global — TryHackMe", issuer: "TryHackMe", desc: "Hands-on SIEM, threat detection, incident response, privilege escalation labs." },
  { cat: "security", catLabel: "Security / 2025", title: "Security Tools Practice", issuer: "Offensive & Defensive Security", desc: "Penetration testing with Burp Suite, Wireshark, Metasploit, Hashcat, Hydra, John the Ripper. Threat intel with MISP, OpenCTI, UrlScan.io, Abuse.ch, Cisco Talos." },
  { cat: "security", catLabel: "Security / 2025", title: "Cisco CCNA — Cyber Threat Management", issuer: "Cisco Networking Academy", desc: "Advanced switching, VLAN configuration, inter-VLAN routing, wireless networking fundamentals." },
  { cat: "security", catLabel: "Security / 2025", title: "Intro to Cybersecurity — Cisco CCNA", issuer: "Cisco Networking Academy", desc: "Enterprise networking, WAN technologies, QoS, network security and automation." },
  { cat: "security", catLabel: "Security / 2025", title: "Pre-Security + Cybersec 101", issuer: "TryHackMe", desc: "Networking basics, Linux fundamentals, web security, vulnerability assessment." },
  { cat: "cloud", catLabel: "Cloud / 2025", title: "AWS Cloud Essentials", issuer: "Amazon Web Services", desc: "Distributed systems on AWS — scalability, elasticity, security, cost-optimization." },
  { cat: "cloud", catLabel: "Cloud / 2025", title: "Cloud Computing Fundamentals", issuer: "DataCamp", desc: "Cloud computing models, deployment strategies, IaaS/PaaS/SaaS service management." },
  { cat: "data", catLabel: "Data / 2025", title: "Understanding Data Engineering", issuer: "DataCamp", desc: "Data pipelines, ETL/ELT, big data, Apache Spark, data infrastructure." },
  { cat: "data", catLabel: "Data / 2025", title: "Understanding Machine Learning", issuer: "DataCamp", desc: "Supervised / unsupervised learning, model evaluation, deployment." },
  { cat: "data", catLabel: "Data / 2025", title: "Data Visualization", issuer: "DataCamp", desc: "Expert-level dashboards with Tableau, Power BI, D3.js for business insights." },
  { cat: "data", catLabel: "Data / 2025", title: "Intro to Python Programming", issuer: "DataCamp", desc: "Syntax, data structures, OOP, algorithms — foundational Python." },
  { cat: "data", catLabel: "Data / 2025", title: "Understanding Data Science", issuer: "DataCamp", desc: "ML methodologies, statistical analysis, predictive modeling, R + Python." },
  { cat: "networking", catLabel: "Networking / 2025", title: "Cisco CCNA — Intro to Networks", issuer: "Cisco Networking Academy", desc: "Network protocols, LAN switching, basic router configurations, TCP/IP." },
];

export function CredentialsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? CREDS
      : CREDS.filter((c) => c.cat === activeFilter);

  return (
    <section id="credentials" className="creds" data-section="credentials">
      <div className="creds-head">
        <div>
          <div className="section-label reveal">03 / Credentials</div>
          <h2 className="creds-title reveal">
            Wins, certifications, &amp; <span className="serif">receipts</span>.
          </h2>
        </div>
      </div>

      <div className="cred-filters reveal">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={`cred-filter ${activeFilter === f.key ? "active" : ""}`}
            onClick={() => setActiveFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="cred-grid reveal-stagger">
        {filtered.map((cred, i) => (
          <div
            className="cred-card"
            data-cat={cred.cat}
            key={`${cred.cat}-${i}`}
          >
            <div className="cred-cat">{cred.catLabel}</div>
            <div className="cred-title-txt">{cred.title}</div>
            {"issuer" in cred && cred.issuer && (
              <div className="cred-issuer">{cred.issuer}</div>
            )}
            <div className="cred-desc">{cred.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
