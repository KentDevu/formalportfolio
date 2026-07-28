"use client";

import { useEffect, useRef, useCallback, useState } from "react";

type RawLine =
  | { kind: "prompt"; text: string }
  | { kind: "ok"; text: string }
  | { kind: "warn"; text: string }
  | { kind: "err"; text: string }
  | { kind: "dim"; text: string }
  | { kind: "out"; text: string }
  | { kind: "kv"; k: string; v: string }
  | { kind: "proj"; n: string; name: string; tag: string; desc: string };

type Line = RawLine & { id: string };

let lineCounter = 0;
function addId(raw: RawLine): Line {
  return { ...raw, id: `line-${++lineCounter}` } as Line;
}

const T = {
  role: "AI Engineer × Tech Lead × AI Agent Specialist",
  loc: "Makati, Philippines",
  email: "belenkentharold@gmail.com",
  availability: "Open to AI agent dev, security automation, or automation roles",
};

const SUGGESTIONS = ["whoami", "projects", "skills", "certs", "contact", "hire", "resume", "stats", "clear"];

function getCommandOutput(cmd: string): RawLine[] | "clear" {
  switch (cmd.toLowerCase()) {
    case "help":
      return [
        { kind: "out", text: "Available commands:" },
        { kind: "dim", text: "" },
        { kind: "kv", k: "whoami", v: "who is this guy?" },
        { kind: "kv", k: "projects", v: "selected work (Secuvia, Auralis, Avitus IMS, FitUp)" },
        { kind: "kv", k: "skills", v: "full stack + security stack" },
        { kind: "kv", k: "certs", v: "AWS, Cisco CCNA, DataCamp, TryHackMe" },
        { kind: "kv", k: "stats", v: "the numbers" },
        { kind: "kv", k: "hire", v: "why you should hire me" },
        { kind: "kv", k: "contact", v: "how to reach me" },
        { kind: "kv", k: "resume", v: "download my CV" },
        { kind: "kv", k: "sudo", v: "¯\\_(ツ)_/¯" },
        { kind: "kv", k: "clear", v: "clear screen" },
      ];
    case "whoami":
      return [
        { kind: "ok", text: "kent@portfolio" },
        { kind: "out", text: T.role },
        { kind: "dim", text: "─".repeat(48) },
        { kind: "out", text: "Senior Executive — AI Engineer at EXL Service Philippines." },
        { kind: "out", text: "Tech Lead & Co-Founder at Catalyx Solutions." },
        { kind: "out", text: "AWS Cloud Club PH committee." },
        { kind: "out", text: "Top 4% global on TryHackMe." },
        { kind: "out", text: "Base PH Hackathon winner." },
        { kind: "dim", text: "" },
        { kind: "dim", text: "I build AI pipelines that lift sales and automate business process." },
        { kind: "dim", text: "Type `projects` to see what I've built." },
      ];
    case "projects":
      return [
        { kind: "ok", text: "7 selected projects · more on GitHub" },
        { kind: "dim", text: "" },
        { kind: "proj", n: "01", name: "Secuvia", tag: "LIVE", desc: "Phishing detection SaaS · multi-source CTI + LLM verdicts" },
        { kind: "proj", n: "02", name: "ChatFlow AI", tag: "PRIVATE", desc: "Messenger chatbot SaaS · Gemini AI + n8n automation" },
        { kind: "proj", n: "03", name: "Smart Form", tag: "PRIVATE", desc: "OCR government form processing · PaddleOCR + LLM" },
        { kind: "proj", n: "04", name: "Avitus IMS", tag: "PRIVATE", desc: "Nationwide inventory mgmt · Django/Next.js" },
        { kind: "proj", n: "05", name: "FitUp", tag: "LIVE", desc: "AI fitness planner · RAG pipeline + Groq" },
        { kind: "proj", n: "06", name: "AckAI", tag: "PRIVATE", desc: "AI legal assistant · Agora AI + Amazon Kendra" },
        { kind: "proj", n: "07", name: "Auralis", tag: "PRIVATE", desc: "Phishing detection · -70% analyst workload" },
        { kind: "dim", text: "" },
        { kind: "dim", text: "→ scroll down for the full case studies" },
      ];
    case "skills":
      return [
        { kind: "ok", text: "the stack" },
        { kind: "dim", text: "" },
        { kind: "kv", k: "languages", v: "Python · JavaScript · TypeScript · Java · PHP · SQL" },
        { kind: "kv", k: "frontend", v: "Next.js · React · React Native · Angular · Svelte · TailwindCSS" },
        { kind: "kv", k: "backend", v: "Express.js · Django · Laravel · REST APIs · Firebase" },
        { kind: "kv", k: "cloud", v: "AWS (Lambda, DynamoDB, Kendra, S3, EC2) · Cloudflare · Vercel" },
        { kind: "kv", k: "ai agents", v: "Chatbot/Callbot/Emailbot · Prompt Engineering · Function Calling" },
        { kind: "kv", k: "ai/ml", v: "RAG Pipelines · LLM Integration · OpenAI · Gemini · Groq" },
        { kind: "kv", k: "security", v: "Metasploit · Burp Suite · Wireshark · MISP · OpenCTI · VirusTotal" },
        { kind: "kv", k: "automation", v: "n8n · Webhook Orchestration · Gmail API · Meta Graph API" },
      ];
    case "certs":
      return [
        { kind: "ok", text: "10 professional certifications" },
        { kind: "dim", text: "" },
        { kind: "kv", k: "aws", v: "Cloud Essentials" },
        { kind: "kv", k: "cisco", v: "CCNA ITN · Cyber Threat Mgmt · Intro to Cybersec" },
        { kind: "kv", k: "datacamp", v: "Cloud Computing · Data Eng · ML · Data Viz · Python" },
        { kind: "kv", k: "tryhackme", v: "Pre-Security · Cyber Security 101 · Top 4% global" },
      ];
    case "stats":
      return [
        { kind: "ok", text: "the numbers" },
        { kind: "dim", text: "" },
        { kind: "kv", k: "loc_shipped", v: "49,996+" },
        { kind: "kv", k: "projects", v: "15+" },
        { kind: "kv", k: "years_exp", v: "3+" },
        { kind: "kv", k: "tryhackme", v: "Top 4% global" },
        { kind: "kv", k: "hackathons", v: "Base PH Winner · AWS Innovation Cup · GDG Regional" },
        { kind: "kv", k: "uptime", v: "99.9%" },
        { kind: "kv", k: "phish_detect", v: "+70% efficiency (Catalyx)" },
        { kind: "kv", k: "deploy_time", v: "-20% (Kloudtech)" },
      ];
    case "hire":
      return [
        { kind: "ok", text: "why hire kent" },
        { kind: "dim", text: "" },
        { kind: "out", text: "01  Rare overlap: full-stack + security + AI." },
        { kind: "out", text: "02  Measurable impact — not just shipped, improved." },
        { kind: "out", text: "03  Tech Lead experience at 22 — builds teams, not just apps." },
        { kind: "out", text: "04  Has won national-scale competitions under pressure." },
        { kind: "out", text: "05  Writes. Teaches. Contributes. Stays sharp." },
        { kind: "dim", text: "" },
        { kind: "ok", text: "→ type `contact` or scroll to the bottom." },
      ];
    case "contact":
      return [
        { kind: "ok", text: "contact — " + T.availability },
        { kind: "dim", text: "" },
        { kind: "kv", k: "email", v: T.email },
        { kind: "kv", k: "location", v: T.loc },
        { kind: "kv", k: "phone", v: "+63 993-042-6695" },
        { kind: "kv", k: "github", v: "github.com/Kentdevu" },
        { kind: "kv", k: "linkedin", v: "linkedin.com/in/kentharoldbelen" },
        { kind: "dim", text: "" },
        { kind: "dim", text: "→ reply time < 24h. seriously." },
      ];
    case "resume": {
      const a = document.createElement("a");
      a.href = "/assets/resume.pdf";
      a.download = "Kent_Harold_Belen_Resume.pdf";
      a.click();
      return [
        { kind: "warn", text: "resume.pdf — downloading..." },
      ];
    }
    case "sudo":
      return [{ kind: "err", text: "kent is not in the sudoers file. This incident will be reported." }];
    case "clear":
      return "clear";
    case "ls":
      return [
        { kind: "out", text: "drwxr-xr-x  projects/" },
        { kind: "out", text: "drwxr-xr-x  certs/" },
        { kind: "out", text: "-rw-r--r--  about.txt" },
        { kind: "out", text: "-rw-r--r--  resume.pdf" },
        { kind: "out", text: "-rw-r--r--  contact.md" },
      ];
    case "cat about.txt":
      return [
        { kind: "out", text: "AI Engineer at EXL Service PH. Tech Lead at Catalyx Solutions." },
        { kind: "out", text: "I build AI pipelines that boost sales and business throughput," },
        { kind: "out", text: "architect security automation, and ship scalable full-stack apps" },
        { kind: "out", text: "that bridge engineering and cybersecurity." },
      ];
    default:
      return [{ kind: "err", text: `command not found: ${cmd} — try \`help\`` }];
  }
}

