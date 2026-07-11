import Link from "next/link";
import { templates } from "@/data/templates.generated";

export default function HomePage() {
  const total = templates.length;
  const categories = Array.from(new Set(templates.map((item) => item.category))).length;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 shadow-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            MatrixAll Digital Assets
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Template Marketplace for websites, systems, dashboards, SaaS, AI and business tools.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            A professional storefront for selling ready-made software templates with live demos,
            downloadable ZIP files, case studies, pricing, filters, and customization requests.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
              <div className="text-4xl font-black text-cyan-300">{total}</div>
              <div className="mt-2 text-slate-400">Scanned templates</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
              <div className="text-4xl font-black text-violet-300">{categories}</div>
              <div className="mt-2 text-slate-400">Detected categories</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
              <div className="text-4xl font-black text-emerald-300">B2B</div>
              <div className="mt-2 text-slate-400">Sales-ready portfolio</div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/templates" className="rounded-full bg-cyan-300 px-7 py-4 font-bold text-slate-950">
              Browse Templates
            </Link>
            <a href="mailto:sales@matrixall.local" className="rounded-full border border-white/15 px-7 py-4 font-bold text-white">
              Request Customization
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
