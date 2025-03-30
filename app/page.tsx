import BrandsSection from "@/components/brands-section";
import HeroSection from "@/components/hero-section";
import TestimonialSection from "@/components/testimonial-section";
import VideoSection from "@/components/video-section";

export default function Home() {
	return (
		<div id="sections" className="w-full">
			<HeroSection
				headingText={
					<>
						Pet Store
						<div>& Beyond</div>
					</>
				}
				imageSrc="/images/anjing.jpg"
				paragraphText="Bawa anjingmu ke sini tanpa khawatir stress dan waktu untuk merawat anjing! Mudah banget kan?"
			/>
			<VideoSection />
			<BrandsSection />
			<TestimonialSection />
			<HeroSection
				headingText={
					<div>
						{`Let's talk,`}
						<div>woof!</div>
					</div>
				}
				imageSrc="/images/anjing2.jpg"
				paragraphText="Bawa anjingmu ke sini tanpa khawatir stress dan waktu untuk merawat anjing! Mudah banget kan?"
			/>
		</div>
	);
}
