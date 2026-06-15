import ImageDekstop from '../../assets//images/Rectangle 17935.png'

function WhoWeAreSection() {
	return (
		<>
			{/* Section 01: Who we are */}
			{/* Mobile and Tablet Layout */}
			<div className="lg:hidden relative w-full border-b border-border py-20 px-5 grid grid-cols-2 gap-10">
				{/* Left Column */}
				<div className="flex flex-col col-span-2 gap-4">
					<div className="flex justify-between md:grid md:grid-cols-2 md:gap-5">
						<span className="text-base-bold md:text-5xl-reg" data-anim="sec-title-num">01</span>
						<div className="grid gap-4">
							<p className="text-xs-bold md:text-base-bold" data-anim="sec-title-text">Who we are</p>
							<div className="hidden flex-col gap-6 text-xs-medium text-text-secondary md:flex md:text-sm-medium" data-anim="sec-title-desc">
								<p>
									We are a multidisciplinary design agency <br />
									committed to crafting impactful digital experience.
								</p>
								<p>
									Our team focuses on innovation and, partnering <br />
									with clients to develop identities and digital <br />
									products that works.
								</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-6 text-xs-medium text-text-secondary md:hidden" data-anim="sec-title-desc">
						<p>
							We are a multidisciplinary design agency <br />
							committed to crafting impactful digital experience.
						</p>
						<p>
							Our team focuses on innovation and, partnering <br />
							with clients to develop identities and digital <br />
							products that works.
						</p>
					</div>
				</div>
			</div>

			{/* Desktop Layout (lg and above) */}
			<div className="hidden lg:grid w-full grid-cols-4 gap-5 px-8 py-20 relative">
				{/* Column 1: Number */}
				<div className="relative z-10" data-anim="num">
					<span className="text-5xl-reg">01</span>
				</div>

				{/* Column 2: Title */}
				<div className="relative z-10" data-anim="col">
					<h3 className="text-base-bold text-text-primary">Who we are</h3>
				</div>

				{/* Column 3: Paragraphs */}
				<div className="flex flex-col gap-6 text-sm-medium text-text-secondary relative z-10 px-4" data-anim="col">
					<p>
						We are a multidisciplinary design agency 
						committed to crafting impactful digital experience.
					</p>
					<p>
						Our team focuses on innovation and, partnering 
						with clients to develop identities and digital 
						products that works.
					</p>
				</div>

				{/* Column 4: Image */}
				<div className="flex items-start justify-center relative z-10 overflow-hidden" data-anim="img">
					<img src={ImageDekstop} alt="" className="w-full h-full object-cover" />
				</div>
			</div>
		</>
	);
}

export default WhoWeAreSection;
