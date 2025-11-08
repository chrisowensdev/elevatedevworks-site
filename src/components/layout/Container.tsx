// components/Container.tsx
type Props = { children: React.ReactNode; className?: string };

export default function Container({ children, className = "" }: Props) {
	// Wider side padding + a touch narrower max width for more whitespace.
	return (
		<div
			className={`mx-auto max-w-6xl px-6 md:px-10 lg:px-12 ${className}`}
		>
			{children}
		</div>
	);
}
