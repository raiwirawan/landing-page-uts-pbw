export type VideoProps = {
	src: string;
} & React.VideoHTMLAttributes<HTMLVideoElement>;

export type VideoIframeProps = {
	src: string;
} & React.IframeHTMLAttributes<HTMLIFrameElement>;

export function Video({ src, width, height, ...props }: VideoProps) {
	return (
		<video width={width} height={height} controls preload="none" {...props}>
			<source src={src} type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	);
}

export function VideoIframe({
	src,
	height,
	width,
	...props
}: VideoIframeProps) {
	return (
		<iframe
			height={height}
			width={width}
			src={src}
			{...props}
			allowFullScreen
		/>
	);
}
