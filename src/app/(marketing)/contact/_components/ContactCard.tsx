export default function ContactCard({
	title,
	subtitle,
	children,
}: {
	title: string;
	subtitle?: string;
	children: React.ReactNode;
}) {
	return (
		<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
			<h3 className="text-lg font-semibold text-gray-900">{title}</h3>
			{subtitle && (
				<p className="mt-1 text-sm text-gray-600">{subtitle}</p>
			)}
			<div className="mt-3 text-gray-700">{children}</div>
		</div>
	);
}
