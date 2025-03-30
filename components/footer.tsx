import Image from "next/image";
import Card from "./card";
import { footerList, footerSocialMediaIcons } from "@/data/footer";

export default function Footer() {
	return (
		<footer id="footer" className="bg-white">
			<div className="container mx-auto py-15 w-full flex justify-between">
				<div className="flex flex-col items-start justify-start">
					<div className="mb-10">
						<Image
							src={"/images/logo.svg"}
							width={200}
							height={100}
							alt="logo"
						/>
					</div>
					<div className="mt-10">
						<p className="mb-2 text-gray-600">Updates right to your Inbox</p>
						<div className="flex flex-row items-center justify-between">
							<input
								type="email"
								placeholder="Enter your email"
								className="py-2 px-4 border border-gray-400 rounded-md"
							/>
							<button className="ml-4 py-2 px-6 bg-blue-500 text-white rounded-md">
								Send
							</button>
						</div>
					</div>
					<div className="mt-5 flex flex-row items-center justify-between">
						<div className="mx-2 font-semibold">&copy; PETWORLD 2022</div>
						<div className="mx-2 font-semibold">Privacy policy</div>
						<div className="mx-2 font-semibold">Terms of use</div>
					</div>
				</div>
				<div className="flex flex-col items-end justify-start">
					<div className="flex flex-row items-start justify-start">
						{footerList.map((list, id) => (
							<Card
								key={id}
								title={list.title}
								containerClassName={"text-left"}
								description={list.list.map((item, id) => (
									<div key={id} className="mb-2">
										{item}
									</div>
								))}
							/>
						))}
					</div>
					<div className="flex flex-row items-end justify-end mt-auto">
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
