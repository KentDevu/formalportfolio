"use client";

import { useEffect } from "react";

export function Interactions() {
  useEffect(() => {
    if (window.matchMedia("(max-width: 860px)").matches) return;

    const cursor = document.createElement("div");
    cursor.className = "cursor";
    document.body.appendChild(cursor);

    let mx = window.innerWidth / 2,
      my = window.innerHeight / 2;
    let cx = mx,
      cy = my;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    let raf: number;
    function loop() {
      cx += (mx - cx) * 0.22;
      cy += (my - cy) * 0.22;
      cursor.style.transform = `translate(${cx}px, ${cy}px)`;
      raf = requestAnimationFrame(loop);
    }
    loop();

    function attachHoverStates() {
      document
        .querySelectorAll(
          'a:not(.work-item), button, .cred-filter, .term-sugg, .ch-row, [data-cursor="hover"]'
        )
        .forEach((el) => {
          const e = el as HTMLElement & { __cursorAttached?: boolean };
          if (e.__cursorAttached) return;
          e.__cursorAttached = true;
          e.addEventListener("mouseenter", () => cursor.classList.add("hover"));
          e.addEventListener("mouseleave", () =>
            cursor.classList.remove("hover")
          );
        });
      document
        .querySelectorAll('input, textarea, [data-cursor="text"]')
        .forEach((el) => {
          const e = el as HTMLElement & { __cursorTextAttached?: boolean };
          if (e.__cursorTextAttached) return;
          e.__cursorTextAttached = true;
          e.addEventListener("mouseenter", () => cursor.classList.add("text"));
          e.addEventListener("mouseleave", () =>
            cursor.classList.remove("text")
          );
        });
    }

    attachHoverStates();
    const mo = new MutationObserver(attachHoverStates);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      mo.disconnect();
      cursor.remove();
    };
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    const els = document.querySelectorAll(".reveal, .reveal-stagger");
    els.forEach((el) => io.observe(el));

    function forceRevealInView() {
      const vh = window.innerHeight;
      document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 1.1 && r.bottom > -100) {
          el.classList.add("in");
        }
      });
    }

    forceRevealInView();
    setTimeout(forceRevealInView, 120);
    setTimeout(forceRevealInView, 500);
    window.addEventListener("load", forceRevealInView);
    const onScroll = () => requestAnimationFrame(forceRevealInView);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("load", forceRevealInView);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-count]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement & { __counted?: boolean };
          if (el.__counted) return;
          el.__counted = true;
          const target = parseFloat(el.dataset.count || "0");
          const decimals = parseInt(el.dataset.decimals || "0");
          const suffix = el.dataset.suffix || "";
          const prefix = el.dataset.prefix || "";
          const dur = 1400;
          const start = performance.now();
          function step(now: number) {
            const t = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            const val = target * eased;
            el.textContent =
              prefix +
              val
                .toFixed(decimals)
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
              suffix;
            if (t < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
          io.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      const handler = (e: Event) => {
        const href = a.getAttribute("href");
        if (href && href.length > 1) {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
          }
        }
      };
      a.addEventListener("click", handler);
    });
  }, []);

  return null;
}
