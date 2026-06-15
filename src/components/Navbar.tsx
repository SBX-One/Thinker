import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Logo from "../assets/svg/Thinker.svg";

const NAV_LINKS = [
	{ label: "Home", id: "home" },
	{ label: "About", id: "about" },
	{ label: "Works", id: "works" }
];

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	// Refs
	const dropdownRef = useRef<HTMLDivElement>(null);
	const overlayRef = useRef<HTMLDivElement>(null);
	const itemsRef = useRef<HTMLParagraphElement[]>([]);
	const line1Ref = useRef<SVGLineElement>(null);
	const line2Ref = useRef<SVGLineElement>(null);
	const line3Ref = useRef<SVGLineElement>(null);
	const line4Ref = useRef<SVGLineElement>(null);

	// GSAP context scoped to dropdown
	const { contextSafe } = useGSAP({ scope: dropdownRef });

	const openMenu = contextSafe(() => {
		// Dropdown panel
		gsap.fromTo(
			dropdownRef.current,
			{ y: -20, opacity: 0, pointerEvents: "none" },
			{
				y: 0,
				opacity: 1,
				pointerEvents: "auto",
				duration: 0.35,
				ease: "power3.out",
			},
		);
		// Overlay fade
		gsap.fromTo(
			overlayRef.current,
			{ opacity: 0 },
			{ opacity: 1, duration: 0.3, ease: "power2.out" },
		);
		// Stagger items
		gsap.fromTo(
			itemsRef.current,
			{ y: -12, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 0.35,
				stagger: 0.07,
				ease: "power3.out",
				delay: 0.08,
			},
		);
		// Hamburger → X
		gsap.to(line1Ref.current, {
			attr: { x1: 4, y1: 6, x2: 20, y2: 18 },
			duration: 0.3,
			ease: "power2.inOut",
		});
		gsap.to(line2Ref.current, { opacity: 0, duration: 0.2 });
		gsap.to(line4Ref.current, { opacity: 0, duration: 0.2 });
		gsap.to(line3Ref.current, {
			attr: { x1: 4, y1: 18, x2: 20, y2: 6 },
			duration: 0.3,
			ease: "power2.inOut",
		});
	});

	const closeMenu = contextSafe(() => {
		gsap.to(dropdownRef.current, {
			y: -20,
			opacity: 0,
			pointerEvents: "none",
			duration: 0.25,
			ease: "power3.in",
		});
		gsap.to(overlayRef.current, { opacity: 0, duration: 0.25 });
		// Hamburger ← X
		gsap.to(line1Ref.current, {
			attr: { x1: 4, y1: 7, x2: 7, y2: 7 },
			duration: 0.3,
			ease: "power2.inOut",
		});
		gsap.to(line2Ref.current, { opacity: 1, duration: 0.2, delay: 0.1 });
		gsap.to(line4Ref.current, { opacity: 1, duration: 0.2, delay: 0.1 });
		gsap.to(line3Ref.current, {
			attr: { x1: 4, y1: 17, x2: 20, y2: 17 },
			duration: 0.3,
			ease: "power2.inOut",
		});
	});

	const toggleMenu = () => {
		if (isOpen) {
			closeMenu();
		} else {
			openMenu();
		}
		setIsOpen((prev) => !prev);
	};

	const handleLinkClick = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		if (isOpen) {
			closeMenu();
			setIsOpen(false);
		}
	};

	return (
		<>
			{/* Navbar bar */}
			<nav className="relative z-50 px-8 py-6 flex justify-between items-center lg:grid lg:grid-cols-3 text-text-primary border-b border-border bg-white">
				{/* Overlay - starts below navbar */}
				<div
					ref={overlayRef}
					onClick={toggleMenu}
					style={{ opacity: 0, pointerEvents: isOpen ? "auto" : "none" }}
					className="absolute top-full left-0 right-0 h-screen z-40 bg-black/20 backdrop-blur-sm"
				/>
				
				{/* Logo Column */}
				<div className="flex items-center justify-start" data-anim="navlogo">
					<img
						src={Logo}
						alt="Thinker Logo"
						className="cursor-pointer"
						onClick={() => handleLinkClick("home")}
					/>
				</div>

				{/* Desktop Links (centered) */}
				<div className="gap-8 hidden lg:flex justify-center" data-anim="navlinks">
					{NAV_LINKS.map((link) => (
						<p
							key={link.id}
							onClick={() => handleLinkClick(link.id)}
							className="text-base font-medium relative cursor-pointer group font-urbanist"
						>
							{link.label}
							<span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-text-primary transition-all duration-300 group-hover:w-full rounded-full" />
						</p>
					))}
				</div>

				{/* CTA and Hamburger (Right-aligned) */}
				<div className="flex items-center justify-end" data-anim="navcta">
					{/* Desktop CTA */}
					<button
						onClick={() => handleLinkClick("contact")}
						className="text-base-bold items-center gap-1.5 lg:flex hidden hover:text-text-acsent transition-colors duration-200 cursor-pointer"
					>
						Get In Touch
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							className="w-5"
						>
							<path
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6m0 0H9m9 0v9"
							/>
						</svg>
					</button>

					{/* Hamburger (mobile) */}
					<button
						onClick={toggleMenu}
						className="lg:hidden p-1 rounded-md hover:bg-black/5 transition-colors duration-200 cursor-pointer"
						aria-label="Toggle menu"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-9 h-9"
							viewBox="0 0 24 24"
							fill="none"
						>
							<line
								ref={line1Ref}
								x1="4"
								y1="7"
								x2="7"
								y2="7"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
							/>
							<line
								ref={line2Ref}
								x1="4"
								y1="12"
								x2="16"
								y2="12"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
							/>
							<line
								ref={line3Ref}
								x1="4"
								y1="17"
								x2="20"
								y2="17"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
							/>
							<line
								ref={line4Ref}
								x1="10"
								y1="7"
								x2="20"
								y2="7"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						</svg>
					</button>
				</div>

				{/* Dropdown panel */}
				<div
					ref={dropdownRef}
					style={{ opacity: 0, pointerEvents: "none" }}
					className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-xl border-t border-black/5 z-50 lg:hidden"
				>
					<div className="flex flex-col px-8 py-6 gap-1">
						{NAV_LINKS.map((link, i) => (
							<p
								key={link.id}
								ref={(el) => {
									if (el) itemsRef.current[i] = el;
								}}
								onClick={() => handleLinkClick(link.id)}
								className="text-base-bold py-3 border-b border-black/5 last:border-none cursor-pointer hover:text-text-acsent transition-colors duration-200"
							>
								{link.label}
							</p>
						))}
						<button
							onClick={() => handleLinkClick("contact")}
							className="mt-4 text-base-bold flex items-center gap-1.5 text-text-primary hover:text-text-acsent transition-colors duration-200 cursor-pointer text-left w-full"
						>
							Get In Touch
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="w-5"
							>
								<path
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6m0 0H9m9 0v9"
								/>
							</svg>
						</button>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
