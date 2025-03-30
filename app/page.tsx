import BrandsSection from "@/components/brands-section";
import HeroSection from "@/components/hero-section";
import TestimonialSection from "@/components/testimonial-section";
import VideoSection from "@/components/video-section";

export default function Home() {
	return (
		<div id="sections" className="w-full">
			<HeroSection />
			<VideoSection />
			<BrandsSection />
			<TestimonialSection />
		</div>
	);
}
