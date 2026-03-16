// components/MaintenanceSolutionsGraphic.tsx
import { RefreshCw, ShieldCheck, LifeBuoy } from "lucide-react";

type MaintenanceSolutionsGraphicProps = {
	className?: string;
};

export function MaintenanceSolutionsGraphic({
	className = "",
}: MaintenanceSolutionsGraphicProps) {
	return (
		<div
			className={`relative mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)] md:rounded-3xl ${className}`}
			aria-hidden="true"
		>
			<div className="flex h-10 items-center gap-2 border-b border-neutral-200 bg-neutral-50 px-4">
				<span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
				<span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
				<span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
				<div className="ml-3 h-2.5 w-28 rounded-full bg-neutral-200" />
			</div>

			<div className="grid gap-4 p-4 md:grid-cols-[1.45fr_0.85fr] md:p-5">
				<div className="space-y-3">
					<div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
						<div className="flex items-start justify-between gap-4">
							<div className="min-w-0">
								<div className="mb-2 flex items-center gap-2">
									<div className="rounded-full bg-emerald-500/10 p-1.5 ring-1 ring-emerald-500/20">
										<RefreshCw className="h-4 w-4 text-emerald-600" />
									</div>
									<div className="h-2.5 w-28 rounded-full bg-neutral-300" />
								</div>
								<div className="mb-2 h-2 w-40 rounded-full bg-neutral-200" />
								<div className="h-2 w-32 rounded-full bg-neutral-200" />
							</div>

							<div className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-500/20">
								Completed
							</div>
						</div>
					</div>

					<div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
						<div className="flex items-start justify-between gap-4">
							<div className="min-w-0">
								<div className="mb-2 flex items-center gap-2">
									<div className="rounded-full bg-emerald-500/10 p-1.5 ring-1 ring-emerald-500/20">
										<ShieldCheck className="h-4 w-4 text-emerald-600" />
									</div>
									<div className="h-2.5 w-24 rounded-full bg-neutral-300" />
								</div>
								<div className="mb-2 h-2 w-44 rounded-full bg-neutral-200" />
								<div className="h-2 w-36 rounded-full bg-neutral-200" />
							</div>

							<div className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-500/20">
								Passing
							</div>
						</div>
					</div>

					<div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
						<div className="flex items-start justify-between gap-4">
							<div className="min-w-0">
								<div className="mb-2 flex items-center gap-2">
									<div className="rounded-full bg-emerald-500/10 p-1.5 ring-1 ring-emerald-500/20">
										<LifeBuoy className="h-4 w-4 text-emerald-600" />
									</div>
									<div className="h-2.5 w-32 rounded-full bg-neutral-300" />
								</div>
								<div className="mb-2 h-2 w-40 rounded-full bg-neutral-200" />
								<div className="h-2 w-28 rounded-full bg-neutral-200" />
							</div>

							<div className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-500/20">
								Handled
							</div>
						</div>
					</div>
				</div>

				{/* <div className="grid gap-3">
					<div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
						<div className="mb-3 flex items-center gap-2">
							<CheckCircle2 className="h-4 w-4 text-emerald-600" />
							<div className="h-2.5 w-20 rounded-full bg-neutral-300" />
						</div>

						<div className="space-y-2">
							<div className="flex items-center justify-between rounded-xl border border-neutral-200 bg-white px-3 py-2">
								<div className="h-2 w-16 rounded-full bg-neutral-200" />
								<div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
							</div>
							<div className="flex items-center justify-between rounded-xl border border-neutral-200 bg-white px-3 py-2">
								<div className="h-2 w-14 rounded-full bg-neutral-200" />
								<div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
							</div>
							<div className="flex items-center justify-between rounded-xl border border-neutral-200 bg-white px-3 py-2">
								<div className="h-2 w-12 rounded-full bg-neutral-200" />
								<div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
							</div>
						</div>
					</div>

					<div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
						<div className="mb-3 h-2.5 w-24 rounded-full bg-neutral-300" />
						<div className="space-y-3">
							<div>
								<div className="mb-1.5 h-2 w-16 rounded-full bg-neutral-200" />
								<div className="h-2 rounded-full bg-neutral-200">
									<div className="h-2 w-[86%] rounded-full bg-emerald-500/80" />
								</div>
							</div>
							<div>
								<div className="mb-1.5 h-2 w-20 rounded-full bg-neutral-200" />
								<div className="h-2 rounded-full bg-neutral-200">
									<div className="h-2 w-[92%] rounded-full bg-emerald-500/80" />
								</div>
							</div>
							<div>
								<div className="mb-1.5 h-2 w-14 rounded-full bg-neutral-200" />
								<div className="h-2 rounded-full bg-neutral-200">
									<div className="h-2 w-[78%] rounded-full bg-emerald-500/80" />
								</div>
							</div>
						</div>
					</div>

					<div className="rounded-2xl border border-dashed border-emerald-500/25 bg-emerald-500/[0.05] p-4">
						<div className="mb-2 flex items-center gap-2">
							<div className="rounded-full bg-emerald-500/10 p-1.5 ring-1 ring-emerald-500/20">
								<RefreshCw className="h-4 w-4 text-emerald-600" />
							</div>
							<div className="h-2.5 w-24 rounded-full bg-emerald-500/30" />
						</div>
						<div className="h-2 w-28 rounded-full bg-neutral-200" />
					</div> */}
				{/* </div> */}
			</div>
		</div>
	);
}
