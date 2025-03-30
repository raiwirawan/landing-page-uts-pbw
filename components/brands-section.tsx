import advantages from "@/data/advantages";
import brands from "@/data/brands";
import Image from "next/image";
import Card from "./card";

export default function BrandsSection() {
	return (
		<section id="brands-section" className="bg-white">
			<div className="w-full container mx-auto py-10 flex flex-col items-center justify-center">
				<div className="w-full flex flex-row flex-wrap items-center justify-around mb-20 gap-5 px-5 relative">
					{brands.map((brand, index) => (
						<div
							key={index}
							className="aspect-video relative w-[70px] lg:w-[100px]"
						>
							{brand.logo}
						</div>
					))}
				</div>
				<div className="w-full flex flex-col lg:flex-row items-center justify-around mt-10 gap-y-20 lg:gap-y-0 lg:mt-40">
					{advantages.map((advantage, index) => (
						<Card
							key={index}
							title={advantage.title}
							description={advantage.description}
							containerClassName="lg:max-w-[250px] max-w-[280px] items-center justify-center text-center"
							childrenClassname="mb-8"
							childrenImage={
								<Image
									src={advantage.icon}
									alt={advantage.title}
									width={50}
									height={50}
								/>
							}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
