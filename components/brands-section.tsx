import advantages from "@/data/advantages";
import brands from "@/data/brands";
import Image from "next/image";
import Card from "./card";

export default function BrandsSection() {
	return (
		<section id="brands-section" className="bg-white">
			<div className="w-full container mx-auto py-10 flex flex-col items-center justify-center">
				<div className="w-full flex flex-row items-center justify-around mb-20">
					{brands.map((brand, index) => (
						<div key={index}>{brand.logo}</div>
					))}
				</div>
				<div className="w-full flex flex-row items-center justify-around mt-40">
					{advantages.map((advantage, index) => (
						<Card
							key={index}
							title={advantage.title}
							description={advantage.description}
							containerClassName="max-w-[250px] items-center justify-center text-center"
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
