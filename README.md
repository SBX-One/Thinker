# Thinker — Premium Creative Agency Showcase

Thinker is a state-of-the-art, highly interactive showcase website for a creative design agency. The site serves as a live portfolio displaying motion design capability through immersive layout animations, rich microinteractions, and tactile physics-driven feedback.

Designed to wow visitors on first load, it combines minimalist editorial design with modern, premium movement patterns.

---

## ⚡ Motion Design Architecture

Every transition, hover, and scroll reveal is custom-engineered using **GPU-accelerated properties (`transform` and `opacity`)** to prevent layout thrashing and maintain a fluid 60+ FPS experience. The animation suite is built entirely on top of **GSAP 3.15** and **ScrollTrigger**, structured into modular React hooks.

### Core Enhancements & Features

| Feature | Description | File / Hook Location |
| :--- | :--- | :--- |
| **♿ Reduced Motion Guard** | Standard accessibility compliance. Collapses CSS transitions and bypasses GSAP timelines for users who prefer reduced motion. | `src/global.css` & `src/hooks/useScrollAnimations.ts` |
| **🖱️ Mouse-driven Parallax** | Throttled via `requestAnimationFrame` with smooth interpolation (`ease: "power2.out"`). Creates depth in the hero section across multiple image layers. Desktop-only fallback. | [`useMouseParallax.ts`](file:///c:/Project%20Main/Thinker/src/hooks/useMouseParallax.ts) & [`HeroSection.tsx`](file:///c:/Project%20Main/Thinker/src/components/landing/HeroSection.tsx) |
| **📐 3D Tilt Cards** | Tactile 3D perspective distortion on card items inside Selected Works. Uses local `transformPerspective` and mouse mapping coordinates to tilt elements. | [`useTiltCards.ts`](file:///c:/Project%20Main/Thinker/src/hooks/useTiltCards.ts) & [`SelectedWorksSection.tsx`](file:///c:/Project%20Main/Thinker/src/components/landing/SelectedWorksSection.tsx) |
| **🔘 Button Microinteractions** | Standardized spring mechanics for buttons and interactive controls. Handles hover (hover state scale/lift), press (compression), and springy release. | [`useButtonMicrointeractions.ts`](file:///c:/Project%20Main/Thinker/src/hooks/useButtonMicrointeractions.ts) |
| **📈 Scroll Progress Indicator** | Fixed 2px bar at the top tracking global scrolling progress using ScrollTrigger scrub. Fades in only after loading completes. | [`ScrollProgressBar.tsx`](file:///c:/Project%20Main/Thinker/src/components/ScrollProgressBar.tsx) |
| **✒️ SVG Path Drawing** | Nav link underlines replaced with responsive vector lines (`<path>`) animating `stroke-dashoffset` from 100 to 0 on hover. | [`Navbar.tsx`](file:///c:/Project%20Main/Thinker/src/components/Navbar.tsx) & `src/global.css` |
| **✨ Viewport Scroll Reveals** | Sequential reveals, staggered slides, and clip-path entrance reveals triggered as sections enter the viewport. | [`useScrollAnimations.ts`](file:///c:/Project%20Main/Thinker/src/hooks/useScrollAnimations.ts) |

---

## 🛠️ Technology Stack

*   **Core Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
*   **Build System**: [Vite 8](https://vite.dev/)
*   **Styling System**: [Tailwind CSS v4](https://tailwindcss.com/) (using inline theme configurations & custom utility classes)
*   **Animation Engine**: [GSAP (GreenSock Animation Platform) 3.15](https://greensock.com/gsap/) + [ScrollTrigger](https://greensock.com/scrolltrigger/)
*   **React Integration**: `@gsap/react` hooks integration

---

## 📂 Project Structure

```bash
Thinker/
├── public/                     # Static assets (Favicons, web manifests)
├── src/
│   ├── assets/                 # SVGs and portfolio image slices
│   ├── components/             # Reusable UI Components
│   │   ├── landing/            # Landing page layout sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── WhoWeAreSection.tsx
│   │   │   ├── SelectedWorksSection.tsx
│   │   │   ├── ExpertiseSection.tsx
│   │   │   ├── CasesSection.tsx
│   │   │   ├── CallToActionSection.tsx
│   │   │   └── JournalSection.tsx
│   │   ├── LoadingScreen.tsx   # Intro loader screen
│   │   ├── Navbar.tsx          # Main header navbar
│   │   ├── Footer.tsx          # Main contact footer
│   │   └── ScrollProgressBar.tsx
│   ├── hooks/                  # Custom GSAP interaction hooks
│   │   ├── useButtonMicrointeractions.ts
│   │   ├── useMouseParallax.ts
│   │   ├── useScrollAnimations.ts
│   │   └── useTiltCards.ts
│   ├── pages/
│   │   └── landing.tsx         # Hub compiling all landing sections & hooks
│   ├── global.css              # Global styles, font imports & custom animations
│   └── main.tsx                # React entrypoint
├── index.html                  # HTML entry template
├── package.json                # Project config & dependencies
└── tsconfig.json               # TypeScript configuration
```

---

## 🚀 Getting Started

### 📋 Prerequisites

To run this project locally, ensure you have:
*   [Node.js](https://nodejs.org/) (v18 or higher recommended)
*   [pnpm](https://pnpm.io/) package manager installed

### 💻 Local Setup

1.  **Clone / Download the project files**
2.  **Install dependencies**:
    ```bash
    pnpm install
    ```
3.  **Start the local development server**:
    ```bash
    pnpm dev
    ```
    The site will start running locally, typically at `http://localhost:5173/`.

4.  **Build production-ready code**:
    ```bash
    pnpm build
    ```
    This generates optimized, transpiled static files inside the `/dist` directory.

---

## ⚖️ Performance & Design Guidelines

To maintain visual quality and top-tier page performance during future edits:

1.  **Prefer CSS transitions for layout changes**: Keep JS animation workloads bounded to scale, rotation, translation (`x`, `y`, `z`), and opacity. Avoid animating layout properties like `width`, `height`, `margin`, or absolute position coordinates (`top`, `left`) directly in GSAP to prevent browser paint loops.
2.  **Always include cleanup routines**: Every listener or timeline created inside custom React hooks must be properly killed, cleared, or removed inside the useEffect return callback to prevent memory leaks.
3.  **Graceful Mobile Degradation**: Intricate, high-performance desktop motions (such as Mouse Parallax and 3D Tilt Cards) must check for pointer capabilities (`pointer: fine`) or screen width to gracefully turn off on touch screens and mobile devices, preventing erratic interactions.
4.  **Aesthetics Checklist**: Use curated harmonies of neutral backdrops, accented outlines (accent color: `#93D100`), smooth easing profiles, and responsive vector drawing for all micro-indicators.
