import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// HERO SECTION
import HeroLogo from "../assets/svg/ThinkerHero.svg";
import HeroBackground from "../assets/svg/HeroBacground.svg";
import DekstopHeroBackground from "../assets/svg/dekstopHeroBackgound.svg";

// WORK SECTION
import Work1 from "../assets/images/Rectangle 17936.png";
import Work2 from "../assets/images/Rectangle 17938.png";
import Work3 from "../assets/images/Rectangle 17939.png";
import Work4 from "../assets/images/Rectangle 17940.png";

import backgroud from "../assets/svg/backgorund.svg";

// BRAND LOGOS SECTION
import logoBrand1 from "../assets/svg/Frame 1984079081.svg";
import logoBrand2 from "../assets/svg/Frame 1984079082.svg";
import logoBrand3 from "../assets/svg/Frame 1984079083.svg";
import logoBrand4 from "../assets/svg/Frame 1984079084.svg";
import logoBrand5 from "../assets/svg/Frame 1984079086.svg";
import logoBrand6 from "../assets/svg/Frame 1984079088.svg";
import logoBrand7 from "../assets/svg/Frame 1984079089.svg";
import logoBrand8 from "../assets/svg/Frame 1984079087.svg";

// --- Images for Journal Section ---
import JournalImage from "../assets/images/Rectangle 17977.png";
import JournalImage2 from "../assets/images/Rectangle 17978.png";

const brandLogos = [
	logoBrand1,
	logoBrand3,
	logoBrand4,
	logoBrand2,
	logoBrand5,
	logoBrand8,
	logoBrand6,
	logoBrand7,
];

