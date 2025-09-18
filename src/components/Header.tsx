// components/Header.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Container from "./Container";
import Link from "next/link";

const BRAND = { primary: "#2175a2", accent: "#21a37c" };

export default function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		document.body.classList.toggle("overflow-hidden", mobileOpen);
		return () => document.body.classList.remove("overflow-hidden");
	}, [mobileOpen]);

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
							<a href="#about" className="hover:opacity-70">
								About
							</a>
							<a href="#services" className="hover:opacity-70">
								Services
							</a>
							<a href="#work" className="hover:opacity-70">
								Work
							</a>
							<a href="#contact" className="hover:opacity-70">
								Contact
							</a>
						</nav>

						<div className="flex items-center gap-2">
							<a
								href="#contact"
								className="hidden md:inline-flex rounded-xl px-3 py-2 text-sm text-white transition"
								style={{ background: BRAND.primary }}
							>
								Free Website Assessment
							</a>
							<button
								className="md:hidden inline-flex items-center justify-center rounded-lg border px-3 py-2 text-sm"
								aria-expanded={mobileOpen}
								aria-controls="mobile-menu"
								aria-label="Toggle menu"
								onClick={() => setMobileOpen((v) => !v)}
							>
								<span className="sr-only">Menu</span>
								<div className="h-5 w-5 grid place-items-center">
									{!mobileOpen ? "≡" : "×"}
								</div>
							</button>
						</div>
					</div>
				</Container>
			</header>

			{mobileOpen && (
				<div className="md:hidden fixed inset-0 z-[60]">
					<div
						className="absolute inset-0"
						style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
						onClick={() => setMobileOpen(false)}
					/>
					<nav
						id="mobile-menu"
						className="absolute top-14 left-0 right-0 mx-4 rounded-2xl border bg-white p-4 shadow-lg"
					>
						<a
							href="#about"
							onClick={() => setMobileOpen(false)}
							className="block rounded-lg px-3 py-3 text-base hover:bg-neutral-50"
						>
							About
						</a>
						<a
							href="#services"
							onClick={() => setMobileOpen(false)}
							className="block rounded-lg px-3 py-3 text-base hover:bg-neutral-50"
						>
							Services
						</a>
						<a
							href="#work"
							onClick={() => setMobileOpen(false)}
							className="block rounded-lg px-3 py-3 text-base hover:bg-neutral-50"
						>
							Work
						</a>
						<a
							href="#contact"
							onClick={() => setMobileOpen(false)}
							className="mt-2 block rounded-xl px-4 py-3 text-center text-white font-medium hover:opacity-90"
							style={{ background: BRAND.primary }}
						>
							Free Website Assessment
						</a>
					</nav>
				</div>
			)}
		</>
	);
}
