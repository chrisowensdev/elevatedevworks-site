import { FadeIn } from "@/components/media";
import { Project, projects } from "@/content/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WorkGrid({ projects }: { projects: Project[] }) {
	return (
		<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{projects.map((project, i) => (
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
							<div className="mt-4 flex justify-between">
								<Link
									href={`/work/${project.slug}`}
									className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
									aria-label={`${project.ariaLabel}`}
								>
									View Live Site
								</Link>
								{project.hasCaseStudy ? (
									<Link
										href={`/work/${project.slug}`}
										aria-label="Get a free website assessment"
										className="text-sm font-medium text-emerald-600 hover:opacity-90 "
									>
										View Case Study
									</Link>
								) : (
									<div className="p20" />
								)}
							</div>
						</div>
					</article>
				</FadeIn>
			))}
		</div>
	);
}
