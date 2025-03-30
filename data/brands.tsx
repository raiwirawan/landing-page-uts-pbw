import Image from "next/image";

export type Brand = {
	name: string;
	logo: React.ReactNode;
};

const brands: Array<Brand> = [
	{
		name: "Nestle",
		logo: <Image src="/images/brands/Nestle.svg" alt="Nestle" fill={true} />,
	},
	{
		name: "Apple",
		logo: <Image src="/images/brands/Apple.svg" alt="Apple" fill={true} />,
	},
	{
		name: "Beco",
		logo: <Image src="/images/brands/Beco.svg" alt="Beco" fill={true} />,
	},
	{
		name: "Amazon",
		logo: <Image src="/images/brands/Amazon.svg" alt="Amazon" fill={true} />,
	},
	{
		name: "Google",
		logo: <Image src="/images/brands/Google.svg" alt="Google" fill={true} />,
	},
	{
		name: "Walmart",
		logo: <Image src="/images/brands/Walmart.svg" alt="Walmart" fill={true} />,
	},
];

export default brands;
