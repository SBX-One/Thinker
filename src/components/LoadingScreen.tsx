import { useEffect, useRef } from "react";
import gsap from "gsap";
import Logo from "../assets/svg/Thinker.svg";

interface LoadingScreenProps {
	onComplete?: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const logoRef = useRef<HTMLDivElement>(null);
	const panelsRef = useRef<HTMLDivElement[]>([]);

	useEffect(() => {
		// Lock page scroll
		document.body.style.overflow = "hidden";

		const container = containerRef.current;
		const logo = logoRef.current;
		const panels = panelsRef.current.filter(Boolean);

		if (!container || !logo || panels.length === 0) return;

		// Initial setup
		gsap.set(panels, { yPercent: 0 });
		gsap.set(logo, { opacity: 0, scale: 0.82 });

		const tl = gsap.timeline({
			onComplete: () => {
				// Unlock page scroll
				document.body.style.overflow = "";
				// Call the completion callback
				if (onComplete) onComplete();
			},
		});

		// 1. Logo fades in and scales up
		tl.to(logo, {
			opacity: 1,
			scale: 1,
			duration: 0.75,
			ease: "power3.out",
		});

		// 2. Logo subtle heartbeat pulsing effect
		tl.to(logo, {
			scale: 1.05,
			duration: 0.5,
			yoyo: true,
			repeat: 1,
			ease: "sine.inOut",
		}, "+=0.15");

		// 3. Logo slides up and fades out
		tl.to(logo, {
			opacity: 0,
			y: -40,
			duration: 0.45,
			ease: "power2.in",
		}, "+=0.1");

		// 4. Staggered curtain panels slide up (reveal page behind)
		tl.to(panels, {
			yPercent: -100,
			duration: 0.85,
			stagger: 0.12,
			ease: "power4.inOut",
		}, "-=0.25");

		return () => {
			document.body.style.overflow = "";
		};
	}, [onComplete]);

	return (
		<div
			ref={containerRef}
			className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-transparent"
		>
			{/* Staggered Vertical Curtain Panels */}
			<div className="absolute inset-0 flex w-full h-full pointer-events-none">
				{[...Array(4)].map((_, i) => (
					<div
						key={i}
						ref={(el) => {
							if (el) panelsRef.current[i] = el;
						}}
						style={{ backgroundColor: "var(--color-text-primary)" }}
						className="h-full flex-1"
					/>
				))}
			</div>

			{/* Center Logo */}
			<div
				ref={logoRef}
				className="relative z-10 flex flex-col items-center justify-center select-none"
			>
				<img
					src={Logo}
					alt="Thinker Logo"
					className="w-36 md:w-52 h-auto object-contain brightness-0 invert"
				/>
			</div>
		</div>
	);
}
