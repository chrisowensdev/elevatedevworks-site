import { site } from "@/content/site";

export default function SEOJsonLd() {
	const baseUrl = "https://elevatedevworks.com";

	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "LocalBusiness",
				"@id": `${baseUrl}#business`,
				name: "Elevate DevWorks",
				url: baseUrl,
				description:
					"Elevate DevWorks is a Richmond, VA-based web and software development company specializing in custom websites, web apps, and mobile applications.",
				image: `${baseUrl}/elevate_devworks_seo_image.png`, // or your logo
				logo: `${baseUrl}/elevate-logo-symbol-48x48.png`,
				telephone: site.phone ?? undefined,
				address: {
					"@type": "PostalAddress",
					addressLocality: "Richmond",
					addressRegion: "VA",
					addressCountry: "US",
				},
				areaServed: {
					"@type": "AdministrativeArea",
					name: "United States",
				},
				sameAs: [
					// replace with your actual profiles
					"https://github.com/chrisowensdev",
					"https://www.linkedin.com/in/chrisowensdev", // example
				],
			},
			{
				"@type": "WebSite",
				"@id": `${baseUrl}#website`,
				url: baseUrl,
				name: "Elevate DevWorks",
				description:
					"Web and application development for small businesses and creative professionals.",
				publisher: {
					"@id": `${baseUrl}#business`,
				},
				inLanguage: "en-US",
				potentialAction: {
					"@type": "SearchAction",
					target: `${baseUrl}/search?q={search_term_string}`,
					"query-input": "required name=search_term_string",
				},
			},
		],
	};

	return (
		<script
			type="application/ld+json"
			suppressHydrationWarning
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	);
}
