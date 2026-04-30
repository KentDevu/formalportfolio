"use client";

import { useEffect, useRef } from "react";

const STAGES = [
  {
    label: "Education",
    desc: "Gordon College — BS Computer Science. DataCamp Scholar. AWS Cloud Club.",
    period: "2022 — 2026",
  },
  {
    label: "Kloudtech",
    desc: "Backend & frontend dev. Sprint planning, code reviews, system integration.",
    period: "Mar — Aug 2025",
  },
  {
    label: "Catalyx Solutions",
    desc: "Co-founded startup. Secuvia, ChatFlow AI, Smart Form Encoder.",
    period: "Oct 2025 — Now",
  },
  {
    label: "Hackathons",
    desc: "Base PH Winner. AWS Innovation Cup. GDG AI Conference.",
    period: "2024 — 2025",
  },
  {
    label: "Lujo PH",
    desc: "Backend & REST APIs. Avitus IMS — nationwide inventory.",
    period: "Nov 2025 — Feb 2026",
  },
  {
    label: "PMTI",
    desc: "Laravel backend. ePasada for driver operations.",
    period: "Feb — May 2026",
  },
  {
    label: "Tenext.AI",
    desc: "AI agents — chatbots, callbots, emailbots. CRM & lead automation.",
    period: "Apr 2026 — Now",
  },
];

const TOTAL = STAGES.length;

