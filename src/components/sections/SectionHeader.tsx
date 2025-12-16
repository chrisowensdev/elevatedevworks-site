import ContentEyebrow from "../ui/ContentEyebrow";

export default function SectionHeader({
	eyebrow,
	title,
	children,
}: {
	eyebrow: string;
	title: string;
	children?: React.ReactNode;
}) {
	return (
		<>
			<ContentEyebrow>{eyebrow}</ContentEyebrow>
			<h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
				{title}
			</h2>

			{children ? (
				<p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
					{children}
				</p>
			) : null}
		</>
	);
}
