import Work1 from "../../assets/images/Rectangle 17936.png";
import Work2 from "../../assets/images/Rectangle 17938.png";
import Work3 from "../../assets/images/Rectangle 17939.png";
import Work4 from "../../assets/images/Rectangle 17940.png";
 
import DesktopWork1 from "../../assets/images/Rectangle 17936-1.png";
import DesktopWork2 from "../../assets/images/Rectangle 17936-2.png";
import DesktopWork3 from "../../assets/images/Rectangle 17936-3.png";
import DesktopWork4 from "../../assets/images/Rectangle 17936-4.png";
import DesktopWork5 from "../../assets/images/Rectangle 17936-5.png";
import DesktopWork6 from "../../assets/images/Rectangle 17936-6.png";
import DesktopWork7 from "../../assets/images/Rectangle 17936-7.png";
import DesktopWork8 from "../../assets/images/Rectangle 17936.png";

function SelectedWorksSection() {
	return (
		<>
			{/* Section 02: Selected Works */}
			{/* Mobile & Tablet Layout */}
			<div className="lg:hidden relative w-full py-20 px-5 grid grid-cols-2 gap-10">
				{/* Left Column */}
				<div className="flex flex-col col-span-2 gap-4">
					<div className="flex justify-between md:grid md:grid-cols-2 md:gap-5">
						<span className="text-base-bold md:text-5xl-reg" data-anim="sec-title-num">02</span>
						<div className="grid gap-4">
							<p className="text-xs-bold md:text-base-bold items-end justify-end flex" data-anim="sec-title-text">Selected Works</p>
							{/* FIX: removed md:-mx-12 negative margin; added overflow-x-auto to prevent overflow */}
							<div className="relative w-full z-10 flex justify-end md:justify-start overflow-x-auto" data-anim="sec-title-desc">
								<div className="flex items-center gap-4 md:gap-8 text-xs-medium md:text-sm-medium">
									<span className="cursor-pointer hover:text-text-primary transition-colors">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
										>
											<path d="M0 0h24v24H0z" fill="none" />
											<g fill="none" fillRule="evenodd">
												<path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
												<path
													fill="currentColor"
													d="M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414z"
												/>
											</g>
										</svg>
									</span>
									<span className="cursor-pointer text-text-primary border-b border-text-primary">Grid</span>
									<span className="cursor-pointer hover:text-text-primary transition-colors">List</span>
									<span className="cursor-pointer hover:text-text-primary transition-colors">Feed</span>
									<span className="cursor-pointer hover:text-text-primary transition-colors">Full-width</span>
									<span className="cursor-pointer hover:text-text-primary transition-colors">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
										>
											<path d="M0 0h24v24H0z" fill="none" />
											<g fill="none" fillRule="evenodd">
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

					{/* Image Grid */}
					<div className="grid mt-8 w-full relative">
						<div className="grid grid-cols-2 w-full gap-5">
							<div className="w-full overflow-hidden bg-background-default hover:opacity-95 transition-opacity" data-anim="sw-mobile-card">
								<img src={Work1} className="w-full h-full object-cover" alt="Selected Work 1" />
							</div>
							<div className="w-full overflow-hidden bg-background-default hover:opacity-95 transition-opacity" data-anim="sw-mobile-card">
								<img src={Work3} className="w-full h-full object-cover" alt="Selected Work 3" />
							</div>
							<div className="w-full overflow-hidden bg-background-default hover:opacity-95 transition-opacity" data-anim="sw-mobile-card">
								<img src={Work2} className="w-full h-full object-cover" alt="Selected Work 2" />
							</div>
							<div className="w-full overflow-hidden bg-background-default hover:opacity-95 transition-opacity" data-anim="sw-mobile-card">
								<img src={Work4} className="w-full h-full object-cover" alt="Selected Work 4" />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Desktop Layout (lg and above) */}
			<div className="hidden lg:grid w-full grid-cols-4 gap-5 px-8 py-20 relative">
				{/* Grid Lines Overlay */}
				

				{/* Header Row */}
				<div className="relative z-10" data-anim="sec-title-num">
					<span className="text-5xl-reg">02</span>
				</div>
				<div className="relative z-10" data-anim="sec-title-text">
					<h3 className="text-base-bold text-text-primary pt-3">Selected Works</h3>
				</div>
				<div className="relative z-10" data-anim="sec-title-desc">
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
				<div className="relative z-10" data-anim="sec-title-desc">
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
				<div className="mt-16 flex flex-col gap-10 relative z-10">
					{/* Item 1 */}
					<div className="flex flex-col gap-3 group cursor-pointer" data-anim="card">
						<div className="w-full aspect-[158/100] bg-background-default overflow-hidden">
							<img
								src={DesktopWork1}
								className="w-full h-full object-cover transition-opacity group-hover:opacity-95"
								alt="Lumine 1"
							/>
						</div>
						<div className="flex justify-between text-xs font-semibold tracking-tight text-text-primary">
							<span>Lumine</span>
							<span className="text-text-secondary">Branding / Web Design</span>
						</div>
					</div>

					{/* Item 5 */}
					<div className="flex flex-col gap-3 group cursor-pointer" data-anim="card">
						<div className="w-full aspect-[158/100] bg-background-default overflow-hidden">
							<img
								src={DesktopWork5}
								className="w-full h-full object-cover transition-opacity group-hover:opacity-95"
								alt="Lumine 5"
							/>
						</div>
						<div className="flex justify-between text-xs font-semibold tracking-tight text-text-primary">
							<span>Lumine</span>
							<span className="text-text-secondary">Branding</span>
						</div>
					</div>
				</div>

				{/* Column 2 */}
				<div className="mt-16 flex flex-col gap-10 relative z-10">
					{/* Item 2 */}
					<div className="flex flex-col gap-3 group cursor-pointer" data-anim="card">
						<div className="w-full aspect-[158/100] bg-background-default overflow-hidden">
							<img
								src={DesktopWork2}
								className="w-full h-full object-cover transition-opacity group-hover:opacity-95"
								alt="Lumine 2"
							/>
						</div>
						<div className="flex justify-between text-xs font-semibold tracking-tight text-text-primary">
							<span>Lumine</span>
							<span className="text-text-secondary">Branding / Web Design</span>
						</div>
					</div>

					{/* Item 6 */}
					<div className="flex flex-col gap-3 group cursor-pointer" data-anim="card">
						<div className="w-full aspect-[158/100] bg-background-default overflow-hidden">
							<img
								src={DesktopWork6}
								className="w-full h-full object-cover transition-opacity group-hover:opacity-95"
								alt="Lumine 6"
							/>
						</div>
						<div className="flex justify-between text-xs font-semibold tracking-tight text-text-primary">
							<span>Lumine</span>
							<span className="text-text-secondary">Branding</span>
						</div>
					</div>
				</div>

				{/* Column 3 */}
				<div className="mt-16 flex flex-col gap-10 relative z-10">
					{/* Item 3 */}
					<div className="flex flex-col gap-3 group cursor-pointer" data-anim="card">
						<div className="w-full aspect-[158/100] bg-background-default overflow-hidden">
							<img
								src={DesktopWork3}
								className="w-full h-full object-cover transition-opacity group-hover:opacity-95"
								alt="Lumine 3"
							/>
						</div>
						<div className="flex justify-between text-xs font-semibold tracking-tight text-text-primary">
							<span>Lumine</span>
							<span className="text-text-secondary">Branding / Web Design</span>
						</div>
					</div>

					{/* Item 7 */}
					<div className="flex flex-col gap-3 group cursor-pointer" data-anim="card">
						<div className="w-full aspect-[158/100] bg-background-default overflow-hidden">
							<img
								src={DesktopWork7}
								className="w-full h-full object-cover transition-opacity group-hover:opacity-95"
								alt="Lumine 7"
							/>
						</div>
						<div className="flex justify-between text-xs font-semibold tracking-tight text-text-primary">
							<span>Lumine</span>
							<span className="text-text-secondary">Branding</span>
						</div>
					</div>
				</div>

				{/* Column 4 */}
				<div className="mt-16 flex flex-col gap-10 relative z-10">
					{/* Item 4 */}
					<div className="flex flex-col gap-3 group cursor-pointer" data-anim="card">
						<div className="w-full aspect-[158/100] bg-background-default overflow-hidden">
							<img
								src={DesktopWork4}
								className="w-full h-full object-cover transition-opacity group-hover:opacity-95"
								alt="Lumine 4"
							/>
						</div>
						<div className="flex justify-between text-xs font-semibold tracking-tight text-text-primary">
							<span>Lumine</span>
							<span className="text-text-secondary">Web Design</span>
						</div>
					</div>

					{/* Item 8 */}
					<div className="flex flex-col gap-3 group cursor-pointer" data-anim="card">
						<div className="w-full aspect-[158/100] bg-background-default overflow-hidden">
							<img
								src={DesktopWork8}
								className="w-full h-full object-cover transition-opacity group-hover:opacity-95"
								alt="Lumine 8"
							/>
						</div>
						<div className="flex justify-between text-xs font-semibold tracking-tight text-text-primary">
							<span>Lumine</span>
							<span className="text-text-secondary">Branding</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default SelectedWorksSection;
