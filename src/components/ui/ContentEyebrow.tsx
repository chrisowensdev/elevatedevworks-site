export default function ContentEyebrow({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<p className="text-sm/6 font-semibold tracking-wider text-emerald-600">
			{children}
		</p>
	);
}
