import Image from "next/image";

export default function TestimonialSection() {
	return (
		<section id="testimonial-section" className="bg-[#ECE7FB]">
			<div className="w-full container mx-auto py-10 flex flex-row items-center justify-center">
				<div>
					<div className="relative overflow-hidden w-80 h-100 rounded-[50%]">
						<Image
							src="/images/Emma.jpg"
							alt="Emma"
							fill
							style={{ objectFit: "cover", objectPosition: "center" }}
						/>
					</div>
				</div>
				<div></div>
			</div>
		</section>
	);
}
