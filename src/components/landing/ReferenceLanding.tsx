"use client";

import { useEffect, useRef } from "react";
import { MotionConfig, motion } from "motion/react";
import { gsap } from "gsap";

/** Preserves the supplied HTML exactly while owning its carousel lifecycle in React. */
export function ReferenceLanding({ markup }: { markup: string }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const slides = Array.from(element.querySelectorAll<HTMLElement>(".hero-slide"));
    const dots = Array.from(element.querySelectorAll<HTMLButtonElement>(".hero-dot"));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let current = Math.max(0, slides.findIndex((slide) => slide.classList.contains("opacity-100")));
    let timer: ReturnType<typeof setInterval> | undefined;
    const show = (index: number) => {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, position) => {
        const selected = position === current;
        slide.classList.toggle("opacity-100", selected);
        slide.classList.toggle("z-10", selected);
        slide.classList.toggle("opacity-0", !selected);
        slide.classList.toggle("z-0", !selected);
        slide.style.pointerEvents = selected ? "auto" : "none";
        slide.inert = !selected;
        slide.setAttribute("aria-hidden", String(!selected));
      });
      dots.forEach((dot, position) => {
        const selected = position === current;
        dot.classList.toggle("w-9", selected);
        dot.classList.toggle("bg-coral-vibrant", selected);
        dot.classList.toggle("w-2.5", !selected);
        dot.classList.toggle("bg-white/50", !selected);
        dot.setAttribute("aria-label", "نمایش اسلاید " + (position + 1));
        dot.setAttribute("aria-pressed", String(selected));
      });
    };
    const pause = () => { if (timer) clearInterval(timer); };
    const start = () => { pause(); if (!reduced) timer = setInterval(() => show(current + 1), 5000); };
    const click = (event: MouseEvent) => {
      const target = (event.target as Element).closest<HTMLElement>("button");
      if (!target) return;
      if (target.id === "prevSlideBtn") { show(current - 1); start(); }
      if (target.id === "nextSlideBtn") { show(current + 1); start(); }
      if (target.matches(".hero-dot")) { show(Number(target.dataset.slide)); start(); }
      const track = element.querySelector<HTMLElement>("#productTrack");
      if (track && ["prodPrevBtn", "prodNextBtn"].includes(target.id)) {
        gsap.to(track, { scrollLeft: track.scrollLeft + (target.id === "prodNextBtn" ? -320 : 320), duration: reduced ? 0 : 0.5, ease: "power2.out", overwrite: true });
      }
    };
    show(current);
    start();
    element.addEventListener("click", click);
    element.addEventListener("mouseenter", pause);
    element.addEventListener("mouseleave", start);
    return () => {
      pause();
      element.removeEventListener("click", click);
      element.removeEventListener("mouseenter", pause);
      element.removeEventListener("mouseleave", start);
      const track = element.querySelector("#productTrack");
      if (track) gsap.killTweensOf(track);
    };
  }, []);

  return <MotionConfig reducedMotion="user"><motion.div ref={root} className="sketch-reference bg-surface-ivory text-ink-primary antialiased selection:bg-coral-vibrant selection:text-white" initial={false} animate={{ opacity: 1 }} dangerouslySetInnerHTML={{ __html: markup }} /></MotionConfig>;
}
