"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import Container from "./Container";

type NavItem = { label: string; href: string };
// type NavGroup = { label: string; href?: string; items?: NavItem[] };

export default function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [mobileMounted, setMobileMounted] = useState(false);
	const [menuShown, setMenuShown] = useState(false);

	// Desktop Services dropdown
	const [servicesOpen, setServicesOpen] = useState(false);
	const servicesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(
		null,
	);

	// Mobile Services accordion
	const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

	const servicesLinks: NavItem[] = useMemo(
		() => [
			{ label: "Web Design", href: "/web-design/" },
			{ label: "Ongoing Care", href: "/care/" },
			{ label: "Maintenance", href: "/maintenance/" },
			{ label: "SEO", href: "/seo/" },
		],
		[],
	);

	const kitLinks: NavItem[] = useMemo(
		() => [
			{
				label: "Health Advisor",
				href: "/services/health-advisor-website",
			},
		],
		[],
	);

	// const primaryNav: NavGroup[] = useMemo(
	// 	() => [
	// 		{ label: "About", href: "/about" },
	// 		{ label: "Services", items: servicesLinks, href: "/services" },
	// 		{ label: "Work", href: "/work" },
	// 		{ label: "Contact", href: "/contact" },
	// 	],
	// 	[servicesLinks],
	// );

	useEffect(() => {
		let t: ReturnType<typeof setTimeout> | undefined;
		let raf1: number | undefined;
		let raf2: number | undefined;

		if (mobileOpen) {
			setMobileMounted(true);
			raf1 = window.requestAnimationFrame(() => {
				raf2 = window.requestAnimationFrame(() => setMenuShown(true));
			});
		} else {
			setMenuShown(false);
			t = setTimeout(() => setMobileMounted(false), 250);
		}

		return () => {
			if (t) clearTimeout(t);
			if (raf1) cancelAnimationFrame(raf1);
			if (raf2) cancelAnimationFrame(raf2);
		};
	}, [mobileOpen]);

	useEffect(() => {
		document.body.classList.toggle("overflow-hidden", mobileMounted);
		return () => document.body.classList.remove("overflow-hidden");
	}, [mobileMounted]);

	// Close dropdown on Escape
	useEffect(() => {
		function onKeyDown(e: KeyboardEvent) {
			if (e.key === "Escape") setServicesOpen(false);
		}
		if (servicesOpen) window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [servicesOpen]);

	function openServices() {
		if (servicesCloseTimer.current)
			clearTimeout(servicesCloseTimer.current);
		setServicesOpen(true);
	}

	function closeServicesSoon() {
		if (servicesCloseTimer.current)
			clearTimeout(servicesCloseTimer.current);
		servicesCloseTimer.current = setTimeout(
			() => setServicesOpen(false),
			120,
		);
	}

	return (
		<>
			<header className="sticky top-0 z-60 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
				<Container
					className="flex items-center justify-between py-3"
					size="wide"
				>
					<Link href="/" className="flex items-center gap-3">
						<Image
							src="/elevate-main-logo.png"
							width={140}
							height={40}
							alt="Elevate DevWorks"
							priority
						/>
					</Link>

					{/* Desktop nav */}
					<nav className="hidden md:flex items-center gap-7 text-sm text-gray-900">
						<Link
							href="/about/"
							className="rounded-md px-1 py-1 transition hover:text-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/40"
						>
							About
						</Link>

						{/* Services dropdown */}
						<div
							className="relative"
							onMouseEnter={openServices}
							onMouseLeave={closeServicesSoon}
						>
							<button
								type="button"
								aria-haspopup="menu"
								aria-expanded={servicesOpen}
								onFocus={openServices}
								onBlur={closeServicesSoon}
								onClick={() => setServicesOpen((v) => !v)}
								className="inline-flex items-center gap-1 rounded-md px-1 py-1 transition hover:text-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/40"
							>
								Services
								<span
									aria-hidden
									className={[
										"ml-1 inline-block text-gray-500 transition-transform",
										servicesOpen ? "rotate-180" : "",
									].join(" ")}
								>
									▾
								</span>
							</button>

							{servicesOpen && (
								<div
									role="menu"
									aria-label="Services submenu"
									className="absolute left-0 mt-3 w-64 rounded-2xl border bg-white p-2 shadow-[0_12px_30px_rgba(0,0,0,0.10)]"
									onMouseEnter={openServices}
									onMouseLeave={closeServicesSoon}
								>
									<div className="px-3 py-2">
										<div className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
											Services
										</div>
										<div className="mt-1 text-xs text-gray-500">
											Quick access to service details.
										</div>
									</div>

									<div className="h-px bg-gray-100 my-1" />

									{servicesLinks.map((item) => (
										<Link
											key={item.href}
											href={item.href}
											role="menuitem"
											onClick={() =>
												setServicesOpen(false)
											}
											className="group flex items-center justify-between rounded-xl px-3 py-2 text-sm text-gray-900 hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/40 pl-8"
										>
											<span>{item.label}</span>
											<span
												aria-hidden
												className="text-gray-400 transition group-hover:text-emerald-700"
											>
												→
											</span>
										</Link>
									))}

									<div className="h-px bg-gray-100 my-1" />

									<div className="px-3 py-2">
										<div className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
											Website Kits
										</div>
										<div className="mt-1 text-xs text-gray-500"></div>
									</div>

									<div className="h-px bg-gray-100 my-1" />

									{kitLinks.map((item) => (
										<Link
											key={item.href}
											href={item.href}
											role="menuitem"
											onClick={() =>
												setServicesOpen(false)
											}
											className="group flex items-center justify-between rounded-xl px-3 py-2 text-sm text-gray-900 hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/40 pl-8"
										>
											<span>{item.label}</span>
											<span
												aria-hidden
												className="text-gray-400 transition group-hover:text-emerald-700"
											>
												→
											</span>
										</Link>
									))}

									<div className="h-px bg-gray-100 my-1" />

									<Link
										href="/services/"
										role="menuitem"
										onClick={() => setServicesOpen(false)}
										className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/40"
									>
										<span>All services & packages</span>
										<span aria-hidden>→</span>
									</Link>
								</div>
							)}
						</div>

						<Link
							href="/work/"
							className="rounded-md px-1 py-1 transition hover:text-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/40"
						>
							Work
						</Link>

						<Link
							href="/contact/"
							className="rounded-md px-1 py-1 transition hover:text-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/40"
						>
							Contact
						</Link>
					</nav>

					<div className="flex items-center gap-2">
						<Link
							href="/contact/"
							className="hidden md:inline-flex items-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(16,185,129,0.25)] transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/50"
						>
							Discuss your Project
						</Link>

						<button
							type="button"
							className="md:hidden inline-flex items-center justify-center rounded-xl border bg-white/70 px-3 py-2 text-sm shadow-sm transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/40"
							aria-expanded={mobileOpen}
							aria-controls="mobile-menu"
							aria-label="Toggle menu"
							onClick={() => {
								setMobileOpen((v) => !v);
								// reset accordion when opening
								if (!mobileOpen) setMobileServicesOpen(false);
							}}
						>
							<div className="h-5 w-6 flex flex-col items-center justify-center gap-1">
								<span
									className={`block h-0.5 w-6 bg-current transition-transform duration-300 ease-in-out ${
										mobileOpen
											? "translate-y-1.5 rotate-45"
											: ""
									}`}
								/>
								<span
									className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ease-in-out ${
										mobileOpen ? "opacity-0" : "opacity-100"
									}`}
								/>
								<span
									className={`block h-0.5 w-6 bg-current transition-transform duration-300 ease-in-out ${
										mobileOpen
											? "-translate-y-1.5 -rotate-45"
											: ""
									}`}
								/>
							</div>
						</button>
					</div>
				</Container>
			</header>

			{/* Mobile menu */}
			{mobileMounted && (
				<div className="md:hidden fixed inset-0 z-[60]">
					<div
						className={`absolute inset-0 transition-opacity duration-300 ${
							menuShown ? "opacity-100" : "opacity-0"
						}`}
						style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
						onClick={() => setMobileOpen(false)}
					/>

					<nav
						id="mobile-menu"
						className={`absolute left-0 right-0 top-4 mx-4 rounded-3xl border bg-white p-4 pb-6
  shadow-[0_20px_50px_rgba(0,0,0,0.18)]
  max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain
  origin-top transform transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
		menuShown ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
  }`}
						style={{ willChange: "transform, opacity" }}
						aria-label="Mobile menu"
					>
						<div className="flex items-center justify-between px-2 pt-1 relatve">
							<div className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
								Menu
							</div>
							<button
								type="button"
								onClick={() => setMobileOpen(false)}
								className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-white shadow-sm hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/40"
								aria-label="Close menu"
							>
								<span
									aria-hidden
									className="text-xl leading-none"
								>
									×
								</span>
							</button>
						</div>

						<div className="mt-3 space-y-1">
							<Link
								href="/about/"
								onClick={() => setMobileOpen(false)}
								className="block rounded-2xl px-3 py-3 text-lg font-semibold text-gray-900 hover:bg-neutral-50"
							>
								About
							</Link>

							{/* Services accordion */}
							<button
								type="button"
								onClick={() => setMobileServicesOpen((v) => !v)}
								className="w-full rounded-2xl px-3 py-3 text-left text-lg font-semibold text-gray-900 hover:bg-neutral-50"
								aria-expanded={mobileServicesOpen}
							>
								<div className="flex items-center justify-between">
									<span>Services</span>
									<span
										aria-hidden
										className={[
											"text-gray-500 transition-transform",
											mobileServicesOpen
												? "rotate-180"
												: "",
										].join(" ")}
									>
										▾
									</span>
								</div>
								<div className="mt-1 text-sm font-normal text-gray-500">
									Web Design, Care, Maintenance, SEO
								</div>
							</button>

							<div
								className={[
									"grid transition-all duration-200 ease-out",
									mobileServicesOpen
										? "grid-rows-[1fr] opacity-100"
										: "grid-rows-[0fr] opacity-0",
								].join(" ")}
							>
								<div className="overflow-hidden">
									<div className="mt-1 rounded-2xl border bg-neutral-50/60 p-2">
										<div className="px-3 py-2">
											<div className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
												Services
											</div>
											<div className="mt-1 text-xs text-gray-500"></div>
										</div>
										{servicesLinks.map((item) => (
											<Link
												key={item.href}
												href={item.href}
												onClick={() =>
													setMobileOpen(false)
												}
												className="flex items-center justify-between rounded-xl px-3 py-3 text-base text-gray-900 hover:bg-white pl-10"
											>
												<span>{item.label}</span>
												<span
													aria-hidden
													className="text-gray-400"
												>
													→
												</span>
											</Link>
										))}
										<div className="px-3 py-2">
											<div className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
												Website Kits
											</div>
											<div className="mt-1 text-xs text-gray-500"></div>
										</div>
										{kitLinks.map((item) => (
											<Link
												key={item.href}
												href={item.href}
												onClick={() =>
													setMobileOpen(false)
												}
												className="flex items-center justify-between rounded-xl px-3 py-3 text-base text-gray-900 hover:bg-white pl-10"
											>
												<span>{item.label}</span>
												<span
													aria-hidden
													className="text-gray-400"
												>
													→
												</span>
											</Link>
										))}
										<div className="h-px bg-gray-200 my-1" />
										<Link
											href="/services/"
											onClick={() => setMobileOpen(false)}
											className="flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-emerald-700 hover:bg-white"
										>
											<span>All services & packages</span>
											<span aria-hidden>→</span>
										</Link>
									</div>
								</div>
							</div>

							<Link
								href="/work/"
								onClick={() => setMobileOpen(false)}
								className="block rounded-2xl px-3 py-3 text-lg font-semibold text-gray-900 hover:bg-neutral-50"
							>
								Work
							</Link>

							<Link
								href="/contact/"
								onClick={() => setMobileOpen(false)}
								className="block rounded-2xl px-3 py-3 text-lg font-semibold text-gray-900 hover:bg-neutral-50"
							>
								Contact
							</Link>
						</div>

						<div className="mt-4">
							<Link
								href="/contact/"
								onClick={() => setMobileOpen(false)}
								className="block w-full rounded-2xl bg-emerald-600 px-4 py-4 text-center text-lg font-semibold text-white shadow-[0_16px_30px_rgba(16,185,129,0.28)] transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/50"
							>
								Discuss your project
							</Link>
						</div>
					</nav>
				</div>
			)}
		</>
	);
}
