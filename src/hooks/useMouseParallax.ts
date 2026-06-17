import { useEffect } from "react";
import gsap from "gsap";

/**
 * useMouseParallax
 *
 * Applies a multi-layer depth parallax effect to the Hero section on desktop.
 * Each layer carries a `data-depth` attribute (0 – 1) that controls how far
 * it shifts relative to the mouse cursor position. Higher values = more movement.
 *
 * Implementation details:
 * - Only activates on pointer-fine (mouse) devices, not touch.
 * - Throttled via requestAnimationFrame — no per-pixel DOM writes during mousemove.
 * - Uses gsap.to() with a duration so movement is inertially smoothed (no jank).
 * - Fully reverted (transforms reset) on cleanup.
 * - Skipped entirely when prefers-reduced-motion is active.
 *
 * Usage in JSX:
 *   <div data-parallax-container>           ← bounding reference
 *     <img data-depth="0.1" … />            ← slow background layer
 *     <img data-depth="0.25" … />           ← medium layer
 *     <div data-depth="0.45" … />           ← fast foreground layer
 *   </div>
 *
 * @param enabled – pass false during loading to defer setup
 */
export function useMouseParallax(enabled: boolean = true) {
  useEffect(() => {
    if (!enabled) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return; // skip touch devices

    const container = document.querySelector<HTMLElement>("[data-parallax-container]");
    if (!container) return;

    const layers = Array.from(
      container.querySelectorAll<HTMLElement>("[data-depth]")
    );
    if (layers.length === 0) return;

    // ── RAF state ──────────────────────────────────────────────────────────
    let rafId = 0;
    let mouseX = 0;
    let mouseY = 0;
    let dirty = false; // only schedule RAF when mouse actually moved

    // Maximum pixel shift at depth=1
    const MAX_SHIFT = 28;

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      // Normalise to [-1, 1] relative to the container centre
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      if (!dirty) {
        dirty = true;
        rafId = requestAnimationFrame(applyParallax);
      }
    };

    const applyParallax = () => {
      dirty = false;
      layers.forEach((layer) => {
        const depth = parseFloat(layer.dataset.depth ?? "0");
        const tx = mouseX * MAX_SHIFT * depth;
        const ty = mouseY * MAX_SHIFT * depth;
        gsap.to(layer, {
          x: tx,
          y: ty,
          duration: 0.65,
          ease: "power2.out",
          overwrite: "auto",
        });
      });
    };

    // Reset all layers to origin when mouse leaves
    const onLeave = () => {
      cancelAnimationFrame(rafId);
      dirty = false;
      layers.forEach((layer) => {
        gsap.to(layer, {
          x: 0,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          overwrite: "auto",
        });
      });
    };

    container.addEventListener("mousemove", onMove);
    container.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(rafId);
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseleave", onLeave);
      // Reset transforms on unmount
      layers.forEach((layer) => gsap.set(layer, { x: 0, y: 0 }));
    };
  }, [enabled]);
}
