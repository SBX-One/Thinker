import { useEffect } from "react";
import gsap from "gsap";

/**
 * useButtonMicrointeractions
 *
 * Attaches GSAP hover / press / release animations to every <button> and
 * element with [data-interactive] within the page. All animations use only
 * `transform` and `opacity` so they are GPU-accelerated and never trigger
 * layout/paint.
 *
 * Respects prefers-reduced-motion: when the user has requested reduced motion
 * the hook is a no-op — the CSS rule in global.css handles the rest.
 *
 * @param enabled – pass `false` (e.g. during loading) to skip setup
 */
export function useButtonMicrointeractions(enabled: boolean = true) {
  useEffect(() => {
    if (!enabled) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // ── Selectors ──────────────────────────────────────────────────────────
    const SELECTOR = "button, [data-interactive]";

    // We keep track of live elements so the cleanup is precise
    const elements = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
    if (elements.length === 0) return;

    // ── Per-element handlers ───────────────────────────────────────────────
    const cleanups: (() => void)[] = [];

    elements.forEach((el) => {
      // Mark for CSS targeting
      el.classList.add("btn-interactive");

      // ── Hover in ──
      const onEnter = () => {
        el.style.willChange = "transform";
        gsap.to(el, {
          y: -2,
          scale: 1.03,
          duration: 0.25,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      // ── Hover out ──
      const onLeave = () => {
        gsap.to(el, {
          y: 0,
          scale: 1,
          duration: 0.35,
          ease: "back.out(2)",
          overwrite: "auto",
          onComplete: () => {
            el.style.willChange = "auto";
          },
        });
      };

      // ── Press (mousedown / touchstart) ──
      const onPress = () => {
        gsap.to(el, {
          scale: 0.96,
          y: 0,
          duration: 0.12,
          ease: "power3.in",
          overwrite: "auto",
        });
      };

      // ── Release (mouseup / touchend) ──
      const onRelease = () => {
        gsap.to(el, {
          scale: 1,
          y: -2,
          duration: 0.25,
          ease: "back.out(2.5)",
          overwrite: "auto",
        });
        // Then drift back to rest
        gsap.to(el, {
          y: 0,
          duration: 0.3,
          ease: "power2.out",
          delay: 0.22,
          overwrite: false,
        });
      };

      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
      el.addEventListener("mousedown", onPress);
      el.addEventListener("mouseup", onRelease);
      el.addEventListener("touchstart", onPress, { passive: true });
      el.addEventListener("touchend", onRelease);

      cleanups.push(() => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.removeEventListener("mousedown", onPress);
        el.removeEventListener("mouseup", onRelease);
        el.removeEventListener("touchstart", onPress);
        el.removeEventListener("touchend", onRelease);
        gsap.killTweensOf(el);
        el.style.willChange = "auto";
        el.classList.remove("btn-interactive");
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, [enabled]);
}
