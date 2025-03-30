import Image from "next/image";

export default function TestimonialSection() {
	return (
		<section id="testimonial-section" className="bg-[#ECE7FB]">
			<div className="w-full container mx-auto py-15 px-3 flex flex-col lg:flex-row items-center justify-center">
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
				<div>
					<div className="max-w-100 ml-10">
						<div className="mb-5">
							<Image
								src="/images/quote-icon.svg"
								alt="quote icon"
								width={80}
								height={80}
							/>
						</div>
						<p className="text-[#4B3F72] font-semibold">
							{`We love using 'PETWORLD' products. Environmentally friendly and
							sustainable. We have the sustainable dog bowls and regularly use
							the mint scented poo bags which were all such great value for
							money.`}
						</p>
						<p className="text-gray-400 mt-10">Emma Watson</p>
					</div>
				</div>
			</div>
		</section>
	);
}
