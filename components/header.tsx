import Image from "next/image";

export default function Header() {
	return (
		<header className="container mx-auto py-4 w-full flex items-center justify-between">
			<div className="font-extrabold text-2xl">
				<Image src={"/images/logo.svg"} width={200} height={100} alt="logo" />
			</div>
			<div className="flex flex-row items-center">
				<div className="mr-12 inline-block bg-transparent">Sign Up</div>
				<div className="inline-block py-3 px-10 rounded-md bg-blue-500 text-white">
					Log in
				</div>
			</div>
		</header>
	);
}
