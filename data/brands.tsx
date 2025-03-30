import Image from "next/image";

export type Brand = {
	name: string;
	logo: React.ReactNode;
};

const brands: Array<Brand> = [
	{
		name: "Nestle",
		logo: (
			<Image
				src="/images/brands/Nestle.svg"
				alt="Nestle"
				width={100}
				height={50}
			/>
		),
	},
	{
		name: "Apple",
		logo: (
			<Image
				src="/images/brands/Apple.svg"
				alt="Apple"
				width={50}
				height={50}
			/>
		),
	},
	{
		name: "Beco",
		logo: (
			<Image src="/images/brands/Beco.svg" alt="Beco" width={100} height={50} />
		),
	},
	{
		name: "Amazon",
		logo: (
			<Image
				src="/images/brands/Amazon.svg"
				alt="Amazon"
				width={100}
				height={50}
			/>
		),
	},
	{
		name: "Google",
		logo: (
			<Image
				src="/images/brands/Google.svg"
				alt="Google"
				width={100}
				height={50}
			/>
		),
	},
	{
		name: "Walmart",
		logo: (
			<Image
				src="/images/brands/Walmart.svg"
				alt="Walmart"
				width={100}
				height={50}
			/>
		),
	},
];

export default brands;
