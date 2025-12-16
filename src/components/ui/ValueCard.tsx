export default function ValueCard({
	title,
	emoji,
	children,
}: {
	title: string;
	emoji?: string;
	children: React.ReactNode;
}) {
	return (
		<li className="rounded-2xl border border-gray-200 p-6 shadow-sm border-t-4 border-t-brand-accent">
			<div className="flex items-center gap-2">
				<span className="text-xl" aria-hidden>
					{emoji}
				</span>
				<h3 className="text-base font-semibold text-gray-900">
					{title}
				</h3>
			</div>
			<p className="mt-2 text-gray-600">{children}</p>
		</li>
	);
}
