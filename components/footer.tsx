import Image from "next/image";
import Card from "./card";
import { footerList, footerSocialMediaIcons } from "@/data/footer";

export default function Footer() {
	return (
		<footer id="footer" className="bg-white">
			<div className="container mx-auto px-5 py-15 w-full flex flex-col justify-between">
				<div className="w-full flex flex-col lg:flex-row justify-between">
					<div className="flex flex-col items-start justify-start">
						<div className="mb-10">
							<Image
								src={"/images/logo.svg"}
								width={200}
								height={100}
								alt="logo"
							/>
						</div>
						<div className="mt-2 lg:mt-10 w-full">
							<p className="mb-4 lg:mb-2 text-gray-600">
								Updates right to your Inbox
							</p>
							<div className="flex flex-col lg:flex-row lg:items-center justify-between">
								<input
									type="email"
									placeholder="Enter your email"
									className="py-4 lg:py-2 px-4 border border-gray-400 rounded-md"
								/>
								<button className="ml-0 mt-5 lg:mt-0 lg:ml-4 py-4 lg:py-2 px-6 bg-blue-500 text-white rounded-md">
									Send
								</button>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-start lg:items-end justify-start">
						<div className="flex flex-col lg:flex-row items-start justify-start mt-10 lg:mt-0">
							{footerList.map((list, id) => (
								<Card
									key={id}
									title={list.title}
									containerClassName={"text-left mx-0 lg:mx-4"}
									description={list.list.map((item, id) => (
										<div key={id} className="mb-2">
											{item}
										</div>
									))}
								/>
							))}
						</div>
					</div>
				</div>
				<div className="w-full flex flex-col lg:flex-row justify-between">
					<div className="mt-5 flex flex-col lg:flex-row items-start lg:items-center justify-between">
						<div className="mx-2 my-2 lg:my-0 font-semibold">
							&copy; PETWORLD 2022
						</div>
						<div className="mx-2 my-2 lg:my-0 font-semibold">
							Privacy policy
						</div>
						<div className="mx-2 my-2 lg:my-0 font-semibold">Terms of use</div>
					</div>
					<div className="flex flex-row items-end justify-start mt-5 lg:justify-end lg:mt-auto">
						{footerSocialMediaIcons.map((icon, index) => (
							<div key={index} className="w-8 h-8 relative mx-1">
								<Image
									key={index}
									src={icon.src}
									alt={icon.alt}
									fill={true}
									style={{
										objectFit: "cover",
										objectPosition: "center",
									}}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
