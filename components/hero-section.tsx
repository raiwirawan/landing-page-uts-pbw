import Image from "next/image";
import { cn } from "@/lib/utils";
import DefaultButton from "./default-button";

export type HeroSectionProps = {
	headingText: string | React.ReactNode;
	imageSrc: string;
	paragraphText: string;
	buttonClassName?: string;
	imageContainerClassName?: string;
};

export default function HeroSection({
	headingText,
	imageSrc,
	paragraphText,
	buttonClassName,
	imageContainerClassName,
}: HeroSectionProps) {
	return (
		<section id="hero-section" className=" bg-[#F7F5FD]">
			<div className="container mx-auto w-full px-4 py-16 grid grid-rows-2 grid-cols-1 gap-y-10 lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-20">
				<div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
					<h1 className="text-6xl lg:text-8xl text-center lg:text-left font-semibold text-black">
						{headingText}
					</h1>
					<p className="mt-10 lg:mt-15 lg:mb-15 text-lg text-center lg:text-left text-gray-500">
						{paragraphText}
					</p>
					<DefaultButton
						text="Yok Lihat"
						href="#video-section"
						className={buttonClassName}
					/>
				</div>
				<div
					className={cn(
						" flex justify-end items-center relative aspect-square lg:max-w-[600px]",
						imageContainerClassName
					)}
				>
					<Image
						src={imageSrc}
						className="rounded-lg"
						fill={true}
						style={{
							objectFit: "cover",
							objectPosition: "center",
						}}
						alt={"Gambar Anjing"}
					/>
				</div>
			</div>
		</section>
	);
}
