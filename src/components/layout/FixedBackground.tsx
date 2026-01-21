// components/FixedBackground.tsx
export default function FixedBackground() {
	return (
		<svg
			className="fixed inset-0 -z-1 h-screen w-screen"
			aria-hidden="true"
		>
			<defs>
				<radialGradient id="g1" cx="20%" cy="15%">
					<stop offset="0" stopColor="#2175a2" stopOpacity="0.18" />
					<stop offset="1" stopColor="#2175a2" stopOpacity="0" />
				</radialGradient>
				<radialGradient id="g2" cx="80%" cy="85%">
					<stop offset="0" stopColor="#21a37c" stopOpacity="0.16" />
					<stop offset="1" stopColor="#21a37c" stopOpacity="0" />
				</radialGradient>
			</defs>
			<rect width="100%" height="100%" fill="#fafafa" />
			<rect width="100%" height="100%" fill="url(#g1)" />
			<rect width="100%" height="100%" fill="url(#g2)" />
		</svg>
	);
}
