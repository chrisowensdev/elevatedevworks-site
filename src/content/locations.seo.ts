import type { LocationPageEntry } from "@/types/location-pages";

export const seoLocations: LocationPageEntry[] = [
	{
		slug: "richmond-va",
		city: "Richmond",
		state: "VA",
		meta: {
			title: "SEO Richmond VA | Local SEO for Small Businesses",
			description:
				"Improve your search visibility with Richmond SEO services focused on site structure, local relevance, technical foundations, and better lead generation.",
		},
		hero: {
			headline: "SEO for Richmond small businesses",
			subtext:
				"Elevate DevWorks helps Richmond businesses improve search visibility with clear site structure, stronger service pages, local relevance, and technical foundations that support long-term growth.",
		},
		localSection: {
			headline: "Working with businesses in Richmond and nearby areas",
			body: "We work with businesses in Richmond, Henrico, Chesterfield, and nearby areas that want to improve how they appear in search without relying on bloated SEO packages or unclear reporting. The goal is to create a stronger foundation so your website supports visibility, trust, and lead generation over time.",
			bullets: [
				"SEO improvements tied to real business goals",
				"Clean site structure built around services and locations",
				"Support that keeps visibility efforts practical and sustainable",
			],
		},
		finalCta: {
			headline: "Ready to improve your website in Richmond?",
			subtext:
				"If you want better visibility, clearer service targeting, and a stronger SEO foundation, let's talk through what your site needs.",
		},
		faqOverrides: [
			{
				id: "service-areas",
				question: "Do you only help businesses in Richmond?",
				answer: "No. We can help remotely, but this page is focused on Richmond-area businesses because local relevance matters when building service pages and SEO structure. We also work with nearby areas like Henrico, Chesterfield, Mechanicsville, and Short Pump.",
			},
		],
		priority: "high",
		index: true,
	},
	{
		slug: "henrico-va",
		city: "Henrico",
		state: "VA",
		meta: {
			title: "SEO Henrico VA | Local SEO for Small Businesses | Elevate DevWorks",
			description:
				"SEO for Henrico small businesses focused on local relevance, technical foundations, service page targeting, and better long-term visibility.",
		},
		hero: {
			headline: "SEO for Henrico small businesses",
			subtext:
				"Elevate DevWorks helps Henrico businesses improve search visibility with stronger service pages, cleaner site structure, local relevance, and technical SEO foundations that support better long-term lead generation.",
		},
		localSection: {
			headline: "Working with businesses in Henrico and nearby areas",
			body: "We work with businesses in Henrico, Richmond, and nearby areas that want to improve how they appear in search without relying on bloated SEO packages or vague reporting. The goal is to build a stronger foundation for long-term visibility and lead generation.",
			bullets: [
				"Practical SEO improvements tied to real business goals",
				"Clean site structure built around services and locations",
				"Ongoing support for steady, sustainable growth",
			],
		},
		finalCta: {
			headline: "Ready to improve your SEO in Henrico?",
			subtext:
				"If you want better visibility, clearer service targeting, and a stronger SEO foundation, let's talk through what your site needs.",
		},
		faqOverrides: [
			{
				id: "service-areas",
				question: "Do you only help businesses in Henrico?",
				answer: "No. We can help remotely, but this page is focused on Henrico businesses because local relevance matters when building service pages and SEO structure. We also work with nearby areas like Richmond, Chesterfield, Mechanicsville, and Short Pump.",
			},
		],
		index: true,
	},
];
