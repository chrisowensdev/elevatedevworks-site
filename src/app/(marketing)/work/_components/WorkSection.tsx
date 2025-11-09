import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout";
import { FadeIn } from "@/components/media";
import { items } from "@/data/work";

export default function WorkSection() {
	return (
		<section
			id="work"
			aria-labelledby="work-heading"
			className="border-b bg-white/70"
		>
			<Container className="mx-auto max-w-7xl px-4 py-16 md:py-24">
				<p className="text-sm font-semibold tracking-wider text-emerald-600">
					Our Work
				</p>
				<h2
					id="work-heading"
					className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"
				>
					Projects that tell our story
				</h2>
				<p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
					A few examples of how Elevate DevWorks helps small
					businesses and creative professionals turn ideas into fast,
					beautiful, high-performing web experiences.
				</p>
				<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{items.map((project, i) => (
						<FadeIn key={project.slug} delay={i * 0.05}>
							<article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
								<div className="relative aspect-video overflow-hidden">
									<Image
										src={`/work/${project.img}-1200.webp`}
										alt={project.alt}
										fill
										className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
										sizes="(min-width:1280px) calc((100vw - 9rem)/3),
                                                       (min-width:640px) calc((100vw - 4rem)/2),
                                                       100vw"
									/>
								</div>

								<div className="p-6">
									<h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-700">
										{project.title}
									</h3>
									<p className="mt-2 text-sm text-gray-600 line-clamp-3">
										{project.desc}
									</p>
									<div className="mt-4">
										<Link
											href={`/work/${project.slug}`}
											className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
										>
											View project →
										</Link>
									</div>
								</div>
							</article>
						</FadeIn>
					))}
				</div>
			</Container>
		</section>
	);
}