function TermLine({ line }: { line: Line }) {
  switch (line.kind) {
    case "prompt":
      return (
        <div className="term-line">
          <span className="term-user">kent@portfolio</span>
          <span className="term-dim">:</span>
          <span className="term-path">~</span>
          <span className="term-dim">$ </span>
          <span className="term-cmd">{line.text}</span>
        </div>
      );
    case "ok":
      return (
        <div className="term-line">
          <span className="term-ok">▸</span>{" "}
          <span className="term-cmd">{line.text}</span>
        </div>
      );
    case "warn":
      return (
        <div className="term-line">
          <span className="term-warn">!</span>{" "}
          <span className="term-cmd">{line.text}</span>
        </div>
      );
    case "err":
      return (
        <div className="term-line">
          <span className="term-err">✗ {line.text}</span>
        </div>
      );
    case "dim":
      return (
        <div className="term-line">
          <span className="term-dim">{line.text}</span>
        </div>
      );
    case "kv":
      return (
        <div className="term-line">
          <span className="term-key">{line.k.padEnd(14)}</span>
          <span className="term-out">{line.v}</span>
        </div>
      );
    case "proj": {
      const tagColor = line.tag === "LIVE" ? "term-ok" : "term-dim";
      return (
        <div className="term-line">
          <span className="term-dim">{line.n}</span>{"  "}
          <span className="term-cmd" style={{ fontWeight: 600 }}>
            {line.name.padEnd(12)}
          </span>{" "}
          <span className={tagColor}>[{line.tag}]</span>{"  "}
          <span className="term-out">{line.desc}</span>
        </div>
      );
    }
    default:
      return (
        <div className="term-line">
          <span className="term-out">{(line as { text: string }).text}</span>
        </div>
      );
  }
}

