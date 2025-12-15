export type Project = {
	title: string;
	tag: string;
	img: string;
	alt: string;
	desc: string;
	liveUrl: string;
	featured?: boolean;
	slug: string;
	ariaLabel: string;
	hasCaseStudy?: boolean;
};

export const projects = [
	{
		title: "ClearPath Health Advisor",
		tag: "Health Advisor",
		img: "clearpath",
		alt: "Health Advisor website demo",
		desc: "Fast, mobile-first site with a quote-request funnel, service-area pages, and reviews to drive calls.",
		liveUrl: "https://clearpath.elevatedevworks.com",
		featured: true,
		slug: "clearpath",
		ariaLabel: "ClearPath Health Advisor",
		hasCaseStudy: true,
	},
	{
		title: "Landscaping",
		tag: "Professional Services",
		img: "landscaping",
		alt: "Landscaping website",
		desc: "Trust-first layout with clear services offered, intake form, and badges—built to convert consultations and create clients.",
		liveUrl: "https://greenscape.elevatedevworks.com",
		featured: true,
		slug: "greenscape",
		ariaLabel: "Greenscape Landscaping case study",
		hasCaseStudy: true,
	},
	{
		title: "Invoice Ways",
		tag: "Mobile App",
		img: "invoiceways",
		alt: "InvoiceWays Landing Page",
		desc: "Cross-platform invoicing app (Web/iOS/Android) with estimates, branded PDFs, and Stripe-powered payments.",
		liveUrl: "https://invoiceways.com",
		featured: true,
		slug: "invoiceways",
		ariaLabel: "InvoiceWays case study",
	},
	// {
	// 	title: "HVAC Demo",
	// 	tag: "Home Services",
	// 	img: "hvac",
	// 	alt: "HVAC website demo",
	// 	desc: "Fast, mobile-first site with a quote-request funnel, service-area pages, and reviews to drive calls.",
	// 	href: "/",
	// 	featured: false,
	// 	slug: "hvac",
	// 	ariaLabel: "Peak Performance case study",
	// },
	// {
	// 	title: "Law Firm",
	// 	tag: "Professional Services",
	// 	img: "law",
	// 	alt: "Law firm website",
	// 	desc: "Trust-first layout with clear practice areas, intake form, and badges—built to convert consultations and create clients.",
	// 	href: "https://thebulgerfirm.netlify.app",
	// 	featured: false,
	// 	slug: "law",
	//  ariaLabel: "Law Firm Case Study"
	// },
];

export const featuredProjects = projects.filter((project) => {
	return project.featured;
});
