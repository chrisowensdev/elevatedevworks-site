type Props = {
	children: React.ReactNode;
	size?: "content" | "default" | "wide";
	className?: string;
};

export default function Container({
	children,
	size = "default",
	className = "",
}: Props) {
	const sizes = {
		content: "max-w-4xl",
		default: "max-w-5xl",
		wide: "max-w-6xl",
	};
	return (
		<div className={`mx-auto px-6 ${sizes[size]} ${className}`}>
			{children}
		</div>
	);
}
