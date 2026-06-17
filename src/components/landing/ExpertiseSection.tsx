function ExpertiseSection() {
	return (
		<>
			{/* Section 03: Our Expertise */}
			{/* Mobile & Tablet Layout */}
			<div className="lg:hidden relative w-full py-20 px-5 grid grid-cols-2 gap-10">
				<div className="flex flex-col col-span-2 gap-4">
					<div className="flex justify-between md:grid md:grid-cols-2 md:gap-5">
						{/* Left: Number '03' on mobile, but on desktop it's Title + Description */}
						<span className="text-base-bold md:hidden" data-anim="sec-title-num">03</span>

						<div className="hidden md:flex flex-col gap-6">
							<h2 className="text-base-bold md:text-base-bold" data-anim="sec-title-text">
								Our Expertise
							</h2>
							<div className="flex flex-col gap-6 text-xs-medium text-text-secondary md:text-sm-medium" data-anim="sec-title-desc">
								<p>
									We believe brands should go beyond
									aesthetics and create genuine connections.
									That’s why our process combines creativity
									with strategy.
								</p>
								<p>
									Our team focuses on innovation and,
									partnering with clients to develop
									identities and digital products that works.
								</p>
							</div>
						</div>

						{/* Right: Title on mobile, but on desktop it's Number '03' */}
						<div className="grid gap-4 md:hidden">
							<p className="text-xs-bold" data-anim="sec-title-text">Our Expertise</p>
						</div>

						<span className="hidden md:block text-5xl-reg text-right font-normal" data-anim="sec-title-num">
							03
						</span>
					</div>

					{/* Mobile Description */}
					<div className="flex flex-col gap-6 text-xs-medium text-text-secondary md:hidden" data-anim="sec-title-desc">
						<p>
							We believe brands should go beyond aesthetics and
							create genuine connections. That’s why our process
							combines creativity with strategy.
						</p>
						<p>
							Our team focuses on innovation and, partnering with
							clients to develop identities and digital products
							that works.
						</p>
					</div>

					{/* Expertise List */}
					<div className="flex flex-col w-full mt-6">
						{/* Item A */}
						<div className="grid grid-cols-2 gap-5 py-12 border-t border-border">
							{/* Mobile Layout: Letter in Col 1, Title+List in Col 2 */}
							<div className="md:hidden col-span-1 flex justify-start">
								<span className="text-6xl font-light text-text-acsent leading-none">
									a
								</span>
							</div>
							<div className="md:hidden col-span-1 flex flex-col gap-4">
								<h3 className="text-base-bold text-text-primary">
									Creativity First
								</h3>
								<ul className="text-xs-medium text-text-secondary flex flex-col gap-2 list-none px-2">
									<li>• Design Direction</li>
									<li>• Art Direction</li>
									<li>• Product UI/UX</li>
									<li>• Motion Design</li>
									<li>• Visual Storytelling</li>
								</ul>
							</div>

							{/* Tablet Layout (md and up) */}
							<div className="hidden md:flex col-span-1 gap-7">
								<span className="text-7xl font-light text-text-acsent leading-none">
									a
								</span>
								<div className="flex flex-col gap-4">
									<h3 className="text-base-bold text-text-primary">
										Creativity First
									</h3>
									<div className="flex gap-4 text-sm-medium text-text-secondary flex-wrap">
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
								</div>
							</div>
							<div className="hidden md:flex items-center justify-end pr-10 col-span-1">
								<div className="w-[100px] h-[120px] bg-[#EAEAEA]" />
							</div>
						</div>

						{/* Item B */}
						<div className="grid grid-cols-2 gap-5 py-12 border-t border-border">
							{/* Mobile Layout: Letter in Col 1, Title+List in Col 2 */}
							<div className="md:hidden col-span-1 flex justify-start">
								<span className="text-6xl font-light text-text-acsent leading-none">
									b
								</span>
							</div>
							<div className="md:hidden col-span-1 flex flex-col gap-4">
								<h3 className="text-base-bold text-text-primary">
									Web Development
								</h3>
								<ul className="text-xs-medium text-text-secondary flex flex-col gap-2 list-none px-2">
									<li>• Design Direction</li>
									<li>• Art Direction</li>
									<li>• Product UI/UX</li>
									<li>• Motion Design</li>
									<li>• Visual Storytelling</li>
								</ul>
							</div>

							{/* Tablet Layout (md and up) */}
							<div className="hidden md:flex col-span-1 gap-7">
								<span className="text-7xl font-light text-text-acsent leading-none">
									b
								</span>
								<div className="flex flex-col gap-4">
									<h3 className="text-base-bold text-text-primary">
										Web Development
									</h3>
									<div className="flex gap-4 text-sm-medium text-text-secondary flex-wrap">
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
								</div>
							</div>
							<div className="hidden md:flex items-center justify-end pr-10 col-span-1">
								<div className="w-[48px] h-[48px] bg-[#EAEAEA]" />
							</div>
						</div>

						{/* Item C */}
						<div className="grid grid-cols-2 gap-5 py-12 border-t border-b border-border ">
							{/* Mobile Layout: Letter in Col 1, Title+List in Col 2 */}
							<div className="md:hidden col-span-1 flex justify-start">
								<span className="text-6xl font-light text-text-acsent leading-none">
									C
								</span>
							</div>
							<div className="md:hidden col-span-1 flex flex-col gap-4">
								<h3 className="text-base-bold text-text-primary">
									Strategy & Execution
								</h3>
								<ul className="text-xs-medium text-text-secondary flex flex-col gap-2 list-none px-2">
									<li>• Design Direction</li>
									<li>• Art Direction</li>
									<li>• Product UI/UX</li>
									<li>• Motion Design</li>
									<li>• Visual Storytelling</li>
								</ul>
							</div>

							{/* Tablet Layout (md and up) */}
							<div className="hidden md:flex col-span-1 gap-7">
								<span className="text-7xl font-light text-text-acsent leading-none">
									C
								</span>
								<div className="flex flex-col gap-4">
									<h3 className="text-base-bold text-text-primary">
										Strategy & Execution
									</h3>
									<div className="flex gap-4 text-sm-medium text-text-secondary flex-wrap">
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
								</div>
							</div>
							<div className="hidden md:flex items-center justify-end pr-10 col-span-1">
								<div className="w-[100px] h-[100px] bg-[#EAEAEA]" />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Desktop Layout (lg and above) */}
			<div className="hidden lg:grid w-full grid-cols-4 gap-5 px-8 py-20 relative">
				{/* Grid Lines Overlay */}

				{/* Column 1 */}
				<div className="flex flex-col justify-between min-h-[560px] relative z-10">
					<span className="text-5xl-reg" data-anim="sec-title-num">03</span>
					<div className="relative w-full h-48 select-none">
						<div className="absolute left-0 bottom-24 w-24 h-24 bg-[#EAEAEA]" />
						<div className="absolute left-28 bottom-16 w-20 h-20 bg-[#EAEAEA]" />
						<div className="absolute left-0 bottom-0 w-16 h-16 bg-[#EAEAEA]" />
					</div>
				</div>

				{/* Column 2 */}
				<div className="flex flex-col justify-between min-h-[560px] relative z-10 px-4">
					<h3 className="text-base-bold text-text-primary pt-3" data-anim="sec-title-text">
						Our Expertise
					</h3>
					<div className="flex flex-col gap-4">
						<span className="text-6xl md:text-7xl font-light text-text-acsent leading-none" data-anim="letter">
							a
						</span>
						<div className="flex flex-col gap-4">
							<h3 className="text-base-bold text-text-primary">
								Creativity First
							</h3>
							<ul className="text-sm-medium text-text-secondary flex flex-col gap-2 list-none">
								<li data-anim="list">• Design Direction</li>
								<li data-anim="list">• Art Direction</li>
								<li data-anim="list">• Product UI/UX</li>
								<li data-anim="list">• Motion Design</li>
								<li data-anim="list">• Visual Storytelling</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Column 3 */}
				<div className="flex flex-col justify-between min-h-[560px] relative z-10">
					<p className="text-sm-medium pt-3 max-w-[325px] px-4 text-text-primary" data-anim="sec-title-desc">
						We believe brands should go beyond aesthetics and create
						genuine connections. That’s why our process combines
						creativity with strategy.
					</p>
					<div className="flex flex-col gap-4 px-4">
						<span className="text-6xl md:text-7xl font-light text-text-acsent leading-none" data-anim="letter">
							b
						</span>
						<div className="flex flex-col gap-4">
							<h3 className="text-base-bold text-text-primary">
								Web Development
							</h3>
							<ul className="text-sm-medium text-text-secondary flex flex-col gap-2 list-none">
								<li data-anim="list">• Design Direction</li>
								<li data-anim="list">• Art Direction</li>
								<li data-anim="list">• Product UI/UX</li>
								<li data-anim="list">• Motion Design</li>
								<li data-anim="list">• Visual Storytelling</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Column 4 */}
				<div className="flex flex-col justify-between min-h-[560px] relative z-10">
					<div className="relative w-full h-48 select-none">
						<div className="absolute right-28 top-0 w-16 h-16 bg-[#EAEAEA]" />
						<div className="absolute right-0 top-0 w-24 h-24 bg-[#EAEAEA]" />
						<div className="absolute right-0 top-28 w-16 h-16 bg-[#EAEAEA]" />
					</div>
					<div className="flex flex-col gap-4 px-4">
						<span className="text-6xl md:text-7xl font-light text-text-acsent leading-none" data-anim="letter">
							c
						</span>
						<div className="flex flex-col gap-4">
							<h3 className="text-base-bold text-text-primary">
								Strategy & Execution
							</h3>
							<ul className="text-sm-medium text-text-secondary flex flex-col gap-2 list-none">
								<li data-anim="list">• Design Direction</li>
								<li data-anim="list">• Art Direction</li>
								<li data-anim="list">• Product UI/UX</li>
								<li data-anim="list">• Motion Design</li>
								<li data-anim="list">• Visual Storytelling</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ExpertiseSection;
