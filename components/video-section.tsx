import { VideoIframe } from "./video";

export default function VideoSection() {
	return (
		<section id="video-section" className="bg-[#F2FAF8]">
			<div className="container mx-auto flex items-center justify-center py-16">
				<div className="grayscale hover:filter-none transition-[filter] duration-1000 to-white relative overflow-hidden rounded-2xl shadow-lg">
					<VideoIframe
						src="https://www.youtube.com/embed/DVTRklHhEsU"
						width={800}
						height={500}
					/>
				</div>
			</div>
		</section>
	);
}
