import backgroud from "../../assets/svg/backgorund.svg";

function CallToActionSection() {
	return (
		<div className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden border-b border-border">
			{/* Landscape Background */}
			<div className="absolute inset-0 z-0" data-anim="bg">
				<img
					src={backgroud}
					className="w-full h-full object-cover brightness-75"
					alt="CTA Background"
				/>
			</div>

			{/* Center Content */}
			<div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
				<h2 className="text-3xl md:text-5xl text-white tracking-tight drop-shadow-md md:w-max leading-[1.38]" data-anim="ctatext">
					Let's make <br className="md:hidden" /> something bigger
				</h2>
				<button className="flex items-center" data-anim="ctabtn">
					<span className="font-urbanist text-base font-bold leading-[1.38] bg-black pl-6 pr-10 py-4 rounded-full text-white">
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
	);
}

export default CallToActionSection;
