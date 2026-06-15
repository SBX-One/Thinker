import logoBrand1 from "../../assets/svg/Frame 1984079081.svg";
import logoBrand2 from "../../assets/svg/Frame 1984079082.svg";
import logoBrand3 from "../../assets/svg/Frame 1984079083.svg";
import logoBrand4 from "../../assets/svg/Frame 1984079084.svg";
import logoBrand5 from "../../assets/svg/Frame 1984079086.svg";
import logoBrand6 from "../../assets/svg/Frame 1984079088.svg";
import logoBrand7 from "../../assets/svg/Frame 1984079089.svg";
import logoBrand8 from "../../assets/svg/Frame 1984079087.svg";

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

function CasesSection() {
	return (
		<>
			{/* Section 04: Cases */}
			{/* Mobile & Tablet Layout */}
			<div className="lg:hidden relative w-full border-b border-border py-20 px-5 grid grid-cols-2 gap-10">
				<div className="flex flex-col col-span-2 gap-4">
					<div className="flex justify-between md:grid md:grid-cols-2 md:gap-5">
						<span className="text-base-bold md:text-5xl-reg" data-anim="sec-title-num">04</span>
						<div className="grid gap-4">
							<p className="text-xs-bold md:text-base-bold" data-anim="sec-title-text">Cases</p>
							<div className="hidden flex-col gap-6 text-xs-medium text-text-secondary md:flex md:text-sm-medium" data-anim="sec-title-desc">
								<p>
									Highlights of our journey, captured through <br /> moments of
									recognition.
								</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-6 text-xs-medium text-text-secondary md:hidden" data-anim="sec-title-desc">
						<p>
							We are a multidisciplinary design agency <br />
							committed to crafting impactful digital experience.
						</p>
					</div>

					{/* Cases Grid */}
					<div className="grid grid-cols-2 gap-5 w-full mt-6">
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
			<div className="hidden lg:grid w-full grid-cols-4 gap-5 px-8 py-20 relative">
				{/* Grid Lines Overlay */}
				

				{/* Header Row */}
				<div className="relative z-10" data-anim="sec-title-num">
					<span className="text-5xl-reg">04</span>
				</div>
				<div className="relative z-10" data-anim="sec-title-text">
					<h3 className="text-base-bold text-text-primary pt-3">Cases</h3>
				</div>
				<div className="relative z-10" data-anim="sec-title-desc">
					<p className="text-sm-medium text-text-primary pt-3 max-w-[325px] px-4">
						Highlights of our journey, captured through moments of recognition.
					</p>
				</div>
				<div className="relative z-10">
					<div className="h-6 pt-3" /> {/* Spacer */}
				</div>

				{/* Cards Row */}
				{/* Column 1 */}
				<div className="mt-16 flex flex-col gap-10 relative z-10">
					<img src={brandLogos[0]} alt="Case 1" className="w-full h-auto object-cover select-none" data-anim="logo" />
					<img src={brandLogos[4]} alt="Case 5" className="w-full h-auto object-cover select-none" data-anim="logo" />
				</div>

				{/* Column 2 */}
				<div className="mt-16 flex flex-col gap-10 relative z-10">
					<img src={brandLogos[1]} alt="Case 2" className="w-full h-auto object-cover select-none" data-anim="logo" />
					<img src={brandLogos[5]} alt="Case 6" className="w-full h-auto object-cover select-none" data-anim="logo" />
				</div>

				{/* Column 3 */}
				<div className="mt-16 flex flex-col gap-10 relative z-10">
					<img src={brandLogos[2]} alt="Case 3" className="w-full h-auto object-cover select-none" data-anim="logo" />
					<img src={brandLogos[6]} alt="Case 7" className="w-full h-auto object-cover select-none" data-anim="logo" />
				</div>

				{/* Column 4 */}
				<div className="mt-16 flex flex-col gap-10 relative z-10">
					<img src={brandLogos[3]} alt="Case 4" className="w-full h-auto object-cover select-none" data-anim="logo" />
					<img src={brandLogos[7]} alt="Case 8" className="w-full h-auto object-cover select-none" data-anim="logo" />
				</div>
			</div>
		</>
	);
}

export default CasesSection;
