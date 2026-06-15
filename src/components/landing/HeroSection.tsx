import HeroLogo from "../../assets/svg/ThinkerHero.svg";
import HeroBackground from "../../assets/svg/HeroBacground.svg";
import DekstopHeroBackground from "../../assets/svg/dekstopHeroBackgound.svg";

import Work1 from "../../assets/images/Rectangle 17936.png";
import Work2 from "../../assets/images/Rectangle 17938.png";
import Work3 from "../../assets/images/Rectangle 17939.png";
import Work4 from "../../assets/images/Rectangle 17940.png";
import Work5 from "../../assets/images/Rectangle 17936-3.png";
import Work6 from "../../assets/images/Rectangle 17936-4.png";

function HeroSection() {
	return (
		<div className="h-screen relative w-full overflow-hidden lg:h-full bg-background-default">
			<div className="h-full">
				<div className="grid grid-rows-2 h-full w-full z-10 py-20 md:py-10 ">
					<div className="grid justify-between lg:grid-cols-2">
						<div className="grid justify-between">
							<div className="hidden lg:flex relative w-fit h-fit">
								<img src={Work5} className="" alt="" data-anim="heroimg" />
								<img
									src={Work6}
									className="absolute left-1/12 top-1/12"
									alt=""
									data-anim="heroimg"
								/>
							</div>
							<div className="hidden lg:flex border-b-2 border-border h-full w-screen  items-end justify-start  ">
								<img
									className="px-5 w-full lg:w-1/2"
									src={HeroLogo}
									alt="Thinker Logo"
									data-anim="herologo"
								/>
							</div>
						</div>

						<div className="flex justify-between">
							<p className="text-xs-medium text-text-secondary w-5/7 z-10 px-5  md:text-sm-medium md:w-3/8 lg:w-3/6 lg:text-text-primary lg:pt-18" data-anim="tagline">
								Thinker is a creative agency dedicated to
								branding that delivers real outcomes,
								meaningful, measurable, and human.
							</p>

							<div className="hidden md:grid grid-cols-2 w-1/5 h-1/2 gap-2 pr-5 lg:grid-cols-1 lg:h-3/4 lg:w-1/4 lg:aspect-auto">
								<div className="hidden lg:flex lg:relative -translate-y-9 translate-x-9" data-anim="heroarrow">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="absolute opacity-25 -translate-y-2 -translate-x-6 size-40"
										viewBox="0 0 512 512"
									>
										<path d="M0 0h512v512H0z" fill="none" />
										<path
											fill="currentColor"
											fillRule="evenodd"
											d="M234.672 106.68v216.973l-70.25-70.25l-30.167 30.167l121.75 121.75l121.74-121.75l-30.167-30.167l-70.24 70.247V106.68z"
										/>
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
									>
										<path d="M0 0h512v512H0z" fill="none" />
										<path
											fill="currentColor"
											fillRule="evenodd"
											d="M234.672 106.68v216.973l-70.25-70.25l-30.167 30.167l121.75 121.75l121.74-121.75l-30.167-30.167l-70.24 70.247V106.68z"
										/>
									</svg>
								</div>
								<div className="w-full overflow-hidden bg-background-default hover:opacity-95 transition-opacity" data-anim="herothumbnail">
									<img
										src={Work1}
										className="w-full h-full object-cover"
										alt="Selected Work 1"
									/>
								</div>
								<div className="w-full overflow-hidden bg-background-default hover:opacity-95 transition-opacity" data-anim="herothumbnail">
									<img
										src={Work3}
										className="w-full h-full object-cover"
										alt="Selected Work 3"
									/>
								</div>

								<div className="w-full overflow-hidden bg-background-default hover:opacity-95 transition-opacity" data-anim="herothumbnail">
									<img
										src={Work2}
										className="w-full h-full object-cover"
										alt="Selected Work 2"
									/>
								</div>
								<div className="w-full overflow-hidden bg-background-default hover:opacity-95 transition-opacity" data-anim="herothumbnail">
									<img
										src={Work4}
										className="w-full h-full object-cover"
										alt="Selected Work 4"
									/>
								</div>
							</div>
						</div>
						<div className="border-b-2 border-border h-full w-screen flex items-end justify-end lg:justify-start lg:items-start lg:hidden">
							<img
								className="px-5 w-full lg:w-1/2"
								src={HeroLogo}
								alt="Thinker Logo"
								data-anim="herologo-mobile"
							/>
						</div>
					</div>
				</div>

				<div className="absolute w-full left-0 bottom-0 z-1 lg:hidden" data-anim="herobg">
					<img src={HeroBackground} alt="" className="w-full object-cover" />
				</div>
				<div className="hidden absolute left-0 bottom-0 z-1 lg:flex w-full" data-anim="herobg">
					<img
						src={DekstopHeroBackground}
						alt=""
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="w-0.5 h-full absolute left-1/2 top-0 bg-border z-0" />
			</div>
		</div>
	);
}

export default HeroSection;
