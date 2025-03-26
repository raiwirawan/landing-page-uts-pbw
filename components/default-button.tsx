import { cn } from "@/lib/utils";
import Link from "next/link";

type DefaultButtonProps = {
	text: string;
	href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function DefaultButton({
	text,
	href,
	className,
	...props
}: DefaultButtonProps) {
	return (
		<Link
			href={href}
			className={cn(
				"inline-block mt-16 px-14 py-4 bg-[#FFD700] text-black rounded-lg",
				className
			)}
			{...props}
		>
			{text}
		</Link>
	);
}
