"use client";

import { useEffect, useState } from "react";

const RAIL_ITEMS = [
  { target: "hero", label: "Index" },
  { target: "work", label: "Work" },
  { target: "credentials", label: "Creds" },
  { target: "about", label: "About" },
  { target: "contact", label: "Contact" },
];

export function SideRail() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section[data-section]");
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = (e.target as HTMLElement).dataset.section;
            if (id) setActive(id);
          }
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <div className="rail">
      {RAIL_ITEMS.map((item) => (
        <div
          key={item.target}
          className={`rail-item ${active === item.target ? "active" : ""}`}
          onClick={() => {
            const target = document.querySelector(
              `section[data-section="${item.target}"]`
            );
            if (target) target.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div className="dot" />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
