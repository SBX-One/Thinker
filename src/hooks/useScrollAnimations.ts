import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Tailwind lg = 1024px
const LG = "(min-width: 1024px)";
const MOBILE = "(max-width: 1023px)";

// Respect the OS/browser prefers-reduced-motion setting.
// When true, we skip complex animations entirely and use simple instant fades.
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function useScrollAnimations(enabled: boolean = true) {
  useEffect(() => {
    if (!enabled) return;

    // For reduced-motion users: just ensure everything is visible (no animation jank)
    if (prefersReducedMotion) {
      document.querySelectorAll<HTMLElement>("[data-anim]").forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
        el.style.clipPath = "none";
      });
      return;
    }

    const mm = gsap.matchMedia();

    /* ═══════════════════════════════════════════════════════════
       SHARED animations (run on every breakpoint)
    ═══════════════════════════════════════════════════════════ */
    mm.add("all", () => {
      const ctx = gsap.context(() => {

        /* ── STANDARDIZED SECTION TITLES (shared across all sections and layouts) ── */
        const animSections = ["whoweare", "selectedworks", "expertise", "cases", "journal"];
        animSections.forEach((secId) => {
          const sectionEl = document.querySelector(`[data-section='${secId}']`);
          if (sectionEl) {
            // Select layout containers so we target the visible titles on both mobile and desktop
            const layouts = sectionEl.querySelectorAll(".lg\\:hidden, .hidden.lg\\:grid");
            layouts.forEach((layout) => {
              const num = layout.querySelector("[data-anim='sec-title-num']");
              const text = layout.querySelector("[data-anim='sec-title-text']");
              const desc = layout.querySelectorAll("[data-anim='sec-title-desc']");

              // Section number slides in from left
              if (num) {
                gsap.fromTo(num,
                  { opacity: 0, x: -40 },
                  {
                    opacity: 1,
                    x: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                      trigger: layout,
                      start: "top 88%",
                      toggleActions: "play none none reverse"
                    }
                  }
                );
              }

              // Section title and descriptions slide up from bottom with stagger
              const textTargets: Element[] = [];
              if (text) textTargets.push(text);
              desc.forEach((d) => textTargets.push(d));

              if (textTargets.length > 0) {
                gsap.fromTo(textTargets,
                  { opacity: 0, y: 50 },
                  {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.12,
                    ease: "power3.out",
                    scrollTrigger: {
                      trigger: layout,
                      start: "top 85%",
                      toggleActions: "play none none reverse"
                    }
                  }
                );
              }
            });
          }
        });

        /* ── WHO WE ARE (mobile + desktop: tagline-style fade-in) ── */
        const whoWeAre = document.querySelector("[data-section='whoweare']");
        if (whoWeAre) {
          // Mobile only text blocks
          const mobileText = whoWeAre.querySelector(".lg\\:hidden");
          if (mobileText) {
            gsap.fromTo(mobileText,
              { opacity: 0, y: 40 },
              { opacity: 1, y: 0, duration: 0.85, ease: "power3.out",
                scrollTrigger: { trigger: mobileText, start: "top 85%" } });
          }
        }

        /* ── SELECTED WORKS cards (shared per-card) ── */
        const works = document.querySelector("[data-section='selectedworks']");
        if (works) {
          const cards = works.querySelectorAll("[data-anim='card']");
          cards.forEach((card, i) => {
            const col = i % 4;
            const yDir = col < 2 ? 60 : -60;
            gsap.fromTo(card,
              { opacity: 0, y: yDir, clipPath: "inset(10% 0% 10% 0%)" },
              { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)", duration: 0.9,
                delay: col * 0.1, ease: "power3.out",
                scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none reverse" } });
            const img = card.querySelector("img");
            if (img) {
              gsap.to(img, {
                yPercent: -8, ease: "none",
                scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: 1 },
              });
            }
          });
        }

        /* ── CASES logos (shared) ── */
        const cases = document.querySelector("[data-section='cases']");
        if (cases) {
          const logos = cases.querySelectorAll("[data-anim='logo']");
          logos.forEach((logo, i) => {
            const row = Math.floor(i / 4);
            gsap.fromTo(logo,
              { opacity: 0, scale: 0.75, rotate: -4 + (i % 3) * 4 },
              { opacity: 1, scale: 1, rotate: 0, duration: 0.65, ease: "back.out(1.4)",
                delay: (i % 4) * 0.08 + row * 0.12,
                scrollTrigger: { trigger: logo, start: "top 88%", toggleActions: "play none none reverse" } });
          });
        }

        /* ── CALL TO ACTION ── */
        const cta = document.querySelector("[data-section='cta']");
        if (cta) {
          const bg   = cta.querySelector("[data-anim='bg']");
          const text = cta.querySelector("[data-anim='ctatext']");
          const btn  = cta.querySelector("[data-anim='ctabtn']");
          if (bg) {
            gsap.to(bg, {
              yPercent: 20, ease: "none",
              scrollTrigger: { trigger: cta, start: "top bottom", end: "bottom top", scrub: 1.5 },
            });
          }
          if (text) {
            gsap.fromTo(text,
              { opacity: 0, y: 40, letterSpacing: "0.2em" },
              { opacity: 1, y: 0, letterSpacing: "normal", duration: 1, ease: "power3.out",
                scrollTrigger: { trigger: cta, start: "top 75%" } });
          }
          if (btn) {
            gsap.fromTo(btn,
              { opacity: 0, y: 20, scale: 0.9 },
              { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)", delay: 0.4,
                scrollTrigger: { trigger: cta, start: "top 70%" } });
          }
        }

        /* ── JOURNAL posts (desktop layout) ── */
        const journal = document.querySelector("[data-section='journal']");
        if (journal) {
          const posts  = journal.querySelectorAll("[data-anim='post']");
          posts.forEach((post, i) => {
            gsap.fromTo(post,
              { opacity: 0, y: 60, clipPath: "inset(0% 0% 100% 0%)" },
              { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)", duration: 1, ease: "expo.out", delay: i * 0.15,
                scrollTrigger: { trigger: post, start: "top 85%", toggleActions: "play none none reverse" } });
            const img = post.querySelector("img");
            if (img) {
              gsap.to(img, {
                scale: 1.08, ease: "none",
                scrollTrigger: { trigger: post, start: "top bottom", end: "bottom top", scrub: 1.5 },
              });
            }
          });
        }

        /* ── NAVBAR – slide down on load (runs on all screens) ── */
        const navLogo = document.querySelector("[data-anim='navlogo']");
        const navCta  = document.querySelector("[data-anim='navcta']");
        gsap.fromTo([navLogo, navCta],
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.65, ease: "power3.out", stagger: 0.08, delay: 0.1 }
        );

        /* ── HERO background parallax (shared) ── */
        const hero = document.querySelector("[data-section='hero']");
        if (hero) {
          const heroBg = hero.querySelector("[data-anim='herobg']");
          if (heroBg) {
            gsap.to(heroBg, {
              yPercent: 15, ease: "none",
              scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 1.5 },
            });
          }
          // Tagline – visible on all screens
          const tagline = hero.querySelector("[data-anim='tagline']");
          if (tagline) {
            gsap.from(tagline, { opacity: 0, y: 20, duration: 0.9, ease: "power3.out", delay: 0.6 });
          }
        }

      });
      return () => ctx.revert();
    });

    /* ═══════════════════════════════════════════════════════════
       DESKTOP-ONLY animations  (lg: ≥ 1024px)
    ═══════════════════════════════════════════════════════════ */
    mm.add(LG, () => {
      const ctx = gsap.context(() => {

        /* ── NAVBAR desktop links ── */
        const navLinks = document.querySelector("[data-anim='navlinks']");
        if (navLinks) {
          gsap.fromTo(navLinks,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.65, ease: "power3.out", delay: 0.2 }
          );
        }

        /* ── HERO desktop entrance ── */
        const hero = document.querySelector("[data-section='hero']");
        if (hero) {
          const heroImgs    = hero.querySelectorAll("[data-anim='heroimg']");
          const thumbnails  = hero.querySelectorAll("[data-anim='herothumbnail']");
          const logo        = hero.querySelector("[data-anim='herologo']");
          const arrow       = hero.querySelector("[data-anim='heroarrow']");

          // Work5/Work6 overlay images
          gsap.from(heroImgs, {
            opacity: 0, scale: 0.92, stagger: 0.2, duration: 1.1, ease: "expo.out", delay: 0.3,
          });
          // 4 thumbnails – staggered clip reveal from bottom
          if (thumbnails.length) {
            gsap.fromTo(thumbnails,
              { opacity: 0, y: 30, clipPath: "inset(100% 0% 0% 0%)" },
              { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)", duration: 0.75, ease: "expo.out", stagger: 0.12, delay: 0.4 }
            );
          }
          // Desktop logo wipe
          if (logo) {
            gsap.fromTo(logo,
              { opacity: 0, y: 40, clipPath: "inset(100% 0% 0% 0%)" },
              { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)", duration: 1.1, ease: "expo.out", delay: 0.5 }
            );
          }
          // Down arrow bounce + infinite float
          if (arrow) {
            gsap.fromTo(arrow,
              { opacity: 0, y: -16 },
              { opacity: 1, y: 0, duration: 0.7, ease: "back.out(2)", delay: 1.1 }
            );
            gsap.to(arrow, {
              y: 8, repeat: -1, yoyo: true, duration: 1.2, ease: "sine.inOut", delay: 1.8,
            });
          }
        }

        /* ── WHO WE ARE desktop columns ── */
        const whoWeAre = document.querySelector("[data-section='whoweare']");
        if (whoWeAre) {
          const num  = whoWeAre.querySelector("[data-anim='num']");
          const cols = whoWeAre.querySelectorAll("[data-anim='col']");
          const img  = whoWeAre.querySelector("[data-anim='img']");
          if (num) {
            gsap.fromTo(num,
              { opacity: 0, x: -40 },
              { opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
                scrollTrigger: { trigger: whoWeAre, start: "top 80%" } });
          }
          cols.forEach((col, i) => {
            gsap.fromTo(col,
              { opacity: 0, y: 50 },
              { opacity: 1, y: 0, duration: 0.8, delay: i * 0.12, ease: "power3.out",
                scrollTrigger: { trigger: whoWeAre, start: "top 75%" } });
          });
          if (img) {
            gsap.fromTo(img,
              { opacity: 0, scale: 0.88, y: 30 },
              { opacity: 1, scale: 1, y: 0, duration: 1.1, ease: "expo.out",
                scrollTrigger: { trigger: whoWeAre, start: "top 70%" } });
            gsap.to(img, {
              yPercent: -12, ease: "none",
              scrollTrigger: { trigger: whoWeAre, start: "top bottom", end: "bottom top", scrub: 1.5 },
            });
          }
        }

        /* ── EXPERTISE desktop ── */
        const expertise = document.querySelector("[data-section='expertise']");
        if (expertise) {
          const letters   = expertise.querySelectorAll("[data-anim='letter']");
          const listItems = expertise.querySelectorAll("[data-anim='list']");
          const shapes    = expertise.querySelectorAll("[data-anim='expertise-shapes']");

          letters.forEach((letter, i) => {
            gsap.fromTo(letter,
              { opacity: 0, scale: 0.5, y: 20 },
              { opacity: 1, scale: 1, y: 0, duration: 0.6, delay: 0.2 + i * 0.15, ease: "back.out(1.7)",
                scrollTrigger: { trigger: letter, start: "top 85%", toggleActions: "play none none reverse" } });
          });
          listItems.forEach((item, i) => {
            gsap.fromTo(item,
              { opacity: 0, x: 20 },
              { opacity: 1, x: 0, duration: 0.5, delay: i * 0.06, ease: "power2.out",
                scrollTrigger: { trigger: item, start: "top 88%", toggleActions: "play none none reverse" } });
          });

          // Staggered reveal for internal shapes and scroll-scrub parallax
          shapes.forEach((shape) => {
            const boxes = shape.querySelectorAll("div");
            if (boxes.length > 0) {
              gsap.fromTo(boxes,
                { opacity: 0, scale: 0.8, y: 30 },
                {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  duration: 0.9,
                  stagger: 0.1,
                  ease: "back.out(1.5)",
                  scrollTrigger: {
                    trigger: shape,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                  }
                }
              );
            }

            gsap.to(shape, {
              yPercent: -15,
              ease: "none",
              scrollTrigger: {
                trigger: shape,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2
              }
            });
          });
        }

        /* ── FOOTER desktop ── */
        const footerLeft  = document.querySelector("[data-anim='footer-left']");
        const footerRight = document.querySelector("[data-anim='footer-right']");
        const footerCard  = document.querySelector("[data-anim='footer-card']");
        const footerBtns  = document.querySelector("[data-anim='footer-btns']");
        const footerRoot  = footerLeft?.closest("footer") ?? footerLeft?.parentElement;

        if (footerLeft) {
          gsap.fromTo(footerLeft,
            { opacity: 0, x: -60 },
            { opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
              scrollTrigger: { trigger: footerLeft, start: "top 88%" } });
        }
        if (footerRight) {
          gsap.fromTo(footerRight,
            { opacity: 0, x: 60 },
            { opacity: 1, x: 0, duration: 0.9, ease: "power3.out", delay: 0.1,
              scrollTrigger: { trigger: footerRight, start: "top 88%" } });
        }
        if (footerCard) {
          gsap.fromTo(footerCard,
            { opacity: 0, y: 40, rotate: 3 },
            { opacity: 1, y: 0, rotate: 0, duration: 0.85, ease: "back.out(1.4)", delay: 0.25,
              scrollTrigger: { trigger: footerCard, start: "top 85%" } });
        }
        if (footerBtns) {
          const btns = footerBtns.querySelectorAll("button");
          gsap.fromTo(btns,
            { opacity: 0, y: 20, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "back.out(1.7)", stagger: 0.1, delay: 0.4,
              scrollTrigger: { trigger: footerBtns, start: "top 90%" } });
        }
        if (footerRoot) {
          const footerImgs = footerRoot.querySelectorAll("[data-anim='footer-left'] img");
          footerImgs.forEach((img) => {
            gsap.to(img, {
              yPercent: -6, ease: "none",
              scrollTrigger: { trigger: footerRoot, start: "top bottom", end: "bottom top", scrub: 1 },
            });
          });
        }

      });
      return () => ctx.revert();
    });

    /* ═══════════════════════════════════════════════════════════
       MOBILE-ONLY animations  (< 1024px)
    ═══════════════════════════════════════════════════════════ */
    mm.add(MOBILE, () => {
      const ctx = gsap.context(() => {

        /* ── HERO mobile ── */
        const hero = document.querySelector("[data-section='hero']");
        if (hero) {
          const mobileLogo = hero.querySelector("[data-anim='herologo-mobile']");
          if (mobileLogo) {
            gsap.fromTo(mobileLogo,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.9, ease: "expo.out", delay: 0.4 }
            );
          }
          // Mobile thumbnails (md:grid – visible on tablet/mobile)
          const thumbnails = hero.querySelectorAll("[data-anim='herothumbnail']");
          if (thumbnails.length) {
            gsap.fromTo(thumbnails,
              { opacity: 0, x: 30 },
              { opacity: 1, x: 0, duration: 0.6, ease: "power3.out", stagger: 0.1, delay: 0.5 }
            );
          }
        }

        /* ── SELECTED WORKS mobile ── */
        const works = document.querySelector("[data-section='selectedworks']");
        if (works) {
          const swCards  = works.querySelectorAll("[data-anim='sw-mobile-card']");

          swCards.forEach((card, i) => {
            gsap.fromTo(card,
              { opacity: 0, y: 40, clipPath: "inset(100% 0% 0% 0%)" },
              { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)",
                duration: 0.65, ease: "expo.out",
                delay: (i % 2) * 0.1,
                scrollTrigger: { trigger: card, start: "top 90%", toggleActions: "play none none reverse" } });
          });
        }

        /* ── WHO WE ARE mobile – simple fade ── */
        const whoWeAre = document.querySelector("[data-section='whoweare']");
        if (whoWeAre) {
          const mobileBlock = whoWeAre.querySelector(".lg\\:hidden");
          if (mobileBlock) {
            gsap.fromTo(mobileBlock,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
                scrollTrigger: { trigger: mobileBlock, start: "top 88%" } });
          }
        }

        /* ── EXPERTISE mobile – each item rows ── */
        const expertise = document.querySelector("[data-section='expertise']");
        if (expertise) {
          const mobileItems = expertise.querySelectorAll(".lg\\:hidden > div, .lg\\:hidden .grid");
          mobileItems.forEach((el, i) => {
            gsap.fromTo(el,
              { opacity: 0, y: 25 },
              { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: i * 0.08,
                scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none reverse" } });
          });
        }

        /* ── CASES mobile logos ── */
        const cases = document.querySelector("[data-section='cases']");
        if (cases) {
          const mobileLogos = cases.querySelectorAll(".lg\\:hidden img");
          gsap.fromTo(mobileLogos,
            { opacity: 0, scale: 0.85 },
            { opacity: 1, scale: 1, duration: 0.55, ease: "back.out(1.4)", stagger: 0.07,
              scrollTrigger: { trigger: cases, start: "top 85%" } });
        }

        /* ── FOOTER mobile ── */
        const footerMobile = document.querySelector("footer .lg\\:hidden");
        if (footerMobile) {
          const children = footerMobile.querySelectorAll(":scope > *");
          gsap.fromTo(children,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.1,
              scrollTrigger: { trigger: footerMobile, start: "top 88%" } });
        }

        /* ── JOURNAL mobile posts ── */
        const journalMobile = document.querySelector("[data-section='journal']");
        if (journalMobile) {
          const mobilePosts = journalMobile.querySelectorAll("[data-anim='journal-post-mobile']");
          mobilePosts.forEach((post, i) => {
            gsap.fromTo(post,
              { opacity: 0, y: 50, clipPath: "inset(0% 0% 100% 0%)" },
              { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)", duration: 0.95, ease: "expo.out", delay: i * 0.1,
                scrollTrigger: { trigger: post, start: "top 90%", toggleActions: "play none none reverse" } });
            const img = post.querySelector("img");
            if (img) {
              gsap.to(img, {
                scale: 1.06, ease: "none",
                scrollTrigger: { trigger: post, start: "top bottom", end: "bottom top", scrub: 1.5 },
              });
            }
          });
        }

      });
      return () => ctx.revert();
    });

    return () => mm.revert();
  }, [enabled]);
}
