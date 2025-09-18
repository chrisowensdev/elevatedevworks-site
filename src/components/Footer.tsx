// components/Footer.tsx
export default function Footer() {
	return (
		<footer className="border-t bg-white">
			<div className="mx-auto max-w-7xl px-4 py-10 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-4">
				<p>
					© {new Date().getFullYear()} Elevate DevWorks • Founded by
					Chris Owens
				</p>
				<div className="flex gap-4">
					<a href="/privacy" className="hover:opacity-70">
						Privacy
					</a>
					<a href="/terms" className="hover:opacity-70">
						Terms
					</a>
				</div>
			</div>
		</footer>
	);
}
