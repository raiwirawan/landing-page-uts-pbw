export type FooterList = {
	title: string;
	list: string[];
};

const footerList: Array<FooterList> = [
	{
		title: "Our story",
		list: ["FAQ", "Contact"],
	},
	{
		title: "Pet care",
		list: ["Treatments", "Health", "Hygiene"],
	},
	{
		title: "Shop",
		list: ["Pet Food", "Toys", "Accessories"],
	},
];

export type FooterSocialMediaIcons = {
	name: string;
	src: string;
	alt: string;
};

const footerSocialMediaIcons: Array<FooterSocialMediaIcons> = [
	{
		name: "Facebook",
		src: "/images/social_media/Facebook.svg",
		alt: "facebook icon",
	},
	{
		name: "Instagram",
		src: "/images/social_media/Instagram.svg",
		alt: "instagram icon",
	},
	{
		name: "Linkedin",
		src: "/images/social_media/Linkedin.svg",
		alt: "linkedin icon",
	},
	{
		name: "Twitter",
		src: "/images/social_media/Twitter.svg",
		alt: "twitter icon",
	},
];

export { footerList, footerSocialMediaIcons };