export function Terminal() {
  const [lines, setLines] = useState<Line[]>([]);
  const [typingText, setTypingText] = useState<string | null>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const historyRef = useRef<string[]>([]);
  const historyIdxRef = useRef(-1);
  const bootedRef = useRef(false);

  const scrollToBottom = useCallback(() => {
    setTimeout(() => {
      if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }, 10);
  }, []);

  const addLines = useCallback(
    (rawLines: RawLine[], delay = 28) => {
      let i = 0;
      function next() {
        if (i >= rawLines.length) return;
        const line = addId(rawLines[i++]);
        setLines((prev) => [...prev, line]);
        setTimeout(next, delay);
      }
      next();
      scrollToBottom();
    },
    [scrollToBottom]
  );

  const runCommand = useCallback(
    (cmd: string, echo = false) => {
      const c = cmd.trim();
      if (!c) return;

      if (echo) {
        setLines((prev) => [...prev, addId({ kind: "prompt", text: c })]);
      }

      const result = getCommandOutput(c);
      if (result === "clear") {
        setLines([]);
      } else {
        addLines(result);
      }
      scrollToBottom();
    },
    [addLines, scrollToBottom]
  );

  useEffect(() => {
    if (bootedRef.current) return;
    bootedRef.current = true;

    const bootLines: RawLine[] = [
      { kind: "dim", text: "[ ok ] booting kernel v1.0 — Kent Harold Belen" },
      { kind: "dim", text: "[ ok ] loading identity..." },
      { kind: "dim", text: "[ ok ] fetching projects from ~/work" },
      { kind: "dim", text: "[ ok ] mounting ~/certs (10 entries)" },
      { kind: "dim", text: "[ ok ] initializing AI assistant" },
      { kind: "ok", text: "ready. type `help` to begin." },
      { kind: "dim", text: "" },
      { kind: "dim", text: "available commands:" },
      { kind: "dim", text: "  whoami · projects · skills · certs · stats" },
      { kind: "dim", text: "  contact · hire · resume · sudo · clear" },
      { kind: "dim", text: "" },
    ];

    addLines(bootLines);

    const bootTime = bootLines.length * 28 + 400;
    const typeCmd = "whoami";
    let cancelled = false;

    setTimeout(() => {
      if (cancelled) return;
      setTypingText("");
      let i = 0;
      function tick() {
        if (cancelled) return;
        if (i <= typeCmd.length) {
          setTypingText(typeCmd.slice(0, i++));
          setTimeout(tick, 50 + Math.random() * 40);
        } else {
          setTypingText(null);
          setTimeout(() => {
            if (!cancelled) runCommand("whoami", true);
          }, 180);
        }
      }
      tick();
    }, bootTime);

    return () => {
      cancelled = true;
    };
  }, [addLines, runCommand]);

  useEffect(() => {
    scrollToBottom();
  }, [lines, scrollToBottom]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    const input = inputRef.current;
    if (!input) return;

    if (e.key === "Enter") {
      const v = input.value;
      if (v.trim()) {
        historyRef.current.push(v);
        historyIdxRef.current = historyRef.current.length;
      }
      input.value = "";
      runCommand(v, true);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIdxRef.current > 0) {
        historyIdxRef.current--;
        input.value = historyRef.current[historyIdxRef.current] || "";
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdxRef.current < historyRef.current.length - 1) {
        historyIdxRef.current++;
        input.value = historyRef.current[historyIdxRef.current] || "";
      } else {
        historyIdxRef.current = historyRef.current.length;
        input.value = "";
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const v = input.value.toLowerCase();
      const match = SUGGESTIONS.find((s) => s.startsWith(v));
      if (match) input.value = match;
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    }
  }

  return (
    <div className="terminal">
      <div className="terminal-bar">
        <div className="term-dots">
          <div className="term-dot r" />
          <div className="term-dot y" />
          <div className="term-dot g" />
        </div>
        <div className="terminal-title">~/kent — zsh — interactive</div>
        <div className="terminal-chip">v1.0</div>
      </div>
      <div
        className="terminal-body"
        ref={bodyRef}
        onClick={() => inputRef.current?.focus()}
      >
        {lines.map((line) => (
          <TermLine key={line.id} line={line} />
        ))}
        {typingText !== null && (
          <div className="term-line">
            <span className="term-user">kent@portfolio</span>
            <span className="term-dim">:</span>
            <span className="term-path">~</span>
            <span className="term-dim">$ </span>
            <span className="term-cmd">{typingText}</span>
            <span
              className="cursor-block"
              style={{
                display: "inline-block",
                width: ".5em",
                height: "1em",
                background: "var(--accent)",
                verticalAlign: "-.15em",
                marginLeft: "1px",
                animation: "blink 1s steps(2) infinite",
              }}
            />
          </div>
        )}
      </div>
      <form onSubmit={(e) => e.preventDefault()} style={{ margin: 0 }}>
        <div
          className="term-input-line"
          style={{
            padding: "10px 20px",
            background: "var(--ink-2)",
            borderTop: "1px solid var(--line)",
          }}
        >
          <span className="term-user">kent@portfolio</span>
          <span className="term-dim">:</span>
          <span className="term-path">~</span>
          <span className="term-dim">$</span>
          <input
            type="text"
            className="term-input"
            ref={inputRef}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            placeholder='type `help` and press enter'
            onKeyDown={handleKeyDown}
          />
        </div>
      </form>
      <div className="term-suggestions">
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            className="term-sugg"
            onClick={() => {
              if (inputRef.current) inputRef.current.value = "";
              runCommand(s, true);
              inputRef.current?.focus();
            }}
          >
            {s}
          </button>
        ))}
      </div>
      <div className="term-hint">
        <span>↑↓ history · tab autocomplete · ctrl+l clear</span>
        <span>interactive</span>
      </div>
    </div>
  );
}
