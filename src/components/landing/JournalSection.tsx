import JournalImage from "../../assets/images/Rectangle 17977.png";
import JournalImage2 from "../../assets/images/Rectangle 17978.png";

function JournalSection() {
	return (
		<>
			{/* Section 05: Journal */}
			{/* Mobile & Tablet Layout */}
			<div className="lg:hidden relative w-full py-20 px-5 grid grid-cols-2 gap-10">
				<div className="flex flex-col col-span-2 gap-4">
					<div className="flex justify-between md:grid md:grid-cols-2 md:gap-5">
						<span className="text-base-bold md:text-5xl-reg" data-anim="sec-title-num">05</span>
						<div className="grid gap-4">
							<p className="text-xs-bold md:text-base-bold" data-anim="sec-title-text">Journal</p>
							<div className="hidden flex-col gap-6 text-xs-medium text-text-secondary md:flex md:text-sm-medium" data-anim="sec-title-desc">
								<p>
									Highlights of our journey, captured through <br />
									moments of recognition.
								</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-6 text-xs-medium text-text-secondary md:hidden" data-anim="sec-title-desc">
						<p>
							Highlights of our journey, captured through <br />
							moments of recognition.
						</p>
					</div>

					{/* Journal Blog Posts */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5 w-full z-10 mt-6">
						{/* Post 1 */}
						<div className="flex flex-col gap-4 group cursor-pointer w-full" data-anim="journal-post-mobile">
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
									Building for Attention Spans Under 3 Seconds
								</h3>
								<div className="flex items-center gap-2 text-xs-medium md:text-sm-medium text-text-secondary">
									<span>3mins to read</span>
									<span>/</span>
									<span>Aug 17, 2025</span>
								</div>
							</div>
						</div>

						{/* Post 2 */}
						<div className="flex flex-col gap-4 group cursor-pointer w-full" data-anim="journal-post-mobile">
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
									Why Web Designers Should Think Like Product People
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
			<div className="hidden lg:grid w-full grid-cols-4 gap-5 px-8 py-20 relative">
				{/* Grid Lines Overlay */}
				

				{/* Header Row */}
				<div className="relative z-10" data-anim="sec-title-num">
					<span className="text-5xl-reg">05</span>
				</div>
				<div className="relative z-10" data-anim="sec-title-text">
					<h3 className="text-base-bold text-text-primary pt-3">Journal</h3>
				</div>
				<div className="relative z-10" data-anim="sec-title-desc">
					<p className="text-sm-medium text-text-primary pt-3 max-w-[325px] px-4">
						Highlights of our journey, captured through moments of recognition.
					</p>
				</div>
				<div className="relative z-10"></div>

				{/* Posts Row */}
				{/* Post 1 */}
				<div className="col-span-2 flex flex-col gap-4 group cursor-pointer mt-16 relative z-10" data-anim="post">
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
				<div className="col-span-2 flex flex-col gap-4 group cursor-pointer mt-16 relative z-10" data-anim="post">
					<div className="w-full aspect-[4/3] bg-neutral-200 border border-border flex items-center justify-center relative overflow-hidden transition-all group-hover:brightness-95">
						<img
							src={JournalImage2}
							alt="Journal 2"
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="flex justify-between items-start gap-4 mt-2">
						<h3 className="text-base-bold text-text-primary">
							Why Web Designers Should Think Like Product People
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
		</>
	);
}

export default JournalSection;
