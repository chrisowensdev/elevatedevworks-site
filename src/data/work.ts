export const items = [
	{
		title: "HVAC Demo",
		tag: "Home Services",
		img: "hvac",
		alt: "HVAC website demo",
		desc: "Fast, mobile-first site with a quote-request funnel, service-area pages, and reviews to drive calls.",
		href: "/",
		highlight: true,
		slug: "hvac",
		ariaLabel: "Peak Performance case study",
	},
	{
		title: "Landscaping",
		tag: "Professional Services",
		img: "landscaping",
		alt: "Landscaping website",
		desc: "Trust-first layout with clear services offered, intake form, and badges—built to convert consultations and create clients.",
		href: "https://greenscape.elevatedevworks.com",
		highlight: true,
		slug: "greenscape",
		ariaLabel: "Greenscape Landscaping case study",
	},
	// {
	// 	title: "Law Firm",
	// 	tag: "Professional Services",
	// 	img: "law",
	// 	alt: "Law firm website",
	// 	desc: "Trust-first layout with clear practice areas, intake form, and badges—built to convert consultations and create clients.",
	// 	href: "https://thebulgerfirm.netlify.app",
	// 	highlight: false,
	// 	slug: "law",
	// },
	{
		title: "Invoice Ways",
		tag: "Mobile App",
		img: "invoiceways",
		alt: "InvoiceWays Landing Page",
		desc: "Cross-platform invoicing app (Web/iOS/Android) with estimates, branded PDFs, and Stripe-powered payments.",
		href: "https://invoiceways.com",
		highlight: true,
		slug: "invoiceways",
		ariaLabel: "InvoiceWays case study",
	},
];

export const highlightedItems = items.filter((item) => {
	return item.highlight;
});
