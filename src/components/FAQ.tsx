// components/FAQ.tsx
import Container from "./Container";

const faqs = [
  {
    q: "What kinds of businesses do you work with?",
    a: "We partner with service businesses, professional firms, SaaS, and local companies that need a fast, credible site that generates leads. We tailor strategy, design, and SEO to your market and goals.",
  },
  {
    q: "How long does a website project take?",
    a: "Most small business sites launch in 3–6 weeks depending on scope—content readiness, number of pages, integrations, and feedback turnaround are the biggest drivers of timeline.",
  },
  {
    q: "Do you offer SEO? What results can I expect?",
    a: "Yes. Every build includes technical and on-page SEO (titles, meta, headings, schema), plus performance tuning for Core Web Vitals. Ongoing SEO can include content, internal linking, and local SEO to grow qualified traffic and conversions.",
  },
  {
    q: "Next.js or WordPress—what’s right for me?",
    a: "It depends on content needs and workflows. Next.js excels at speed and flexibility; WordPress is great for marketing teams that want rich editing. We’ll recommend the best fit after discovery.",
  },
  {
    q: "How much does a website cost?",
    a: "Typical engagements start with a discovery-based fixed scope. Small sites often start around $3k–$8k; more complex builds and integrations are quoted after scoping. Ongoing hosting and maintenance plans are billed monthly.",
  },
  {
    q: "Do you provide hosting and maintenance?",
    a: "Yes. Managed hosting includes SSL/CDN, automated backups, updates, uptime and security monitoring, and a monthly report with traffic and SEO highlights.",
  },
  {
    q: "Will my site be fast and accessible?",
    a: "Performance and accessibility are core requirements. We build mobile-first, optimize images and scripts, and follow WCAG guidelines to ensure your site is usable and fast for everyone.",
  },
  {
    q: "Do you migrate content and set up redirects?",
    a: "We handle content migration, URL mapping, and 301 redirects to protect SEO during launch. We also submit sitemaps and verify indexing in Search Console.",
  },
];

export default function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <section aria-labelledby="faq-heading">
      <Container className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <h2 id="faq-heading" className="text-2xl md:text-3xl font-semibold">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-neutral-700 max-w-3xl">
          Quick answers to common questions about process, timelines, pricing, and SEO.
        </p>
        <div className="mt-8 grid gap-4">
          {faqs.map((item) => (
            <details key={item.q} className="rounded-xl border bg-white p-4">
              <summary className="cursor-pointer text-base font-medium">
                {item.q}
              </summary>
              <p className="mt-2 text-neutral-700">{item.a}</p>
            </details>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Container>
    </section>
  );
}

