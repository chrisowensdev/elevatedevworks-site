import { Container } from "@/components/layout";
import { Card } from "@/components/ui";
import { CardContent } from "@/components/vendor/shadcn/card";
import type { LocationServicePage } from "@/content/locations";

export default function LocationSections({
	sections,
}: {
	sections: LocationServicePage["sections"];
}) {
	return (
		<>
			{sections.map((section, idx) => {
				// alternate subtle backgrounds
				const bg =
					idx % 2 === 0 ? "bg-white/70 border-y" : "bg-transparent";

				if (section.type === "highlights") {
					return (
						<section key={idx} className={bg}>
							<Container className="py-16 md:py-24">
								{section.eyebrow ? (
									<p className="text-sm font-semibold tracking-wider text-emerald-600">
										{section.eyebrow}
									</p>
								) : null}
								<h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
									{section.title}
								</h2>
								{section.description ? (
									<p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
										{section.description}
									</p>
								) : null}

								<div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
									{section.items.map((it) => (
										<Card
											key={it.title}
											className="rounded-2xl"
										>
											<CardContent className="p-6">
												<h3 className="text-lg font-semibold text-gray-900">
													{it.title}
												</h3>
												<p className="mt-2 text-sm text-gray-600">
													{it.body}
												</p>
											</CardContent>
										</Card>
									))}
								</div>
							</Container>
						</section>
					);
				}

				if (section.type === "who") {
					return (
						<section key={idx} className={bg}>
							<Container className="py-16 md:py-24">
								{section.eyebrow ? (
									<p className="text-sm font-semibold tracking-wider text-emerald-600">
										{section.eyebrow}
									</p>
								) : null}
								<h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
									{section.title}
								</h2>

								<div className="mt-10 grid gap-6 md:grid-cols-2">
									<Card className="rounded-2xl">
										<CardContent className="p-6">
											<h3 className="text-lg font-semibold text-gray-900">
												Great fit if…
											</h3>
											<ul className="mt-3 space-y-2 text-sm text-gray-700">
												{section.goodFit.map((x) => (
													<li key={x}>• {x}</li>
												))}
											</ul>
										</CardContent>
									</Card>

									{section.notIdeal?.length ? (
										<Card className="rounded-2xl">
											<CardContent className="p-6">
												<h3 className="text-lg font-semibold text-gray-900">
													Not ideal if…
												</h3>
												<ul className="mt-3 space-y-2 text-sm text-gray-700">
													{section.notIdeal.map(
														(x) => (
															<li key={x}>
																• {x}
															</li>
														)
													)}
												</ul>
											</CardContent>
										</Card>
									) : null}
								</div>
							</Container>
						</section>
					);
				}

				if (section.type === "process") {
					return (
						<section key={idx} className={bg}>
							<Container className="py-16 md:py-24">
								{section.eyebrow ? (
									<p className="text-sm font-semibold tracking-wider text-emerald-600">
										{section.eyebrow}
									</p>
								) : null}
								<h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
									{section.title}
								</h2>

								<div className="mt-10 grid gap-6 md:grid-cols-2">
									{section.steps.map((s, i) => (
										<Card
											key={s.title}
											className="rounded-2xl"
										>
											<CardContent className="p-6">
												<p className="text-xs font-semibold tracking-wider text-gray-500">
													STEP {i + 1}
												</p>
												<h3 className="mt-2 text-lg font-semibold text-gray-900">
													{s.title}
												</h3>
												<p className="mt-2 text-sm text-gray-600">
													{s.body}
												</p>
											</CardContent>
										</Card>
									))}
								</div>
							</Container>
						</section>
					);
				}

				if (section.type === "faq") {
					return (
						<section key={idx} className={bg}>
							<Container className="py-16 md:py-24">
								{section.eyebrow ? (
									<p className="text-sm font-semibold tracking-wider text-emerald-600">
										{section.eyebrow}
									</p>
								) : null}
								<h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
									{section.title}
								</h2>

								<div className="mt-10 space-y-4">
									{section.items.map((f) => (
										<div
											key={f.q}
											className="rounded-2xl border bg-white p-6 shadow-sm"
										>
											<p className="font-semibold text-gray-900">
												{f.q}
											</p>
											<p className="mt-2 text-sm text-gray-600">
												{f.a}
											</p>
										</div>
									))}
								</div>
							</Container>
						</section>
					);
				}

				if (section.type === "cta") {
					return (
						<section key={idx} className="border-b">
							<Container className="py-16 md:py-24">
								<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
									{section.title}
								</h2>
								<p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
									{section.body}
								</p>

								<div className="mt-8 flex flex-wrap items-center gap-3">
									<a
										href={section.primaryHref}
										className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
									>
										{section.primaryText}
									</a>

									{section.secondaryText &&
									section.secondaryHref ? (
										<a
											href={section.secondaryHref}
											className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-gray-900 shadow-sm transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
										>
											{section.secondaryText}
										</a>
									) : null}
								</div>
							</Container>
						</section>
					);
				}

				return null;
			})}
		</>
	);
}
