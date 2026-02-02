// components/Footer.tsx
import { SocialIcons } from "@/components/social";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/content/siteConfig";

export default function Footer() {
	return (
		<footer className="bg-brand/95 border-t border-slate-200 py-12 z-50">
			<div className="mx-auto max-w-6xl px-4 lg:px-6">
				<div className="grid gap-10 md:grid-cols-4">
					{/* Column 1: Brand */}
					<div>
						<Link href="/" className="flex items-center gap-3">
							<Image
								src="/elevate-main-logo-white.png"
								width={140}
								height={40}
								alt="profile Image"
							/>
						</Link>

						<p className="mt-4 text-xs text-white/60">
							Based in Richmond, Virginia. Serving clients locally
							and nationwide.
						</p>
					</div>

					{/* Column 2: Navigation */}
					<div>
						<h4 className="text-sm font-semibold text-white">
							Navigation
						</h4>
						<ul className="mt-3 space-y-2 text-sm text-white/80">
							<li>
								<a href="/" className="hover:text-white">
									Home
								</a>
							</li>
							<li>
								<a href="/about/" className="hover:text-white">
									About
								</a>
							</li>
							<li>
								<a
									href="/services/"
									className="hover:text-white"
								>
									Services
								</a>
							</li>

							<li>
								<a href="/work/" className="hover:text-white">
									Work
								</a>
							</li>
							<li>
								<a
									href="/contact/"
									className="hover:text-slate-900"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>

					{/* Column 3: Contact */}
					<div>
						<h4 className="text-sm font-semibold text-white">
							Contact
						</h4>
						<ul className="mt-3 space-y-2 text-sm text-white/60">
							<li>
								Phone:{" "}
								<a
									href={`tel:${siteConfig.phone.replaceAll(
										"-",
										"",
									)}`}
									className="text-white/80 hover:text-white"
								>
									{siteConfig.phone}
								</a>
							</li>
							<li>
								Email:{" "}
								<a
									href={`mailto:${siteConfig.email}`}
									className="text-white/80 hover:text-white"
								>
									{siteConfig.email}
								</a>
							</li>
							<li className="pt-2 text-xs text-white/60">
								Hours: {siteConfig.officeHours}
							</li>
						</ul>
					</div>

					{/* Column 4: Legal */}
					<div>
						<h4 className="text-sm font-semibold text-white">
							Legal
						</h4>
						<ul className="mt-3 space-y-2 text-sm text-white/60">
							<li>
								<a href="/terms/" className="hover:text-white">
									Terms
								</a>
							</li>
							<li>
								<a
									href="/privacy/"
									className="hover:text-white"
								>
									Privacy Policy
								</a>
							</li>
						</ul>
					</div>
				</div>
				<SocialIcons className="text-white/70" />

				{/* Bottom row */}
				<div className="mt-10 border-t border-slate-300 pt-6 text-center text-xs text-white/80">
					© {new Date().getFullYear()} Elevate DevWorks. All rights
					reserved.
				</div>
			</div>
		</footer>
	);
}
