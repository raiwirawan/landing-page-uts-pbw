import { cn } from "@/lib/utils";
import React from "react";

export type CardProps = {
	title: string;
	description: string | React.ReactNode;
	childrenImage?: React.ReactNode;
	childrenClassname?: string;
	containerClassName?: string;
	titleClassName?: string;
	descriptionClassName?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Card({
	title,
	description,
	childrenImage,
	childrenClassname,
	containerClassName,
	titleClassName,
	descriptionClassName,
}: CardProps) {
	return (
		<div className={cn("mx-4 flex flex-col", containerClassName)}>
			<div className={cn("mb-1", childrenClassname)}>{childrenImage}</div>
			<div className="my-2">
				<h3 className={cn("text-lg font-semibold", titleClassName)}>{title}</h3>
			</div>
			<div className="my-2">
				<div className={cn("text-lg text-gray-500", descriptionClassName)}>
					{description}
				</div>
			</div>
		</div>
	);
}
