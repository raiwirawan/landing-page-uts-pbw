export type Advantage = {
	icon: string;
	title: string;
	description: string;
};

const advantages: Array<Advantage> = [
	{
		icon: "/images/advantages/bone.svg",
		title: "Best quality pet food",
		description:
			"Super delicious food. Available in a range of delicious flavors.",
	},
	{
		icon: "/images/advantages/ball.svg",
		title: "Toys & Accessories",
		description:
			"Soft toys, chew toys, and rope toys. Strong, interactive, and fun.",
	},
	{
		icon: "/images/advantages/medical.svg",
		title: "Pets medical care",
		description: "You can get a wide range of great treatments for your dog.",
	},
	{
		icon: "/images/advantages/scissors.svg",
		title: "Full service grooming",
		description:
			"It's the right time to groom your dog with a variety of treatments.",
	},
];

export default advantages;
