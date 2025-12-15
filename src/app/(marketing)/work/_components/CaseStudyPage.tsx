import { CaseStudy } from "@/content/caseStudies";
import { Container } from "@/components/layout";
import CaseStudyHeader from "./CaseStudyHeader";

export default function CaseStudyPage({ data }: { data: CaseStudy }) {
	return (
		<main className="bg-white z-50">
			<CaseStudyHeader
				breadcrumbs={[
					{ href: "/", label: "Home" },
					{ href: "/work", label: "Work" },
				]}
				eyebrow="Case Study"
				title={data.name}
				description={data.intro}
				tone="muted"
				align="left"
				meta={[
					{ label: "Client", value: "ClearPath" },
					{ label: "Role", value: "Design & Development" },
					{ label: "Year", value: "2025" },
				]}
				fgImageSrc={`/work/${data.image}-800.webp`} // your right-side image
				fgImageAlt="" // decorative (empty alt for a11y)
				fgImageWidth={960}
				fgImageHeight={640}
			/>
			<div className="mx-auto max-w-5xl px-4 space-y-16">
				{/* Header */}
				{/* <section className="space-y-4">
					<h1 className="text-4xl font-semibold tracking-tight text-slate-900">
						{data.name}
						<span className="block text-2xl text-emerald-600">
							{data.subtitle}
						</span>
					</h1>
					<p className="max-w-3xl text-slate-600 text-base leading-relaxed">
						{data.intro}
					</p>
				</section> */}
				<Container className="py-16 md:py-24">
					{/* Details */}
					<section className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-10">
						<div>
							<h3 className="font-semibold text-slate-900">
								Industry
							</h3>
							<p className="text-slate-600">
								{data.details.industry}
							</p>
						</div>
						<div>
							<h3 className="font-semibold text-slate-900">
								Website Type
							</h3>
							<p className="text-slate-600">
								{data.details.websiteType}
							</p>
						</div>
						<div>
							<h3 className="font-semibold text-slate-900">
								Tech Stack
							</h3>
							<p className="text-slate-600">
								{data.details.techStack}
							</p>
						</div>
					</section>

					{/* Goals */}
					<section className="space-y-4">
						<h2 className="text-2xl font-semibold text-slate-900">
							Project Goals
						</h2>
						<p className="text-slate-600 leading-relaxed">
							{data.goals}
						</p>
					</section>

					{/* Features */}
					<section className="space-y-6 py-10">
						<h2 className="text-2xl font-semibold text-slate-900">
							Key Features
						</h2>
						<ul className="space-y-4 text-slate-700 leading-relaxed">
							{data.features.map((f) => (
								<li key={f.title}>
									<strong className="text-slate-900">
										{f.title}
									</strong>
									{" - "}
									{f.description}
								</li>
							))}
						</ul>
					</section>

					{/* Design */}
					<section className="space-y-4 py-10">
						<h2 className="text-2xl font-semibold text-slate-900">
							Design Philosophy
						</h2>
						<p className="text-slate-600 leading-relaxed">
							{data.designPhilosophy}
						</p>
					</section>

					{/* Demo link */}
					{data.demoUrl ? (
						<section className="space-y-4 pb-10">
							<h2 className="text-2xl font-semibold text-slate-900">
								View the Live Demo
							</h2>
							<a
								href={data.demoUrl}
								target="_blank"
								className="inline-block rounded-xl bg-emerald-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-emerald-500"
							>
								{data.demoButtonText ?? "Visit Demo Website"}
							</a>
						</section>
					) : null}

					{/* Closing */}
					<section className="space-y-4 pt-8 border-t border-slate-200">
						<h2 className="text-2xl font-semibold text-slate-900">
							{data.closingTitle}
						</h2>
						<p className="text-slate-600 leading-relaxed">
							{data.closingText}
						</p>
						<a
							href="/contact"
							className="inline-block rounded-xl bg-slate-900 px-6 py-3 text-white font-semibold shadow-sm hover:bg-slate-700"
						>
							Contact
						</a>
					</section>
				</Container>
			</div>
		</main>
	);
}
