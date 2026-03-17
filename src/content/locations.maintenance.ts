import type { LocationPageEntry } from "@/types/location-pages";

export const maintenanceLocations: LocationPageEntry[] = [
	{
		slug: "richmond-va",
		city: "Richmond",
		state: "VA",
		meta: {
			title: "Website Maintenance Richmond VA | Ongoing Website Support",
			description:
				"Richmond website maintenance for small businesses that need reliable updates, technical support, and ongoing help to keep their site running smoothly.",
		},
		hero: {
			headline: "Website maintenance for Richmond small businesses",
			subtext:
				"Elevate DevWorks helps Richmond businesses keep their websites updated, supported, and running smoothly with practical maintenance that protects performance, reduces friction, and makes future changes easier.",
		},
		localSection: {
			headline: "Working with businesses in Richmond and nearby areas",
			body: "We work with businesses in Richmond, Henrico, Chesterfield, and nearby areas that want dependable website support without overcomplicated retainers or vague maintenance plans. The goal is to keep your website easier to manage, easier to trust, and better aligned with what your business needs over time.",
			bullets: [
				"Practical support for updates, fixes, and small improvements",
				"Maintenance that protects usability, performance, and trust",
				"Flexible help for small business owners and lean teams",
			],
		},
		faqOverrides: [
			{
				id: "service-area",
				question: "Do you only help businesses in Richmond?",
				answer: "No. We can help remotely, but this page is focused on Richmond-area businesses and nearby locations where local service visibility matters. We also work with businesses in surrounding areas like Henrico, Chesterfield, Mechanicsville, and Short Pump",
			},
		],
		finalCta: {
			headline: "Ready for more reliable website support in Richmond?",
			subtext:
				"If you want a simpler way to handle updates, fixes, and ongoing website needs, let's talk through what support makes sense for your business.",
		},
		priority: "high",
		index: true,
	},

	{
		slug: "henrico-va",
		city: "Henrico",
		state: "VA",
		meta: {
			title: "Website Maintenance Henrico VA | Ongoing Website Support",
			description:
				"Website maintenance for Henrico small businesses that need reliable updates, technical support, and ongoing help to keep their site running smoothly.",
		},
		hero: {
			headline: "Website maintenance for Henrico small businesses",
			subtext:
				"Elevate DevWorks helps Henrico businesses keep their websites updated, supported, and running smoothly with practical maintenance that protects performance, reduces friction, and makes future changes easier.",
		},
		localSection: {
			headline: "Working with businesses in Henrico and nearby areas",
			body: "We work with businesses in Henrico, Richmond, and surrounding areas that want dependable website support without overcomplicated retainers or vague maintenance plans. The goal is to keep your website easier to manage, easier to trust, and better aligned with what your business needs over time.",
			bullets: [
				"Practical support for updates, fixes, and small improvements",
				"Maintenance that protects usability, performance, and trust",
				"Flexible help for small business owners and lean teams",
			],
		},
		faqOverrides: [
			{
				id: "service-area",
				question: "Do you only help businesses in Henrico?",
				answer: "No. We can help remotely, but this page is focused on Henrico-area businesses and nearby locations where local service visibility matters. We also work with businesses in surrounding areas like Richmond, Chesterfield, Mechanicsville, and Short Pump",
			},
		],
		finalCta: {
			headline: "Ready for more reliable website support in Henrico?",
			subtext:
				"If you want a simpler way to handle updates, fixes, and ongoing website needs, let’s talk through what support makes sense for your business.",
		},
		index: true,
	},
];
