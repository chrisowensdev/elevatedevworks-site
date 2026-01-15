const BRAND = { primary: "#2175a2", accent: "#21a37c" };

function RightShowcase_Bento() {
	return (
		<div className="grid grid-cols-12 gap-4">
			{/* Featured */}
			<a
				href="/work"
				className="col-span-12 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-lg"
			>
				<div className="relative">
					<img
						src="/work/clearpath-1200.webp"
						alt="GreenScape homepage preview"
						className="h-[280px] w-full object-cover md:h-[320px] p-2"
					/>
					<div className="absolute right-4 bottom-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-800 backdrop-blur">
						Featured • GreenScape
					</div>
				</div>
			</a>

			{/* Two supporting tiles */}
			<a
				href="/work"
				className="col-span-7 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
			>
				<div className="relative">
					<img
						src="/work/greenscape-services.webp"
						alt="Services page preview"
						className="h-[160px] w-full object-cover md:h-[170px]"
					/>
					<div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-800 backdrop-blur">
						Services
					</div>
				</div>
			</a>

			<a
				href="/work"
				className="col-span-5 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
			>
				<div className="relative">
					<img
						src="/work/clearpath-mobile.png"
						alt="Mobile preview"
						className="h-[160px] w-full object-cover md:h-[170px]"
					/>
					<div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-800 backdrop-blur">
						Mobile
					</div>
				</div>
			</a>
		</div>
	);
}

function RightShowcase_Editorial() {
	return (
		<div className="relative md:ml-6">
			{/* rail */}
			<div className="pointer-events-none absolute -left-6 top-6 hidden h-[80%] w-px bg-neutral-200 md:block" />

			{/* main preview, offset */}
			<a
				href="/work"
				className="group relative block overflow-hidden rounded-[28px] border border-neutral-200 bg-white shadow-xl md:-translate-y-3"
			>
				<img
					src="/hero-poster.webp"
					alt="GreenScape preview"
					className="h-[360px] w-full object-cover md:h-[420px]"
				/>

				{/* corner label */}
				<div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-800 backdrop-blur">
					View work →
				</div>

				{/* subtle hover polish */}
				<div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5" />
			</a>

			{/* overlapping note card */}
			<div className="absolute -bottom-6 left-6 max-w-[85%] rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-700 shadow-md">
				<div className="font-medium text-neutral-900">
					Designed for clarity
				</div>
				<div className="mt-1 text-neutral-600">
					Simple layout, strong CTA, trust-building sections.
				</div>
			</div>
		</div>
	);
}

function RightShowcase_ElevateMotif() {
	return (
		<div className="relative">
			{/* branded slab (the signature move) */}
			<div
				className="pointer-events-none absolute -inset-5 -z-10 rounded-[34px] rotate-[-2deg]"
				style={{
					background: `linear-gradient(135deg, ${BRAND.primary}26 0%, ${BRAND.accent}26 100%)`,
				}}
			/>
			<div className="pointer-events-none absolute -inset-5 -z-10 rounded-[34px] border border-neutral-200" />

			<a
				href="/work"
				className="group block overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-xl"
			>
				{/* tiny “elevate” bars header */}
				<div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
					<div className="text-sm font-semibold text-neutral-900">
						Featured work
					</div>
					<div className="flex items-end gap-1">
						<span
							className="h-2 w-2 rounded-sm"
							style={{ backgroundColor: BRAND.primary }}
						/>
						<span
							className="h-3 w-2 rounded-sm"
							style={{ backgroundColor: BRAND.primary }}
						/>
						<span
							className="h-4 w-2 rounded-sm"
							style={{ backgroundColor: BRAND.accent }}
						/>
					</div>
				</div>

				<div className="relative bg-neutral-50">
					<img
						src="/work/greenscape-home.webp"
						alt="GreenScape preview"
						className="h-[360px] w-full object-cover md:h-[420px]"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0 opacity-0 transition-opacity group-hover:opacity-100" />
				</div>

				<div className="px-5 py-4">
					<div className="flex items-center justify-between gap-3">
						<div className="font-medium text-neutral-900">
							GreenScape
						</div>
						<span className="rounded-full bg-neutral-100 px-2 py-1 text-xs text-neutral-700">
							Local services
						</span>
					</div>
					<div className="mt-1 text-sm text-neutral-600">
						Clean structure that builds trust and guides visitors to
						request a quote.
					</div>
				</div>
			</a>
		</div>
	);
}

