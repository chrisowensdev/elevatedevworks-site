// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
	return (
		<main className="flex flex-col items-center justify-center min-h-screen text-center p-6">
			<h1 className="text-3xl font-semibold mb-3">Page Not Found</h1>
			<p className="mb-5 text-gray-600">
				The page you’re looking for doesn’t exist or was moved.
			</p>
			<Link
				href="/"
				className="px-5 py-2 bg-[#2175a2] text-white rounded-lg hover:bg-[#21a37c] transition"
			>
				Go Back Home
			</Link>
		</main>
	);
}
