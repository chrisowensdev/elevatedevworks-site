import ContentEyebrow from "../ui/ContentEyebrow";

export default function SectionHeader({
	eyebrow,
	title,
}: {
	eyebrow: string;
	title: string;
}) {
	return (
		<>
			<ContentEyebrow>{eyebrow}</ContentEyebrow>
			<h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
				{title}
			</h2>
		</>
	);
}
