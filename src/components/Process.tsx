// components/Process.tsx
import Container from "./Container";

export default function Process() {
  const steps = [
    {
      title: "Discover & Plan",
      body:
        "We clarify business goals, audiences, and keywords, then map pages and funnels. You get a clear scope, timeline, and success metrics.",
      points: [
        "Stakeholder interview & requirements",
        "Keyword research & page mapping",
        "Sitemap, wireframes, and content outline",
      ],
    },
    {
      title: "Design & Copy",
      body:
        "We design a conversion-focused, mobile-first UI and shape persuasive copy that speaks to customer pain points and outcomes.",
      points: [
        "Brand-aligned visual design",
        "Clear CTAs and forms",
        "Accessibility-minded content (WCAG)",
      ],
    },
    {
      title: "Build & QA",
      body:
        "We develop a fast, secure site (Next.js or WordPress) with clean code, schema, and analytics. Everything is tested before launch.",
      points: [
        "Core Web Vitals performance",
        "On-page SEO + schema",
        "Cross-browser/device testing",
      ],
    },
    {
      title: "Launch & Measure",
      body:
        "We handle redirects, tracking, and indexing so launch is smooth. You get a baseline report and a plan for improvements.",
      points: [
        "301 redirects & XML sitemap",
        "GA4/Consent/Goals setup",
        "Search Console indexing",
      ],
    },
    {
      title: "Grow & Maintain",
      body:
        "Ongoing SEO, content, and updates keep your site healthy and converting. We monitor uptime, security, and performance.",
      points: [
        "Content and landing pages",
        "Technical SEO & link strategy",
        "Hosting, backups, updates",
      ],
    },
  ];

  return (
    <section aria-labelledby="process-heading" className="border-b">
      <Container className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <h2 id="process-heading" className="text-2xl md:text-3xl font-semibold">
          Our Process
        </h2>
        <p className="mt-3 text-neutral-700 max-w-3xl">
          A clear, collaborative workflow that keeps projects on time and focused on
          outcomes—more qualified traffic, more leads, and a faster website.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <article key={s.title} className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-neutral-500">Step {i + 1}</div>
              <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{s.body}</p>
              <ul className="mt-3 space-y-1 text-sm text-neutral-600">
                {s.points.map((pt) => (
                  <li key={pt}>• {pt}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