function landing() {
	return (
		<div className="w-full">
			<Navbar />

			{/* Hero  */}
			<div className=" h-screen relative w-fit overflow-hidden lg:h-full">
				<div className="h-full">
					<div className="grid grid-rows-2 h-full w-full z-10 py-20 md:py-10">
						<div className="grid justify-between">
							<div className="flex justify-between">
								<p className="text-xs-medium text-text-secondary  w-5/7  z-10  px-5 md:text-sm-medium md:w-3/8">
									Thinker is a creative agency dedicated to
									branding that delivers real outcomes,
									meaningful, measurable, and human.
								</p>

								<div className="hidden md:grid grid-cols-2 w-1/5 h-1/2 gap-2 pr-5  ">
									<div className="w-full overflow-hidden bg-background-default  hover:opacity-95 transition-opacity">
										<img
											src={Work1}
											className="w-full h-full object-cover"
											alt="Selected Work 1"
										/>
									</div>
									<div className="w-full overflow-hidden bg-background-default  hover:opacity-95 transition-opacity">
										<img
											src={Work3}
											className="w-full h-full object-cover"
											alt="Selected Work 3"
										/>
									</div>

									<div className="w-full overflow-hidden bg-background-default  hover:opacity-95 transition-opacity">
										<img
											src={Work2}
											className="w-full h-full object-cover"
											alt="Selected Work 2"
										/>
									</div>
									<div className="w-full overflow-hidden bg-background-default hover:opacity-95 transition-opacity">
										<img
											src={Work4}
											className="w-full h-full object-cover"
											alt="Selected Work 4"
										/>
									</div>
								</div>
							</div>
							<div className="border-b-2 border-border h-full w-screen  flex items-end justify-end ">
								<img
									className="px-5 w-full"
									src={HeroLogo}
									alt="Thinker Logo "
								/>
							</div>
						</div>
					</div>

					<div className="absolute left-0 bottom-0 z-[-1] lg:hidden">
						<img src={HeroBackground} alt="" className="w-screen" />
					</div>
					<div className="hidden absolute left-0 bottom-0 z-[-1] lg:flex w-full h-[50vh]">
						<img
							src={DekstopHeroBackground}
							alt=""
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="w-0.5 h-screen absolute left-1/2 top-0 bg-border z-[-2]" />
				</div>
			</div>

			<div className="relative h-fit">
				<div className="absolute left-0 top-0 h-full w-full grid grid-cols-2 gap-5 lg:hidden">
					<div className="border-r border-border" />
					<div className="border-l border-border" />
				</div>
				{/* Section 01: Who we are */}
				{/* Mobile and Tablet Layout */}
				<div className="lg:hidden relative w-full border-b border-border py-20 px-5 grid grid-cols-2 gap-10">
					{/* Left Column */}
					<div className="flex flex-col col-span-2 gap-4  ">
						<div className="flex justify-between md:grid md:grid-cols-2 md:gap-5">
							<span className="text-base-bold md:text-5xl-reg">
								01
							</span>
							<div className="grid gap-4">
								<p className="text-xs-bold md:text-base-bold">
									Who we are
								</p>
								<div className="hidden flex-col gap-6 text-xs-medium text-text-secondary md:flex md:text-sm-medium">
									<p>
										We are a multidisciplinary design agency{" "}
										<br />
										committed to crafting impactful digital
										experience.
									</p>
									<p>
										Our team focuses on innovation and,
										partnering <br />
										with clients to develop identities and
										digital <br />
										products that works.
									</p>
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-6 text-xs-medium text-text-secondary md:hidden">
							<p>
								We are a multidisciplinary design agency <br />
								committed to crafting impactful digital
								experience.
							</p>
							<p>
								Our team focuses on innovation and, partnering{" "}
								<br />
								with clients to develop identities and digital{" "}
								<br />
								products that works.
							</p>
						</div>
					</div>
				</div>

				{/* Desktop Layout (lg and above) */}
				<div className="hidden lg:grid w-full border-b border-border grid-cols-4 py-20 relative">
					{/* Grid Lines Overlay */}
					<div className="absolute inset-0 grid grid-cols-4 pointer-events-none z-0">
						<div className="border-r border-border" />
						<div className="border-r border-border" />
						<div className="border-r border-border" />
						<div />
					</div>

					{/* Column 1: Number */}
					<div className="pl-12 pr-12 relative z-10">
						<span className="text-5xl-reg">01</span>
					</div>

					{/* Column 2: Title */}
					<div className="pl-12 pr-12 relative z-10">
						<h3 className="text-base-bold text-text-primary">
							Who we are
						</h3>
					</div>

					{/* Column 3: Paragraphs */}
					<div className="pl-12 pr-12 flex flex-col gap-6 text-sm-medium text-text-secondary relative z-10">
						<p>
							We are a multidisciplinary design agency <br />
							committed to crafting impactful digital experience.
						</p>
						<p>
							Our team focuses on innovation and, partnering{" "}
							<br />
							with clients to develop identities and digital{" "}
							<br />
							products that works.
						</p>
					</div>

					{/* Column 4: Image Placeholder */}
					<div className="pl-12 pr-12 flex items-start justify-center relative z-10">
						<div className="w-full aspect-[158/100] bg-[#EAEAEA] flex items-center justify-center text-text-secondary text-xs select-none">
							Image Placeholder
						</div>
					</div>
				</div>

				{/* Section 02: Selected Works */}
				{/* Mobile & Tablet Layout */}
				<div className="lg:hidden relative w-full py-20 px-5 grid grid-cols-2 gap-10">
					{/* Left Column */}
					<div className="flex flex-col col-span-2 gap-4">
						<div className="flex justify-between md:grid md:grid-cols-2 md:gap-5">
							<span className="text-base-bold md:text-5xl-reg">
								02
							</span>
							<div className="grid gap-4">
								<p className="text-xs-bold md:text-base-bold ">
									Selected Works
								</p>
								<div className="relative w-full z-10 flex justify-end md:justify-start">
									<div className="flex items-center gap-4 md:gap-8 text-xs-medium md:text-sm-medium -mx-12  ">
										<span className="cursor-pointer hover:text-text-primary transition-colors ">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
											>
												<path
													d="M0 0h24v24H0z"
													fill="none"
												/>
												<g
													fill="none"
													fill-rule="evenodd"
												>
													<path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
													<path
														fill="currentColor"
														d="M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414z"
													/>
												</g>
											</svg>
										</span>
										<span className="cursor-pointer text-text-primary border-b border-text-primary ">
											Grid
										</span>
										<span className="cursor-pointer hover:text-text-primary transition-colors">
											List
										</span>
										<span className="cursor-pointer hover:text-text-primary transition-colors">
											Feed
										</span>
										<span className="cursor-pointer hover:text-text-primary transition-colors">
											Full-width
										</span>
										<span className="cursor-pointer hover:text-text-primary transition-colors ">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
											>
												<path
													d="M0 0h24v24H0z"
													fill="none"
												/>
												<g
													fill="none"
													fill-rule="evenodd"
												>
													<path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
													<path
														fill="currentColor"
														d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
													/>
												</g>
											</svg>
										</span>
									</div>
								</div>
							</div>
						</div>

						{/* Filter Menu Row - centered across the page */}

						{/* Image Grid */}
						<div className="grid mt-8 w-full relative">
							<div className="grid grid-cols-2 w-full gap-5">
								<div className="w-full overflow-hidden bg-background-default  hover:opacity-95 transition-opacity">
									<img
										src={Work1}
										className="w-full h-full object-cover"
										alt="Selected Work 1"
									/>
								</div>
								<div className="w-full overflow-hidden bg-background-default  hover:opacity-95 transition-opacity">
									<img
										src={Work3}
										className="w-full h-full object-cover"
										alt="Selected Work 3"
									/>
								</div>

								<div className="w-full overflow-hidden bg-background-default  hover:opacity-95 transition-opacity">
									<img
										src={Work2}
										className="w-full h-full object-cover"
										alt="Selected Work 2"
									/>
								</div>
								<div className="w-full overflow-hidden bg-background-default hover:opacity-95 transition-opacity">
									<img
										src={Work4}
										className="w-full h-full object-cover"
										alt="Selected Work 4"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Desktop Layout (lg and above) */}
				<div className="hidden lg:grid w-full border-b border-border grid-cols-4 py-20 relative">
					{/* Grid Lines Overlay */}
					<div className="absolute inset-0 grid grid-cols-4 pointer-events-none z-0">
						<div className="border-r border-border" />
						<div className="border-r border-border" />
						<div className="border-r border-border" />
						<div />
					</div>

					{/* Header Row */}
					<div className="pl-12 pr-12 relative z-10">
						<span className="text-5xl-reg">02</span>
					</div>
					<div className="pl-12 pr-12 relative z-10">
						<h3 className="text-base-bold text-text-primary pt-3">
							Selected Works
						</h3>
					</div>
					<div className="pl-12 pr-12 relative z-10">
						<div className="flex items-center gap-4 text-sm-medium text-text-secondary pt-3">
							<span className="cursor-pointer text-text-primary border-b border-text-primary pb-1">
								Grid
							</span>
							<span className="cursor-pointer hover:text-text-primary transition-colors pb-1">
								List
							</span>
							<span className="cursor-pointer hover:text-text-primary transition-colors pb-1">
								Feed
							</span>
							<span className="cursor-pointer hover:text-text-primary transition-colors pb-1">
								Full-width
							</span>
						</div>
					</div>
					<div className="pl-12 pr-12 relative z-10">
						<div className="flex justify-end gap-6 text-sm-medium text-text-primary pt-3">
							<span className="cursor-pointer hover:text-text-acsent transition-colors">
								Web Design
							</span>
							<span className="cursor-pointer hover:text-text-acsent transition-colors">
								Branding
							</span>
						</div>
					</div>

					{/* Image Cards Row */}
					{/* Column 1 */}
					<div className="pl-12 pr-12 mt-16 flex flex-col gap-10 relative z-10">
						{/* Item 1 */}
						<div className="flex flex-col gap-3 group cursor-pointer">
							<div className="w-full aspect-[158/100] bg-background-default overflow-hidden">
								<img
									src={Work1}
									className="w-full h-full object-cover transition-opacity group-hover:opacity-95"
									alt="Lumine 1"
								/>
							</div>
							<div className="flex justify-between text-xs font-semibold tracking-tight text-text-primary">
								<span>Lumine</span>
								<span className="text-text-secondary">
									Branding / Web Design
								</span>
							</div>
						</div>

						{/* Item 5 */}
						<div className="flex flex-col gap-3 group cursor-pointer">
							<div className="w-full aspect-[158/100] bg-background-default overflow-hidden">
								<img
									src={Work1}
									className="w-full h-full object-cover transition-opacity group-hover:opacity-95"
									alt="Lumine 5"
								/>
							</div>
							<div className="flex justify-between text-xs font-semibold tracking-tight text-text-primary">
								<span>Lumine</span>
								<span className="text-text-secondary">
									Branding
								</span>
							</div>
						</div>
					</div>

					{/* Column 2 */}
					<div className="pl-12 pr-12 mt-16 flex flex-col gap-10 relative z-10">
						{/* Item 2 */}
						<div className="flex flex-col gap-3 group cursor-pointer">
							<div className="w-full aspect-[158/100] bg-background-default overflow-hidden">
								<img
									src={Work3}
									className="w-full h-full object-cover transition-opacity group-hover:opacity-95"
									alt="Lumine 2"
								/>
							</div>
							<div className="flex justify-between text-xs font-semibold tracking-tight text-text-primary">
								<span>Lumine</span>
								<span className="text-text-secondary">
									Branding / Web Design
								</span>
							</div>
						</div>

						{/* Item 6 */}
						<div className="flex flex-col gap-3 group cursor-pointer">
							<div className="w-full aspect-[158/100] bg-background-default overflow-hidden">
								<img
									src={Work3}
									className="w-full h-full object-cover transition-opacity group-hover:opacity-95"
									alt="Lumine 6"
								/>
							</div>
							<div className="flex justify-between text-xs font-semibold tracking-tight text-text-primary">
								<span>Lumine</span>
								<span className="text-text-secondary">
									Branding
								</span>
							</div>
						</div>
					</div>

					{/* Column 3 */}
					<div className="pl-12 pr-12 mt-16 flex flex-col gap-10 relative z-10">
						{/* Item 3 */}
						<div className="flex flex-col gap-3 group cursor-pointer">
							<div className="w-full aspect-[158/100] bg-background-default overflow-hidden">
								<img
									src={Work2}
									className="w-full h-full object-cover transition-opacity group-hover:opacity-95"
									alt="Lumine 3"
								/>
							</div>
							<div className="flex justify-between text-xs font-semibold tracking-tight text-text-primary">
								<span>Lumine</span>
								<span className="text-text-secondary">
									Branding / Web Design
								</span>
							</div>
						</div>

						{/* Item 7 */}
						<div className="flex flex-col gap-3 group cursor-pointer">
							<div className="w-full aspect-[158/100] bg-background-default overflow-hidden">
								<img
									src={Work2}
									className="w-full h-full object-cover transition-opacity group-hover:opacity-95"
									alt="Lumine 7"
								/>
							</div>
							<div className="flex justify-between text-xs font-semibold tracking-tight text-text-primary">
								<span>Lumine</span>
								<span className="text-text-secondary">
									Branding
								</span>
							</div>
						</div>
					</div>

					{/* Column 4 */}
					<div className="pl-12 pr-12 mt-16 flex flex-col gap-10 relative z-10">
						{/* Item 4 */}
						<div className="flex flex-col gap-3 group cursor-pointer">
							<div className="w-full aspect-[158/100] bg-background-default overflow-hidden">
								<img
									src={Work4}
									className="w-full h-full object-cover transition-opacity group-hover:opacity-95"
									alt="Lumine 4"
								/>
							</div>
							<div className="flex justify-between text-xs font-semibold tracking-tight text-text-primary">
								<span>Lumine</span>
								<span className="text-text-secondary">
									Web Design
								</span>
							</div>
						</div>

						{/* Item 8 */}
						<div className="flex flex-col gap-3 group cursor-pointer">
							<div className="w-full aspect-[158/100] bg-background-default overflow-hidden">
								<img
									src={Work4}
									className="w-full h-full object-cover transition-opacity group-hover:opacity-95"
									alt="Lumine 8"
								/>
							</div>
							<div className="flex justify-between text-xs font-semibold tracking-tight text-text-primary">
								<span>Lumine</span>
								<span className="text-text-secondary">
									Branding
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* Section 03: Our Expertise */}
				{/* Mobile & Tablet Layout */}
				<div className="lg:hidden relative w-full border-b border-border py-20 px-5 grid grid-cols-2 gap-10">
					<div className="flex flex-col col-span-2 gap-4">
						<div className="flex justify-between md:grid md:grid-cols-2 md:gap-5">
							{/* Left: Number '03' on mobile, but on desktop it's Title + Description */}
							<span className="text-base-bold md:hidden">03</span>

							<div className="hidden md:flex flex-col gap-6">
								<h2 className="text-base-bold md:text-base-bold">
									Our Expertise
								</h2>
								<div className="flex flex-col gap-6 text-xs-medium text-text-secondary md:text-sm-medium">
									<p>
										We believe brands should go beyond
										aesthetics and create genuine
										connections. That’s why our process
										combines creativity with strategy.
									</p>
									<p>
										Our team focuses on innovation and,
										partnering with clients to develop
										identities and digital products that
										works.
									</p>
								</div>
							</div>

							{/* Right: Title on mobile, but on desktop it's Number '03' */}
							<div className="grid gap-4 md:hidden">
								<p className="text-xs-bold">Our Expertise</p>
							</div>

							<span className="hidden md:block text-5xl-reg text-right font-normal">
								03
							</span>
						</div>

						{/* Mobile Description */}
						<div className="flex flex-col gap-6 text-xs-medium text-text-secondary md:hidden">
							<p>
								We believe brands should go beyond aesthetics
								and create genuine connections. That’s why our
								process combines creativity with strategy.
							</p>
							<p>
								Our team focuses on innovation and, partnering
								with clients to develop identities and digital
								products that works.
							</p>
						</div>

						{/* Expertise List */}
						<div className="flex flex-col w-full mt-6">
							{/* Item A */}
							<div className="grid grid-cols-2 gap-5 py-12 border-t border-border">
								{/* Left Column (Desktop & Mobile combined layout) */}
								<div className="col-span-2 md:col-span-1 flex gap-6 md:gap-7">
									<span className="text-6xl md:text-7xl font-light text-text-acsent leading-none">
										a
									</span>
									<div className="flex flex-col gap-4">
										<h3 className="text-base-bold text-text-primary ">
											Creativity First
										</h3>
										{/* Desktop Lists (Two columns side-by-side) */}
										<div className="hidden md:flex gap-4 text-sm-medium text-text-secondary whitespace-nowrap">
											<ul className="flex flex-col gap-2 list-none">
												<li>• Design Direction</li>
												<li>• Art Direction</li>
												<li>• Product UI/UX</li>
											</ul>
											<ul className="flex flex-col gap-2 list-none">
												<li>• Motion Design</li>
												<li>• Visual Storytelling</li>
											</ul>
										</div>
										{/* Mobile List (Single column) */}
										<ul className="text-xs-medium text-text-secondary flex flex-col gap-2 list-none px-2 md:hidden">
											<li>• Design Direction</li>
											<li>• Art Direction</li>
											<li>• Product UI/UX</li>
											<li>• Motion Design</li>
											<li>• Visual Storytelling</li>
										</ul>
									</div>
								</div>

								{/* Right Column (Desktop only gray placeholder box) */}
								<div className="hidden md:flex items-center justify-end pr-10">
									<div className="w-[100px] h-[120px] bg-[#EAEAEA]" />
								</div>
							</div>

							{/* Item B */}
							<div className="grid grid-cols-2 gap-5 py-12 border-t border-border">
								{/* Left Column (Desktop & Mobile combined layout) */}
								<div className="col-span-2 md:col-span-1 flex gap-6 md:gap-7">
									<span className="text-6xl md:text-7xl font-light text-text-acsent leading-none">
										b
									</span>
									<div className="flex flex-col gap-4">
										<h3 className="text-base-bold text-text-primary ">
											Web Development
										</h3>
										{/* Desktop Lists (Two columns side-by-side) */}
										<div className="hidden md:flex gap-4 text-sm-medium text-text-secondary whitespace-nowrap">
											<ul className="flex flex-col gap-2 list-none">
												<li>• Design Direction</li>
												<li>• Art Direction</li>
												<li>• Product UI/UX</li>
											</ul>
											<ul className="flex flex-col gap-2 list-none">
												<li>• Motion Design</li>
												<li>• Visual Storytelling</li>
											</ul>
										</div>
										{/* Mobile List (Single column) */}
										<ul className="text-xs-medium text-text-secondary flex flex-col gap-2 list-none px-2 md:hidden">
											<li>• Design Direction</li>
											<li>• Art Direction</li>
											<li>• Product UI/UX</li>
											<li>• Motion Design</li>
											<li>• Visual Storytelling</li>
										</ul>
									</div>
								</div>

								{/* Right Column (Desktop only gray placeholder box) */}
								<div className="hidden md:flex items-center justify-end pr-10">
									<div className="w-[48px] h-[48px] bg-[#EAEAEA]" />
								</div>
							</div>

							{/* Item C */}
							<div className="grid grid-cols-2 gap-5 py-12 border-t border-b border-border">
								{/* Left Column (Desktop & Mobile combined layout) */}
								<div className="col-span-2 md:col-span-1 flex gap-6 md:gap-7">
									<span className="text-6xl md:text-7xl font-light text-text-acsent leading-none">
										C
									</span>
									<div className="flex flex-col gap-4">
										<h3 className="text-base-bold text-text-primary ">
											Strategy & Execution
										</h3>
										{/* Desktop Lists (Two columns side-by-side) */}
										<div className="hidden md:flex gap-4 text-sm-medium text-text-secondary whitespace-nowrap">
											<ul className="flex flex-col gap-2 list-none">
												<li>• Design Direction</li>
												<li>• Art Direction</li>
												<li>• Product UI/UX</li>
											</ul>
											<ul className="flex flex-col gap-2 list-none">
												<li>• Motion Design</li>
												<li>• Visual Storytelling</li>
											</ul>
										</div>
										{/* Mobile List (Single column) */}
										<ul className="text-xs-medium text-text-secondary flex flex-col gap-2 list-none px-2 md:hidden">
											<li>• Design Direction</li>
											<li>• Art Direction</li>
											<li>• Product UI/UX</li>
											<li>• Motion Design</li>
											<li>• Visual Storytelling</li>
										</ul>
									</div>
								</div>

								{/* Right Column (Desktop only gray placeholder box) */}
								<div className="hidden md:flex items-center justify-end pr-10">
									<div className="w-[100px] h-[100px] bg-[#EAEAEA]" />
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Desktop Layout (lg and above) */}
				<div className="hidden lg:grid w-full border-b border-border grid-cols-4 py-20 relative">
					{/* Grid Lines Overlay */}
					<div className="absolute inset-0 grid grid-cols-4 pointer-events-none z-0">
						<div className="border-r border-border" />
						<div className="border-r border-border" />
						<div className="border-r border-border" />
						<div />
					</div>

					{/* Column 1 */}
					<div className="pl-12 pr-12 flex flex-col justify-between min-h-[560px] relative z-10">
						<span className="text-5xl-reg">03</span>
						<div className="relative w-full h-48 select-none">
							<div className="absolute left-0 bottom-24 w-24 h-24 bg-[#EAEAEA]" />
							<div className="absolute left-28 bottom-16 w-20 h-20 bg-[#EAEAEA]" />
							<div className="absolute left-0 bottom-0 w-16 h-16 bg-[#EAEAEA]" />
						</div>
					</div>

					{/* Column 2 */}
					<div className="pl-12 pr-12 flex flex-col justify-between min-h-[560px] relative z-10">
						<h3 className="text-base-bold text-text-primary pt-3">
							Our Expertise
						</h3>
						<div className="flex flex-col gap-4">
							<span className="text-6xl md:text-7xl font-light text-text-acsent leading-none">
								a
							</span>
							<div className="flex flex-col gap-4">
								<h3 className="text-base-bold text-text-primary">
									Creativity First
								</h3>
								<ul className="text-sm-medium text-text-secondary flex flex-col gap-2 list-none">
									<li>• Design Direction</li>
									<li>• Art Direction</li>
									<li>• Product UI/UX</li>
									<li>• Motion Design</li>
									<li>• Visual Storytelling</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Column 3 */}
					<div className="pl-12 pr-12 flex flex-col justify-between min-h-[560px] relative z-10">
						<p className="text-sm-medium text-text-secondary pt-3 max-w-[325px]">
							We believe brands should go beyond aesthetics and
							create genuine connections. That’s why our process
							combines creativity with strategy.
						</p>
						<div className="flex flex-col gap-4">
							<span className="text-6xl md:text-7xl font-light text-text-acsent leading-none">
								b
							</span>
							<div className="flex flex-col gap-4">
								<h3 className="text-base-bold text-text-primary">
									Web Development
								</h3>
								<ul className="text-sm-medium text-text-secondary flex flex-col gap-2 list-none">
									<li>• Design Direction</li>
									<li>• Art Direction</li>
									<li>• Product UI/UX</li>
									<li>• Motion Design</li>
									<li>• Visual Storytelling</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Column 4 */}
					<div className="pl-12 pr-12 flex flex-col justify-between min-h-[560px] relative z-10">
						<div className="relative w-full h-48 select-none">
							<div className="absolute right-28 top-0 w-16 h-16 bg-[#EAEAEA]" />
							<div className="absolute right-0 top-0 w-24 h-24 bg-[#EAEAEA]" />
							<div className="absolute right-0 top-28 w-16 h-16 bg-[#EAEAEA]" />
						</div>
						<div className="flex flex-col gap-4">
							<span className="text-6xl md:text-7xl font-light text-text-acsent leading-none">
								c
							</span>
							<div className="flex flex-col gap-4">
								<h3 className="text-base-bold text-text-primary">
									Strategy & Execution
								</h3>
								<ul className="text-sm-medium text-text-secondary flex flex-col gap-2 list-none">
									<li>• Design Direction</li>
									<li>• Art Direction</li>
									<li>• Product UI/UX</li>
									<li>• Motion Design</li>
									<li>• Visual Storytelling</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				{/* Section 04: Cases */}
				{/* Mobile & Tablet Layout */}
				<div className="lg:hidden relative w-full border-b border-border py-20 px-5 grid grid-cols-2 gap-10">
					<div className="flex flex-col col-span-2 gap-4">
						<div className="flex justify-between md:grid md:grid-cols-2 md:gap-5">
							<span className="text-base-bold md:text-5xl-reg">
								04
							</span>
							<div className="grid gap-4">
								<p className="text-xs-bold md:text-base-bold">
									Cases
								</p>
								<div className="hidden flex-col gap-6 text-xs-medium text-text-secondary md:flex md:text-sm-medium">
									<p>
										Highlights of our journey, captured
										through <br /> moments of recognition.
									</p>
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-6 text-xs-medium text-text-secondary md:hidden">
							<p>
								We are a multidisciplinary design agency <br />
								committed to crafting impactful digital
								experience.
							</p>
						</div>

						{/* Cases Grid */}
						<div className="grid grid-cols-2 gap-5  w-full mt-6">
							{brandLogos.map((logo, index) => (
								<img
									key={index}
									src={logo}
									alt=""
									className="w-full h-full object-cover"
								/>
							))}
						</div>
					</div>
				</div>

				{/* Desktop Layout (lg and above) */}
				<div className="hidden lg:grid w-full border-b border-border grid-cols-4 py-20 relative">
					{/* Grid Lines Overlay */}
					<div className="absolute inset-0 grid grid-cols-4 pointer-events-none z-0">
						<div className="border-r border-border" />
						<div className="border-r border-border" />
						<div className="border-r border-border" />
						<div />
					</div>

					{/* Header Row */}
					<div className="pl-12 pr-12 relative z-10">
						<span className="text-5xl-reg">04</span>
					</div>
					<div className="pl-12 pr-12 relative z-10">
						<h3 className="text-base-bold text-text-primary pt-3">
							Cases
						</h3>
					</div>
					<div className="pl-12 pr-12 relative z-10">
						<p className="text-sm-medium text-text-secondary pt-3 max-w-[325px]">
							Highlights of our journey, captured through moments
							of recognition.
						</p>
					</div>
					<div className="pl-12 pr-12 relative z-10">
						<div className="h-6 pt-3" /> {/* Spacer */}
					</div>

					{/* Cards Row */}
					{/* Column 1 */}
					<div className="pl-12 pr-12 mt-16 flex flex-col gap-10 relative z-10">
						<img
							src={brandLogos[0]}
							alt="Case 1"
							className="w-full h-auto object-cover select-none"
						/>
						<img
							src={brandLogos[4]}
							alt="Case 5"
							className="w-full h-auto object-cover select-none"
						/>
					</div>

					{/* Column 2 */}
					<div className="pl-12 pr-12 mt-16 flex flex-col gap-10 relative z-10">
						<img
							src={brandLogos[1]}
							alt="Case 2"
							className="w-full h-auto object-cover select-none"
						/>
						<img
							src={brandLogos[5]}
							alt="Case 6"
							className="w-full h-auto object-cover select-none"
						/>
					</div>

					{/* Column 3 */}
					<div className="pl-12 pr-12 mt-16 flex flex-col gap-10 relative z-10">
						<img
							src={brandLogos[2]}
							alt="Case 3"
							className="w-full h-auto object-cover select-none"
						/>
						<img
							src={brandLogos[6]}
							alt="Case 7"
							className="w-full h-auto object-cover select-none"
						/>
					</div>

					{/* Column 4 */}
					<div className="pl-12 pr-12 mt-16 flex flex-col gap-10 relative z-10">
						<img
							src={brandLogos[3]}
							alt="Case 4"
							className="w-full h-auto object-cover select-none"
						/>
						<img
							src={brandLogos[7]}
							alt="Case 8"
							className="w-full h-auto object-cover select-none"
						/>
					</div>
				</div>

				{/* Call to Action Section */}
				<div className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden border-b border-border">
					{/* Landscape Background */}
					<div className="absolute inset-0 z-0">
						<img
							src={backgroud}
							className="w-full h-full object-cover brightness-75"
							alt="CTA Background"
						/>
					</div>

					{/* Center Content */}
					<div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
						<h2 className="text-3xl md:text-5xl text-white tracking-tight drop-shadow-md  md:w-max leading-[1.38]">
							Let's make <br className="md:hidden" /> something
							bigger
						</h2>
						<button className="flex items-center">
							<span className="font-urbanist text-base font-bold leading-[1.38] bg-black pl-6 pr-10 py-4 rounded-full text-white ">
								Get Inspired
							</span>
							<span className="size-13 -ml-8 rounded-full bg-white text-black flex items-center justify-center text-sm font-bold">
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

				{/* Section 05: Journal */}
				{/* Mobile & Tablet Layout */}
				<div className="lg:hidden relative w-full py-20 px-5 grid grid-cols-2 gap-10">
					<div className="flex flex-col col-span-2 gap-4">
						<div className="flex justify-between md:grid md:grid-cols-2 md:gap-5">
							<span className="text-base-bold md:text-5xl-reg">
								05
							</span>
							<div className="grid gap-4">
								<p className="text-xs-bold md:text-base-bold">
									Journal
								</p>
								<div className="hidden flex-col gap-6 text-xs-medium text-text-secondary md:flex md:text-sm-medium">
									<p>
										Highlights of our journey, captured
										through <br />
										moments of recognition.
									</p>
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-6 text-xs-medium text-text-secondary md:hidden">
							<p>
								Highlights of our journey, captured through{" "}
								<br />
								moments of recognition.
							</p>
						</div>

						{/* Journal Blog Posts */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5 w-full z-10 mt-6">
							{/* Post 1 */}
							<div className="flex flex-col gap-4 group cursor-pointer w-full">
								{/* Image Skeleton */}
								<div className="w-full aspect-video md:aspect-[3/4] bg-neutral-200 border border-border flex items-center justify-center relative overflow-hidden transition-all group-hover:brightness-95">
									<img
										src={JournalImage}
										alt=""
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="flex flex-col gap-2 mt-2">
									<h3 className="text-xs-bold md:text-base-bold">
										Building for Attention Spans Under 3
										Seconds
									</h3>
									<div className="flex items-center gap-2 text-xs-medium md:text-sm-medium text-text-secondary">
										<span>3mins to read</span>
										<span>/</span>
										<span>Aug 17, 2025</span>
									</div>
								</div>
							</div>

							{/* Post 2 */}
							<div className="flex flex-col gap-4 group cursor-pointer w-full">
								{/* Image Skeleton */}
								<div className="w-full aspect-video md:aspect-[4/3] bg-neutral-200 border border-border flex items-center justify-center relative overflow-hidden transition-all group-hover:brightness-95">
									<img
										src={JournalImage2}
										alt=""
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="flex flex-col gap-2 mt-2">
									<h3 className="text-xs-bold md:text-base-bold">
										Why Web Designers Should Think Like
										Product People
									</h3>
									<div className="flex items-center gap-2 text-xs-medium md:text-sm-medium text-text-secondary">
										<span>3mins to read</span>
										<span>/</span>
										<span>Aug 17, 2025</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Desktop Layout (lg and above) */}
				<div className="hidden lg:grid w-full border-b border-border grid-cols-4 py-20 relative">
					{/* Grid Lines Overlay */}
					<div className="absolute inset-0 grid grid-cols-4 pointer-events-none z-0">
						<div className="border-r border-border" />
						<div className="border-r border-border" />
						<div className="border-r border-border" />
						<div />
					</div>

					{/* Header Row */}
					<div className="pl-12 pr-12 relative z-10">
						<span className="text-5xl-reg">05</span>
					</div>
					<div className="pl-12 pr-12 relative z-10">
						<h3 className="text-base-bold text-text-primary pt-3">
							Journal
						</h3>
					</div>
					<div className="pl-12 pr-12 relative z-10">
						<p className="text-sm-medium text-text-secondary pt-3 max-w-[325px]">
							Highlights of our journey, captured through moments
							of recognition.
						</p>
					</div>
					<div className="pl-12 pr-12 relative z-10"></div>

					{/* Posts Row */}
					{/* Post 1 */}
					<div className="col-span-2 pl-12 pr-12 flex flex-col gap-4 group cursor-pointer mt-16 relative z-10">
						<div className="w-full aspect-[3/4] bg-neutral-200 border border-border flex items-center justify-center relative overflow-hidden transition-all group-hover:brightness-95">
							<img
								src={JournalImage}
								alt="Journal 1"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="flex justify-between items-start gap-4 mt-2">
							<h3 className="text-base-bold text-text-primary">
								Building for Attention Spans Under 3 Seconds
							</h3>
							<div className="flex items-center gap-2 text-sm-medium text-text-secondary shrink-0 pt-0.5">
								<span>3mins to read</span>
								<span>/</span>
								<span>Aug 17, 2025</span>
							</div>
						</div>
					</div>

					{/* Post 2 */}
					<div className="col-span-2 pl-12 pr-12 flex flex-col gap-4 group cursor-pointer mt-16 relative z-10">
						<div className="w-full aspect-[4/3] bg-neutral-200 border border-border flex items-center justify-center relative overflow-hidden transition-all group-hover:brightness-95">
							<img
								src={JournalImage2}
								alt="Journal 2"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="flex justify-between items-start gap-4 mt-2">
							<h3 className="text-base-bold text-text-primary">
								Why Web Designers Should Think Like Product
								People
							</h3>
							<div className="flex items-center gap-2 text-sm-medium text-text-secondary shrink-0 pt-0.5">
								<span>3mins to read</span>
								<span>/</span>
								<span>Aug 17, 2025</span>
							</div>
						</div>
					</div>
				</div>

				<div className="bg-[#D9D9D9] h-24 w-full" />
			</div>

			{/* Footer Component */}
			<Footer />
		</div>
	);
}

export default landing;
