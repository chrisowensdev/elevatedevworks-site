// components/Header.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Container from "./Container";
import Link from "next/link";

const BRAND = { primary: "#2175a2", accent: "#21a37c" };

export default function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);
	// Keep menu mounted long enough to animate out
	const [mobileMounted, setMobileMounted] = useState(false);
	// Drive enter/exit animation separately from open state
	const [menuShown, setMenuShown] = useState(false);

	useEffect(() => {
		let t: ReturnType<typeof setTimeout> | undefined;
		let raf1: number | undefined;
		let raf2: number | undefined;
		if (mobileOpen) {
			setMobileMounted(true);
			// Ensure initial hidden state paints before showing (prevents snap)
			raf1 = window.requestAnimationFrame(() => {
				raf2 = window.requestAnimationFrame(() => setMenuShown(true));
			});
		} else {
			setMenuShown(false);
			t = setTimeout(() => setMobileMounted(false), 300);
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

	return (
		<>
			<header
				className="sticky top-0 z-50 border-b backdrop-blur"
				style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
			>
				<Container>
					<div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
						<Link href="/" className="flex items-center gap-3">
							<Image
								src="/elevate-main-logo.png"
								width={140}
								height={40}
								alt="profile Image"
							/>
						</Link>

						<nav className="hidden md:flex gap-6 text-sm">
							<a href="/about" className="hover:opacity-70">
								About
							</a>
							<a href="/services" className="hover:opacity-70">
								Services
							</a>
							<a href="/work" className="hover:opacity-70">
								Work
							</a>
							<a href="/contact" className="hover:opacity-70">
								Contact
							</a>
						</nav>

						<div className="flex items-center gap-2">
							<a
								href="#contact"
								aria-label="Get a free website assessment"
								className="hidden md:inline-flex rounded-xl px-3 py-2 text-sm text-white transition"
								style={{ background: BRAND.primary }}
							>
								Free Assessment
							</a>
							<button
								type="button"
								className="md:hidden inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm"
								aria-expanded={mobileOpen}
								aria-controls="mobile-menu"
								aria-label="Toggle menu"
								onClick={() => setMobileOpen((v) => !v)}
							>
								<span className="sr-only">Menu</span>
								{/* Hamburger icon that transitions to an X */}
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
											mobileOpen
												? "opacity-0"
												: "opacity-100"
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
					</div>
				</Container>
			</header>

			{mobileMounted && (
				<div className="md:hidden fixed inset-0 z-[60]">
					<div
						className={`absolute inset-0 transition-opacity duration-300 ${
							menuShown ? "opacity-100" : "opacity-0"
						}`}
						style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
						onClick={() => setMobileOpen(false)}
					/>
					<nav
						id="mobile-menu"
						className={`absolute top-14 left-0 right-0 mx-4 rounded-2xl border bg-white p-4 shadow-lg origin-top transform transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
							menuShown
								? "translate-y-0 opacity-100"
								: "-translate-y-6 opacity-0"
						}`}
						style={{ willChange: "transform, opacity" }}
					>
						<a
							href="/about"
							onClick={() => setMobileOpen(false)}
							className="block rounded-lg px-3 py-3 text-base hover:bg-neutral-50"
						>
							About
						</a>
						<a
							href="/services"
							onClick={() => setMobileOpen(false)}
							className="block rounded-lg px-3 py-3 text-base hover:bg-neutral-50"
						>
							Services
						</a>
						<a
							href="/work"
							onClick={() => setMobileOpen(false)}
							className="block rounded-lg px-3 py-3 text-base hover:bg-neutral-50"
						>
							Work
						</a>
						<a
							href="/contact"
							onClick={() => setMobileOpen(false)}
							aria-label="Get a free website assessment"
							className="mt-2 block rounded-xl px-4 py-3 text-center text-white font-medium hover:opacity-90"
							style={{ background: BRAND.primary }}
						>
							Free Assessment
						</a>
					</nav>
				</div>
			)}
		</>
	);
}
