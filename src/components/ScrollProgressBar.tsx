import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollProgressBar
 *
 * A thin 2px bar fixed at the very top of the viewport whose width tracks
 * the user's scroll progress from 0 % (page top) to 100 % (page bottom).
 * Driven by GSAP ScrollTrigger scrub so it is perfectly in sync with scroll
 * and never jank. Uses transform: scaleX() on a full-width element so the
 * browser only composites — no layout or paint.
 *
 * Respects prefers-reduced-motion: hidden when the user has opted out.
 */
export default function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Start at 0 scale on the X axis
    gsap.set(el, { scaleX: 0, transformOrigin: "left center" });

    const st = ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.3,
      onUpdate: (self) => {
        gsap.set(el, { scaleX: self.progress });
      },
    });

    return () => st.kill();
  }, []);

  return (
    <div
      ref={barRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "2px",
        backgroundColor: "#93D100",
        zIndex: 9999,
        transformOrigin: "left center",
        pointerEvents: "none",
        willChange: "transform",
      }}
    />
  );
}
