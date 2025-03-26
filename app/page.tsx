import HeroSection from "@/components/hero-section";
import VideoSection from "@/components/video-section";

export default function Home() {
	return (
		<div id="sections" className="w-full">
			<HeroSection />
			<VideoSection />
		</div>
	);
}