export function TrajectorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!section || !canvas || !container) return;

    const ctx = canvas.getContext("2d")!;
    let dpr = 1;
    let cw = 0;
    let ch = 0;

    function measure() {
      dpr = window.devicePixelRatio || 1;
      cw = container!.clientWidth;
      ch = container!.clientHeight;
      canvas!.width = cw * dpr;
      canvas!.height = ch * dpr;
      canvas!.style.width = cw + "px";
      canvas!.style.height = ch + "px";
    }

    function update() {
      const rect = section!.getBoundingClientRect();
      const vh = window.innerHeight;
      const totalScroll = rect.height - vh;
      const progress = Math.max(0, Math.min(1, -rect.top / totalScroll));
      const time = Date.now() * 0.001;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, cw, ch);

      const centerX = cw * 0.5;
      const topY = ch * 0.06;
      const bottomY = ch * 0.94;
      const fallHeight = bottomY - topY;

      // Place stages across 85% of fall so the last one appears before scroll ends
      const stageTop = topY;
      const stageBottom = topY + fallHeight * 0.85;
      const stageYs = STAGES.map((_, i) => stageTop + ((stageBottom - stageTop) * i) / (TOTAL - 1));
      const isMobile = cw < 640;
      // Alternate left/right from center like a waterfall cascade
      const stageXs = STAGES.map((_, i) => {
        const amp = isMobile ? 0.12 : 0.18;
        const offset = (i % 2 === 0 ? -1 : 1) * cw * amp;
        return centerX + offset;
      });

      // How far the "water" has fallen
      const fallProgress = progress;
      const fallY = topY + fallHeight * fallProgress;

      // ---- Flowing stream (the waterfall path) ----
      if (progress > 0.001) {
        // Build the path through stage positions, starting from the first stage
        const points: { x: number; y: number }[] = [];
        for (let i = 0; i < TOTAL; i++) {
          points.push({ x: stageXs[i], y: stageYs[i] });
        }

        // Draw the lit portion of the path
        ctx.save();
        ctx.shadowColor = "rgba(198, 255, 61, 0.35)";
        ctx.shadowBlur = 16;

        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let i = 1; i < points.length; i++) {
          const prev = points[i - 1];
          const cur = points[i];
          if (prev.y > fallY) break;

          const endY = Math.min(cur.y, fallY);
          const t = cur.y <= fallY ? 1 : (fallY - prev.y) / (cur.y - prev.y);
          const endX = prev.x + (cur.x - prev.x) * t;

          const cp1x = prev.x;
          const cp1y = prev.y + (cur.y - prev.y) * 0.5;
          const cp2x = cur.x;
          const cp2y = prev.y + (cur.y - prev.y) * 0.5;

          const ecp1x = prev.x + (cp1x - prev.x);
          const ecp1y = prev.y + (cp1y - prev.y);
          const ecp2x = prev.x + (cp2x - prev.x) * t;
          const ecp2y = prev.y + (cp2y - prev.y) * t;

          ctx.bezierCurveTo(ecp1x, ecp1y, ecp2x, ecp2y, endX, endY);

          if (endY >= fallY) break;
        }

        // Glow
        ctx.strokeStyle = "rgba(198, 255, 61, 0.15)";
        ctx.lineWidth = 4;
        ctx.stroke();
        ctx.restore();

        // Core line
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let i = 1; i < points.length; i++) {
          const prev = points[i - 1];
          const cur = points[i];
          if (prev.y > fallY) break;

          const endY = Math.min(cur.y, fallY);
          const t = cur.y <= fallY ? 1 : (fallY - prev.y) / (cur.y - prev.y);
          const endX = prev.x + (cur.x - prev.x) * t;

          const cp1y = prev.y + (cur.y - prev.y) * 0.5;
          const cp2y = cp1y;

          ctx.bezierCurveTo(prev.x, cp1y, cur.x * t + prev.x * (1 - t), cp2y, endX, endY);

          if (endY >= fallY) break;
        }

        ctx.strokeStyle = "rgba(198, 255, 61, 0.5)";
        ctx.lineWidth = 1.5;
        ctx.stroke();

      }


      // ---- Stage cards ----
      function wrapText(text: string, maxW: number): string[] {
        const words = text.split(" ");
        const lines: string[] = [];
        let line = "";
        for (const word of words) {
          const test = line ? line + " " + word : word;
          if (ctx.measureText(test).width > maxW && line) {
            lines.push(line);
            line = word;
          } else {
            line = test;
          }
        }
        if (line) lines.push(line);
        return lines;
      }

      for (let i = 0; i < TOTAL; i++) {
        const sx = stageXs[i];
        const sy = stageYs[i];
        const reached = fallY >= sy;
        const arriveT = reached ? Math.min(1, (fallY - sy) / (fallHeight / TOTAL) * 2) : 0;

        if (arriveT <= 0) continue;

        const alpha = arriveT;
        const isLeft = i % 2 === 0;

        // Dot at the stop point
        const dotGrad = ctx.createRadialGradient(sx, sy, 0, sx, sy, 14);
        dotGrad.addColorStop(0, `rgba(198, 255, 61, ${alpha * 0.5})`);
        dotGrad.addColorStop(1, "rgba(198, 255, 61, 0)");
        ctx.fillStyle = dotGrad;
        ctx.beginPath();
        ctx.arc(sx, sy, 14, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(198, 255, 61, ${alpha * 0.8})`;
        ctx.beginPath();
        ctx.arc(sx, sy, 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Text positioned to the outside
        const textGap = isMobile ? 16 : 24;
        const textX = isLeft ? sx - textGap : sx + textGap;
        const textAlign: CanvasTextAlign = isLeft ? "right" : "left";
        const railPad = isMobile ? 4 : 8;
        const sidebarPad = isMobile ? 8 : 60;
        const maxTextW = isLeft ? sx - textGap - railPad : cw - sx - textGap - sidebarPad;

        const periodSize = isMobile ? 8 : 9;
        const labelSize = isMobile ? 13 : 16;
        const descSize = isMobile ? 9 : 10;
        const descLeading = isMobile ? 12 : 14;

        // Period
        ctx.font = `400 ${periodSize}px 'JetBrains Mono', monospace`;
        ctx.textAlign = textAlign;
        ctx.textBaseline = "bottom";
        ctx.fillStyle = `rgba(198, 255, 61, ${alpha * 0.55})`;
        ctx.fillText(STAGES[i].period, textX, sy - 6);

        // Label
        ctx.font = `600 ${labelSize}px 'Space Grotesk', sans-serif`;
        ctx.fillStyle = `rgba(242, 239, 232, ${alpha * 0.95})`;
        ctx.fillText(STAGES[i].label, textX, sy + 6);

        // Description — word-wrapped
        ctx.font = `400 ${descSize}px 'JetBrains Mono', monospace`;
        ctx.fillStyle = `rgba(242, 239, 232, ${alpha * 0.4})`;
        const descLines = wrapText(STAGES[i].desc, maxTextW);
        for (let l = 0; l < descLines.length; l++) {
          ctx.fillText(descLines[l], textX, sy + 20 + l * descLeading);
        }
      }

    }

    measure();
    update();

    const onScroll = () => requestAnimationFrame(update);
    const onResize = () => { measure(); update(); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className="traj" ref={sectionRef} data-section="trajectory">
      <div className="traj-inner">
        <div className="traj-header">
          <div className="section-label">Trajectory / The Journey</div>
          <p className="traj-hint">
            <span className="traj-hint-arrow">↓</span> scroll to trace
          </p>
        </div>
        <div className="traj-stage" ref={containerRef}>
          <canvas ref={canvasRef} className="traj-canvas" />
        </div>
      </div>
    </section>
  );
}