function RightShowcase_CaseStack() {
	return (
		<div className="relative">
			{/* back card */}
			<div className="absolute left-3 top-3 -z-10 h-full w-full rotate-[1.5deg] rounded-3xl border border-neutral-200 bg-white shadow-sm" />
			{/* mid card */}
			<div className="absolute left-1.5 top-1.5 -z-10 h-full w-full rotate-[-1deg] rounded-3xl border border-neutral-200 bg-white shadow-sm" />

			<div className="rounded-3xl border border-neutral-200 bg-white shadow-xl overflow-hidden">
				<div className="p-5 border-b border-neutral-200">
					<div className="text-sm font-semibold text-neutral-900">
						Recent work
					</div>
					<div className="mt-1 text-sm text-neutral-600">
						A few examples of layouts built for clarity + leads.
					</div>
				</div>

				<div className="p-5 grid gap-4">
					<a
						href="/work"
						className="group grid grid-cols-[88px_1fr] gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-3 hover:bg-white transition-colors"
					>
						<div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
							<img
								src="/work/greenscape-home.webp"
								alt="GreenScape thumbnail"
								className="h-20 w-full object-cover"
							/>
						</div>
						<div>
							<div className="flex items-center justify-between gap-3">
								<div className="font-medium text-neutral-900">
									GreenScape
								</div>
								<span className="text-xs text-neutral-500">
									Featured
								</span>
							</div>
							<div className="mt-1 text-sm text-neutral-600">
								Trust-first homepage + quote-focused CTA.
							</div>
						</div>
					</a>

					<a
						href="/work"
						className="group grid grid-cols-[88px_1fr] gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-3 hover:bg-white transition-colors"
					>
						<div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
							<img
								src="/work/hvac-home.webp"
								alt="HVAC thumbnail"
								className="h-20 w-full object-cover"
							/>
						</div>
						<div>
							<div className="font-medium text-neutral-900">
								Peak Performance HVAC
							</div>
							<div className="mt-1 text-sm text-neutral-600">
								Service pages + mobile tap-to-call flow.
							</div>
						</div>
					</a>

					<a
						href="/work"
						className="group grid grid-cols-[88px_1fr] gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-3 hover:bg-white transition-colors"
					>
						<div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
							<img
								src="/work/invoiceways.webp"
								alt="InvoiceWays thumbnail"
								className="h-20 w-full object-cover"
							/>
						</div>
						<div>
							<div className="font-medium text-neutral-900">
								InvoiceWays
							</div>
							<div className="mt-1 text-sm text-neutral-600">
								Product site designed to explain value fast.
							</div>
						</div>
					</a>
				</div>

				<div className="px-5 pb-5">
					<a
						href="/work"
						className="inline-flex items-center text-sm font-semibold text-neutral-900 hover:underline"
					>
						View the full portfolio →
					</a>
				</div>
			</div>
		</div>
	);
}

function RightShowcase_Minimal() {
	return (
		<div className="relative md:justify-self-end md:pt-2">
			{/* Laptop / browser frame */}
			<div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
				<div className="flex items-center gap-2 border-b border-neutral-200 px-4 py-3">
					<span className="h-3 w-3 rounded-full bg-neutral-300" />
					<span className="h-3 w-3 rounded-full bg-neutral-300" />
					<span className="h-3 w-3 rounded-full bg-neutral-300" />
					<div className="ml-4 h-6 flex-1 rounded-md bg-neutral-100" />
				</div>

				{/* Screenshot: keep it crisp and not too tall */}
				<div className="bg-neutral-50">
					<img
						src="/work/clearpath-1200.webp"
						alt="ClearPath desktop website preview"
						className="block w-full h-auto"
					/>
				</div>
			</div>

			{/* Phone overlay (desktop only) */}
			<div className="hidden md:block absolute -bottom-8 right-6 w-[130px]">
				<div className="overflow-hidden rounded-[28px] shadow-[0_16px_40px_rgba(0,0,0,0.10)]">
					<img
						src="/clearpath-mobile-mockup.png"
						alt="ClearPath mobile preview"
						className="block w-full h-auto"
					/>
				</div>
			</div>

			{/* Optional tiny label (adds “intentional” without noise) */}
			<div className="mt-3 text-xs text-neutral-500">
				Featured demo: ClearPath (desktop + mobile)
			</div>
		</div>
	);
}
