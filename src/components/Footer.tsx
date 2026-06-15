import HeroLogo from "../assets/svg/ThinkerHero.svg";
import Work1 from "../assets/images/Rectangle 17936.png";

export default function Footer() {
	return (
		<footer className="w-full relative">
			{/* Mobile & Tablet Footer Layout */}
			<div className="lg:hidden w-full py-20 px-6 md:px-12 flex flex-col items-center gap-16 border-t border-border relative">
				{/* Contact Card with 3D Offset Green Grid Pattern */}
				<div className="relative w-full max-w-sm md:max-w-[674px] mx-auto z-10">
					{/* 3D Offset Green Grid Layer */}
					<div className="absolute top-5 left-5 w-full h-full bg-[#BCFF1F]  border-r-2 border-b-2 border-black z-0" />

					{/* White Contact Info Card */}
					<div className="relative bg-white border border-border px-5 pt-5  pb-20 flex flex-col gap-6 text-left z-10">
						<span className="text-xs-bold text-text-secondary md:text-base-bold">
							Contact
						</span>
						<div className="text-xl md:text-3xl font-bold  grid gap-6">
							<p className="hover:text-text-acsent transition-colors cursor-pointer">
								THINKER@GMAIL.COM
							</p>
							<p className="hover:text-text-acsent transition-colors cursor-pointer">
								+62 123 445 667
							</p>
							<p className="w-max">001 MAIN STREET, NEW YORK</p>
							<p className="mb-20 md:mb-0">10001, USA</p>
						</div>
					</div>
				</div>

				{/* Button Group */}
				<div className="flex flex-row justify-center gap-4 w-full z-10 mt-4">
					{/* Social Media Pill */}
					<button className="flex items-center">
						<span className="w-max font-urbanist text-xs md:text-sm font-bold leading-[1.38] border border-border bg-background-button pl-6 pr-10 py-4 rounded-full text-text-primary hover:bg-neutral-50 transition-colors cursor-pointer">
							Social media
						</span>
						<span className="size-13 -ml-8 rounded-full bg-background-button border border-border-secondary text-black flex items-center justify-center text-sm font-bold">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="size-5"
								viewBox="0 0 9 16"
							>
								<path d="M0 0h9v16H0z" fill="none" />
								<path
									fill="currentColor"
									d="M4.5 13c-.28 0-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5v9c0 .28-.22.5-.5.5"
								/>
								<path
									fill="currentColor"
									d="M4.5 14a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.15 3.15l3.15-3.15c.2-.2.51-.2.71 0s.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"
								/>
							</svg>
						</span>
					</button>

					{/* Contact Us Pill */}
					<button className="flex items-center">
						<span className="w-max font-urbanist text-xs md:text-sm font-bold leading-[1.38] bg-black pl-6 pr-10 py-4 rounded-full text-white hover:bg-neutral-900 transition-colors cursor-pointer">
							Contact Us
						</span>
						<span className="size-13 -ml-8 rounded-full bg-background-button border border-border-secondary text-black flex items-center justify-center text-sm font-bold">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="size-5"
								viewBox="0 0 9 16"
							>
								<path d="M0 0h9v16H0z" fill="none" />
								<path
									fill="currentColor"
									d="M4.5 13c-.28 0-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5v9c0 .28-.22.5-.5.5"
								/>
								<path
									fill="currentColor"
									d="M4.5 14a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.15 3.15l3.15-3.15c.2-.2.51-.2.71 0s.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"
								/>
							</svg>
						</span>
					</button>
				</div>

				{/* Footer Logo */}
				<div className="w-screen px-5 z-10 mt-6">
					<img src={HeroLogo} className="w-full h-auto" alt="Thinker" />
				</div>
			</div>

			{/* Desktop Footer Layout */}
			<div className="hidden lg:grid grid-cols-2 relative w-full border-t border-border min-h-[580px]">
				{/* Center vertical grid line */}
				<div className="absolute left-1/2 top-0 bottom-0 w-px bg-border z-0" />

				{/* Left Column (Column 1) */}
				<div className="flex flex-col justify-between py-16 pl-12 pr-12 relative z-10 min-h-[580px]">
					{/* Top: Stacked lake image */}
					<div className="relative w-72 aspect-[158/100] select-none">
						{/* Blue background box (offset top-left) */}
						<div className="absolute top-0 left-0 w-[85%] h-[85%] bg-[#4A90E2]" />
						{/* Mountain image (offset bottom-right) */}
						<img
							src={Work1}
							alt="Mountain Lake"
							className="absolute bottom-0 right-0 w-[85%] h-[85%] object-cover border border-border"
						/>
					</div>

					{/* Bottom: Thinker Logo + Green Dot */}
					<div className="relative flex items-center w-full mt-16">
						<img src={HeroLogo} alt="Thinker Logo" className="w-[85%] h-auto select-none" />
						{/* Green dot badge - positioned exactly on the center line */}
						<div className="absolute right-0 w-6 h-6 bg-[#93D100] rounded-full translate-x-1/2 z-20" />
					</div>
				</div>

				{/* Right Column (Column 2) */}
				<div className="flex flex-col justify-between py-16 pl-12 pr-12 relative z-10 min-h-[580px]">
					{/* Top: Contact Card with offset green grid pattern */}
					<div className="relative w-full max-w-[450px] z-10">
						{/* Offset green box with grid pattern background */}
						<div
							className="absolute top-5 left-5 w-full h-full bg-[#BCFF1F] border border-black z-0"
							style={{
								backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.15) 1px, transparent 1px)',
								backgroundSize: '20px 20px'
							}}
						/>
						{/* White Contact Card */}
						<div className="relative bg-white border border-black px-8 py-8 flex flex-col gap-6 text-left z-10">
							<span className="text-sm font-bold text-text-secondary">
								Contact
							</span>
							<div className="text-2xl font-bold grid gap-4 text-text-primary tracking-tight">
								<p className="hover:text-text-acsent transition-colors cursor-pointer">
									THINKER@GMAIL.COM
								</p>
								<p className="hover:text-text-acsent transition-colors cursor-pointer">
									+62 123 445 667
								</p>
								<p>001 MAIN STREET, NEW YORK</p>
								<p>10001, USA</p>
							</div>
						</div>
					</div>

					{/* Bottom: Button Group (right-aligned) */}
					<div className="flex flex-row justify-end gap-4 w-full z-10 mt-16 pr-4">
						{/* Social Media Pill */}
						<button className="flex items-center group">
							<span className="w-max font-urbanist text-xs md:text-sm font-bold leading-[1.38] border border-border bg-background-button pl-6 pr-10 py-4 rounded-full text-text-primary hover:bg-neutral-50 transition-colors cursor-pointer">
								Social media
							</span>
							<span className="size-13 -ml-8 rounded-full bg-background-button border border-border-secondary text-black flex items-center justify-center text-sm font-bold group-hover:bg-neutral-100 transition-colors cursor-pointer">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="size-5"
									viewBox="0 0 9 16"
								>
									<path d="M0 0h9v16H0z" fill="none" />
									<path
										fill="currentColor"
										d="M4.5 13c-.28 0-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5v9c0 .28-.22.5-.5.5"
									/>
									<path
										fill="currentColor"
										d="M4.5 14a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.15 3.15l3.15-3.15c.2-.2.51-.2.71 0s.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"
									/>
								</svg>
							</span>
						</button>

						{/* Contact Us Pill */}
						<button className="flex items-center group">
							<span className="w-max font-urbanist text-xs md:text-sm font-bold leading-[1.38] bg-black pl-6 pr-10 py-4 rounded-full text-white hover:bg-neutral-900 transition-colors cursor-pointer">
								Contact Us
							</span>
							<span className="size-13 -ml-8 rounded-full bg-background-button border border-border-secondary text-black flex items-center justify-center text-sm font-bold group-hover:bg-neutral-100 transition-colors cursor-pointer">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="size-5"
									viewBox="0 0 9 16"
								>
									<path d="M0 0h9v16H0z" fill="none" />
									<path
										fill="currentColor"
										d="M4.5 13c-.28 0-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5v9c0 .28-.22.5-.5.5"
									/>
									<path
										fill="currentColor"
										d="M4.5 14a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.15 3.15l3.15-3.15c.2-.2.51-.2.71 0s.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"
									/>
								</svg>
							</span>
						</button>
					</div>
				</div>
			</div>
		</footer>
	);
}

