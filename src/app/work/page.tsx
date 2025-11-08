import { items } from "@/data/work";
export default function Work() {
	return (
		<main className="mx-auto max-w-5xl p-6 min-h-screen">
			<h1 className="text-3xl font-semibold mb-6">Work & Case Studies</h1>
			<ul className="grid gap-6 sm:grid-cols-2">
				{items.map((i) => (
					<li key={i.slug} className="rounded-xl border p-4">
						<a href={`/work/${i.slug}`} className="block">
							<h2 className="text-xl font-medium">{i.title}</h2>
							<p className="text-sm opacity-70">{i.tag}</p>
						</a>
					</li>
				))}
			</ul>
		</main>
	);
}
