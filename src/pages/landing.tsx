import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/landing/HeroSection";
import WhoWeAreSection from "../components/landing/WhoWeAreSection";
import SelectedWorksSection from "../components/landing/SelectedWorksSection";
import ExpertiseSection from "../components/landing/ExpertiseSection";
import CasesSection from "../components/landing/CasesSection";
import CallToActionSection from "../components/landing/CallToActionSection";
import JournalSection from "../components/landing/JournalSection";
import LoadingScreen from "../components/LoadingScreen";
import { useScrollAnimations } from "../hooks/useScrollAnimations";
 
function Landing() {
	const [isLoading, setIsLoading] = useState(true);
	useScrollAnimations(!isLoading);
 
	return (
		<div className="w-full">
			{isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
			<Navbar />

			{/* Hero Section */}
			<div id="home" data-section="hero">
				<HeroSection />
			</div>

			{/* Main content wrapper with background grid lines */}
			<div className="relative h-fit lg:grid lg:gap-30 bg-background-default">
				{/* Mobile Grid Lines Overlay */}
				<div className="absolute left-0 top-0 h-full w-full grid grid-cols-2 gap-5 lg:hidden pointer-events-none z-0">
					<div className="border-r border-border" />
					<div className="border-l border-border" />
				</div>

				{/* Desktop Grid Lines Overlay */}
				<div className="absolute inset-0 grid grid-cols-4 gap-5 px-8 pointer-events-none z-0 hidden lg:grid">
					<div className="border-r border-border" />
					<div className="border-x border-border" />
					<div className="border-x border-border" />
					<div className="border-l border-border" />
				</div>

				{/* Section 01: Who We Are */}
				<div id="about" className="relative z-10" data-section="whoweare">
					<WhoWeAreSection />
				</div>

				{/* Section 02: Selected Works */}
				<div id="works" className="relative z-10" data-section="selectedworks">
					<SelectedWorksSection />
				</div>

				{/* Section 03: Our Expertise */}
				<div id="expertise" className="relative z-10" data-section="expertise">
					<ExpertiseSection />
				</div>

				{/* Section 04: Cases */}
				<div id="cases" className="relative z-10" data-section="cases">
					<CasesSection />
				</div>

				{/* Call to Action Section */}
				<div data-section="cta">
					<CallToActionSection />
				</div>

				{/* Section 05: Journal */}
				<div id="journal" className="relative z-10" data-section="journal">
					<JournalSection />
				</div>
			</div>

			{/* Footer Component */}
			<div id="contact">
				<Footer />
			</div>
		</div>
	);
}

export default Landing;
