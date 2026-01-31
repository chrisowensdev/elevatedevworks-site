export type CaseStudy = {
	slug: string;
	name: string;
	subtitle: string;
	intro: string;
	details: {
		industry: string;
		websiteType: string;
		techStack: string;
	};
	goals: string;
	features: Array<{ title: string; description: string }>;
	designPhilosophy: string;
	demoUrl?: string;
	demoButtonText?: string;
	closingTitle: string;
	closingText: string;
	image: string;
	metaDescription: string;
};

export const caseStudies: CaseStudy[] = [
	{
		slug: "greenscape",
		name: "Greenscape Landscaping",
		subtitle: "Website Design & Development",
		intro: "Greenscape Landscaping is a fully designed and developed demonstration website created by Elevate DevWorks to showcase modern, high-performance web solutions for local service businesses.",
		details: {
			industry: "Landscaping / Lawn Care",
			websiteType: "Local Service / Lead Generation",
			techStack: "Next.js, Tailwind CSS, Static Export",
		},
		goals: "Create a fast, professional website template that helps local contractors communicate services clearly, build trust, and drive quote requests from homeowners searching online.",
		features: [
			{
				title: "Conversion-Focused Homepage",
				description:
					"Concise messaging, strong CTA placement, and trust-building content designed to encourage quote requests.",
			},
			{
				title: "Services Overview & Detail Pages",
				description:
					"A structured services index with SEO-friendly detail pages for each core service offering.",
			},
			{
				title: "Local SEO Optimization",
				description:
					"Location-focused headings, metadata, and LocalBusiness JSON-LD schema to support local visibility.",
			},
			{
				title: "Responsive Map Integration",
				description:
					"A responsive Google Map embed on the contact page that remains static-export friendly.",
			},
		],
		designPhilosophy:
			"Earth-tone styling, generous spacing, and a simple content hierarchy to keep the site approachable, modern, and easy to scan on mobile.",
		demoUrl: "https://greenscape-demo.elevatedevworks.com",
		demoButtonText: "Visit Demo Website",
		closingTitle: "Interested in a Similar Website?",
		closingText:
			"Elevate DevWorks builds fast, modern websites for local service businesses that want more leads and a stronger online presence. If you’re a contractor or small business owner looking to upgrade your site, let’s talk.",
		image: "landscaping",
		metaDescription:
			"A landscaping website demo designed for clear services, local trust, and quick lead capture with a mobile-first layout.",
	},
	{
		slug: "clearpath",
		name: "ClearPath Health Advisors",
		subtitle: "Website Design & Development",
		intro: "ClearPath Health Advisors is a fully designed and developed demonstration website created by Elevate DevWorks to showcase our niche-specific solutions for independent licensed health advisors and Medicare agents. This demo highlights EDW’s ability to deliver professional, conversion-focused websites that build trust, communicate value clearly, and generate high-quality leads.",
		details: {
			industry: "Health Advisor / Medicare Agent",
			websiteType: "Lead Generation / Professional Services",
			techStack: "Next.js, Tailwind CSS, Static Export",
		},
		goals: "Health advisors operate in a trust-driven industry where clarity, compliance, and accessibility are essential. The goal of this project was to create a clean, modern, and compliant website template that any advisor can easily adopt and brand. This includes strong call-to-action structure, transparent service explanations, and educational resources designed to help visitors make informed decisions.",
		features: [
			{
				title: "Conversion-Optimized Homepage",
				description:
					"A focused hero with primary + secondary CTAs, authority signals, and trust-building messaging tailored to Medicare and health insurance audiences.",
			},
			{
				title: "Service (Plans) Breakdown",
				description:
					"							- A clear, plain-language overview of Medicare, ACA Marketplace, and supplemental plan support—written for seniors and families with no jargon.",
			},
			{
				title: "Professional About Page",
				description:
					"A clean advisor bio layout that emphasizes trust, experience, and licensing transparency. Includes placeholder demo identity messaging.",
			},
			{
				title: "Resource Library (Markdown Based)",
				description:
					"A lightweight and fast system for advisors to publish educational articles. Built using Markdown files for easy content management, static SEO benefits, and zero backend maintenance.",
			},
			{
				title: "FAQ System",
				description:
					"A dedicated FAQ section addressing common Medicare and health plan questions with expandable interactive content.",
			},
			{
				title: "Demo-Safe Contact Form",
				description:
					"A realistic contact form experience that simulates the user journey while clearly stating the website is a demonstration and does not process submissions.",
			},
			{
				title: "Compliance-Focused Notices",
				description:
					"Includes Medicare-required disclaimers and global “demo site” notices across the footer and contact sections.",
			},
		],
		designPhilosophy:
			"The design uses a light, calming color palette and clean layout to reinforce trust and readability—especially important for older audiences. Typography is large, accessible, and mobile-friendly. Calls-to-action are strategically placed and consistently worded across the site for clarity and effectiveness.",
		demoUrl: "https://clearpath.elevatedevworks.com",
		demoButtonText: "Visit Demo Website",
		closingTitle: "Interested in a Similar Website?",
		closingText:
			"This demo showcases a complete advisor website framework. For real-world implementations, all content, images, branding, and legal requirements would be customized for the licensed advisor.",
		image: "clearpath",
		metaDescription:
			"A modern, performance-focused website demo for ClearPath, built to highlight clarity, trust, and a smooth path to contact.",
	},
];
