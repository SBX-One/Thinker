import { useEffect } from "react";
import gsap from "gsap";

/**
 * useTiltCards
 *
 * Applies a 3D tilt effect to cards with [data-tilt] attribute on desktop.
 * As the user moves their mouse over a card, it rotates slightly on the X and Y
 * axes pointing towards/away from the cursor, creating a tactile 3D effect.
 *
 * Details:
 * - Runs only on pointer: fine (desktop mouse) devices.
 * - Respects prefers-reduced-motion (no-op if active).
 * - Restores layout coordinates and clears styles on cleanup.
 *
 * @param enabled - pass false during loading to defer setup
 */
export function useTiltCards(enabled: boolean = true) {
  useEffect(() => {
    if (!enabled) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));
    if (cards.length === 0) return;

    const cleanups: (() => void)[] = [];

    cards.forEach((card) => {
      // Apply perspective locally to this element for the 3D effect
      gsap.set(card, { transformPerspective: 1000 });

      const onMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        // Mouse coordinate relative to card center, normalized to [-0.5, 0.5]
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;

        // Max rotation angle in degrees
        const MAX_TILT = 8;
        const tiltX = -relY * MAX_TILT;
        const tiltY = relX * MAX_TILT;

        card.style.willChange = "transform";

        gsap.to(card, {
          rotateX: tiltX,
          rotateY: tiltY,
          z: 10, // Subtle depth pop
          scale: 1.02, // Subtle scale lift
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      const onMouseLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          z: 0,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.5)",
          overwrite: "auto",
          onComplete: () => {
            card.style.willChange = "auto";
          },
        });
      };

      card.addEventListener("mousemove", onMouseMove);
      card.addEventListener("mouseleave", onMouseLeave);

      cleanups.push(() => {
        card.removeEventListener("mousemove", onMouseMove);
        card.removeEventListener("mouseleave", onMouseLeave);
        gsap.killTweensOf(card);
        gsap.set(card, { rotateX: 0, rotateY: 0, z: 0, scale: 1 });
        card.style.willChange = "auto";
      });
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, [enabled]);
}
