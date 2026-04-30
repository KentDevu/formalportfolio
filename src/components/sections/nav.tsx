"use client";

import { useEffect, useState } from "react";

export function Nav() {
  const [time, setTime] = useState("MNL --:--:--");

  useEffect(() => {
    function tick() {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const manila = new Date(utc + 8 * 3600000);
      const h = String(manila.getHours()).padStart(2, "0");
      const m = String(manila.getMinutes()).padStart(2, "0");
      const s = String(manila.getSeconds()).padStart(2, "0");
      setTime(`MNL ${h}:${m}:${s}`);
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <nav className="nav">
      <div className="nav-brand">
        <div className="nav-brand-dot" />
        <span className="nav-brand-label">Kent Belen / Portfolio</span>
      </div>
      <div className="nav-links">
        <a href="#hero">
          <span className="num">01</span>Home
        </a>
        <a href="#work">
          <span className="num">02</span>Work
        </a>
        <a href="#credentials">
          <span className="num">03</span>Credentials
        </a>
        <a href="#about">
          <span className="num">04</span>About
        </a>
        <a href="#contact">
          <span className="num">06</span>Contact
        </a>
      </div>
      <div className="nav-status">{time}</div>
    </nav>
  );
}
