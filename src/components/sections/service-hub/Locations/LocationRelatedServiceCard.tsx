// components/RelatedServiceCard.tsx
import Link from "next/link";
import {
	Activity,
	ArrowUpRight,
	CheckCircle2,
	RefreshCw,
	Search,
	Wrench,
} from "lucide-react";

type GraphicType = "webDesign" | "seo" | "maintenance";

type RelatedServiceCardProps = {
	title: string;
	description: string;
	href: string;
	ctaLabel: string;
	graphic: GraphicType;
	className?: string;
};

type GraphicProps = {
	className?: string;
};

function WebDesignServiceGraphic({ className = "" }: GraphicProps) {
	return (
		<div
			className={`relative h-24 w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm ${className}`}
			aria-hidden="true"
		>
			<div className="absolute inset-x-0 top-0 flex h-7 items-center gap-1.5 border-b border-neutral-200 bg-neutral-50 px-3">
				<span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
				<span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
				<span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
			</div>

			<div className="absolute inset-x-0 bottom-0 top-7 p-3">
				<div className="grid h-full grid-cols-[1.35fr_0.8fr] gap-3">
					<div className="rounded-xl border border-neutral-200 bg-neutral-50 p-2.5">
						<div className="mb-2 h-2.5 w-16 rounded-full bg-emerald-500/90" />
						<div className="mb-1.5 h-2 w-24 rounded-full bg-neutral-200" />
						<div className="mb-3 h-2 w-20 rounded-full bg-neutral-200" />
						<div className="h-6 w-20 rounded-full bg-emerald-500/15 ring-1 ring-emerald-500/20" />
					</div>

					<div className="flex flex-col gap-2">
						<div className="h-7 rounded-lg border border-neutral-200 bg-neutral-50" />
						<div className="h-7 rounded-lg border border-neutral-200 bg-neutral-50" />
						<div className="h-full rounded-lg border border-neutral-200 bg-neutral-50" />
					</div>
				</div>
			</div>
		</div>
	);
}

function SeoServiceGraphic({ className = "" }: GraphicProps) {
	return (
		<div
			className={`relative h-24 w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm ${className}`}
			aria-hidden="true"
		>
			<div className="absolute inset-x-0 top-0 border-b border-neutral-200 bg-neutral-50 px-3 py-2">
				<div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-2.5 py-1.5">
					<Search className="h-3.5 w-3.5 text-emerald-600" />
					<div className="h-2 w-20 rounded-full bg-neutral-200" />
				</div>
			</div>

			<div className="absolute inset-x-0 bottom-0 top-11 px-3 py-2.5">
				<div className="space-y-2.5">
					<div className="rounded-xl border border-neutral-200 bg-neutral-50 px-2.5 py-2">
						<div className="mb-1.5 flex items-center gap-2">
							<div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
							<div className="h-2 w-24 rounded-full bg-emerald-500/80" />
						</div>
						<div className="mb-1.5 h-2 w-32 rounded-full bg-neutral-200" />
						<div className="h-2 w-28 rounded-full bg-neutral-200" />
					</div>

					<div className="flex items-center justify-between rounded-xl border border-neutral-200 bg-neutral-50 px-2.5 py-2">
						<div className="space-y-1.5">
							<div className="h-2 w-16 rounded-full bg-neutral-200" />
							<div className="h-2 w-10 rounded-full bg-neutral-200" />
						</div>
						<div className="flex items-center gap-1 text-emerald-600">
							<ArrowUpRight className="h-3.5 w-3.5" />
							<Activity className="h-3.5 w-3.5" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function WebsiteMaintenanceServiceGraphic({ className = "" }: GraphicProps) {
	return (
		<div
			className={`relative h-24 w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm ${className}`}
			aria-hidden="true"
		>
			<div className="absolute inset-0 p-3">
				<div className="grid h-full grid-cols-[1fr_auto] gap-3">
					<div className="rounded-xl border border-neutral-200 bg-neutral-50 p-2.5">
						<div className="mb-2 flex items-center gap-2">
							<CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
							<div className="h-2 w-20 rounded-full bg-neutral-200" />
						</div>
						<div className="mb-2 flex items-center gap-2">
							<RefreshCw className="h-3.5 w-3.5 text-emerald-600" />
							<div className="h-2 w-16 rounded-full bg-neutral-200" />
						</div>
						<div className="flex items-center gap-2">
							<CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
							<div className="h-2 w-24 rounded-full bg-neutral-200" />
						</div>
					</div>

					<div className="flex w-14 flex-col items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50">
						<div className="mb-2 rounded-full bg-emerald-500/10 p-2 ring-1 ring-emerald-500/20">
							<Wrench className="h-4 w-4 text-emerald-600" />
						</div>
						<div className="h-2 w-6 rounded-full bg-emerald-500/80" />
					</div>
				</div>
			</div>
		</div>
	);
}

function ServiceGraphic({
	type,
	className = "",
}: {
	type: GraphicType;
	className?: string;
}) {
	switch (type) {
		case "webDesign":
			return <WebDesignServiceGraphic className={className} />;
		case "seo":
			return <SeoServiceGraphic className={className} />;
		case "maintenance":
			return <WebsiteMaintenanceServiceGraphic className={className} />;
		default:
			return null;
	}
}

export function RelatedServiceCard({
	title,
	description,
	href,
	ctaLabel,
	graphic,
	className = "",
}: RelatedServiceCardProps) {
	return (
		<Link
			href={href}
			className={`group block rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md ${className}`}
		>
			<ServiceGraphic type={graphic} />

			<h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">
				{title}
			</h3>

			<p className="mt-2 text-sm leading-6 text-slate-600">
				{description}
			</p>

			<span className="mt-4 inline-flex items-center text-sm font-medium text-emerald-700 transition group-hover:translate-x-0.5">
				{ctaLabel}
			</span>
		</Link>
	);
}
