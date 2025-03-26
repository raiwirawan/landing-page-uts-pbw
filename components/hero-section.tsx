import Image from "next/image";
import DefaultButton from "./default-button";

export default function HeroSection() {
	return (
		<section id="hero-section" className=" bg-[#F7F5FD]">
			<div className="container mx-auto w-full flex flex-row items-center justify-between px-4 py-16">
				<div className="flex-1/2">
					<h1 className="text-8xl font-semibold text-black">
						Pet Store
						<div>& Beyond</div>
					</h1>
					<p className="mt-10 text-lg text-gray-500">
						Bawa anjingmu ke sini tanpa khawatir stress dan waktu untuk merawat
						anjing! Mudah banget kan?
					</p>
					<DefaultButton text="Yok Lihat" href="#video-section" />
				</div>
				<div className="flex-1/2 flex justify-end items-center">
					<Image
						src={"/images/anjing.jpg"}
						className="rounded-lg"
						width={600}
						height={600}
						alt={"Gambar Anjing"}
					/>
				</div>
			</div>
		</section>
	);
}
