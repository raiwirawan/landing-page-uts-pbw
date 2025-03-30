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
			<div className="container mx-auto w-full flex flex-row items-center justify-between px-4 py-16">
				<div className="flex-1/2">
					<h1 className="text-8xl font-semibold text-black">{headingText}</h1>
					<p className="mt-10 text-lg text-gray-500">{paragraphText}</p>
					<DefaultButton
						text="Yok Lihat"
						href="#video-section"
						className={buttonClassName}
					/>
				</div>
				<div
					className={cn(
						"flex-1/2 flex justify-end items-center w-[600px] h-[600px] relative",
						imageContainerClassName
					)}
				>
					<Image
						src={imageSrc}
						className="rounded-lg"
						fill={true}
						style={{ objectFit: "cover", objectPosition: "center" }}
						alt={"Gambar Anjing"}
					/>
				</div>
			</div>
		</section>
	);
}
