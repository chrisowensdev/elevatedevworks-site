import { Container } from "@/components/layout";
import { steps } from "@/content/process";

export default function Process() {
	return (
		<section aria-labelledby="process-heading" className="border-b">
			<Container className="py-16 md:py-24">
				<h2
					id="process-heading"
					className="text-2xl md:text-3xl font-semibold"
				>
					Our Process
				</h2>
				<p className="mt-3 text-neutral-700 max-w-3xl">
					A clear, collaborative workflow that keeps projects on time
					and focused on outcomes—more qualified traffic, more leads,
					and a faster website.
				</p>
				<div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{steps.map((s, i) => (
						<article
							key={s.title}
							className="rounded-2xl border bg-white p-6 shadow-sm"
						>
							<div className="text-sm font-semibold text-neutral-500">
								Step {i + 1}
							</div>
							<h3 className="mt-1 text-lg font-semibold">
								{s.title}
							</h3>
							<p className="mt-2 text-sm text-neutral-700">
								{s.body}
							</p>
							<ul className="mt-3 space-y-1 text-sm text-neutral-600">
								{s.points.map((pt) => (
									<li key={pt}>• {pt}</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</Container>
		</section>
	);
}
