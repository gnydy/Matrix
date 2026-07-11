"use client";

import { useMemo, useState } from "react";
import type { TemplateItem } from "@/data/templates.generated";

export default function TemplatesClient({ templates }: { templates: TemplateItem[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(templates.map((item) => item.category))).sort()];
  }, [templates]);

  const filtered = useMemo(() => {
    return templates.filter((item) => {
      const q = query.toLowerCase();
      const matchesQuery =
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.stack.join(" ").toLowerCase().includes(q);

      const matchesCategory = category === "All" || item.category === category;

      return matchesQuery && matchesCategory;
    });
  }, [templates, query, category]);

  return (
    <div>
      <div className="sticky top-0 z-10 border-b border-white/10 bg-slate-950/90 px-6 py-5 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Template Store</p>
            <h1 className="mt-2 text-3xl font-black text-white md:text-5xl">Templates Marketplace</h1>
          </div>

          <div className="flex flex-col gap-3 md:flex-row">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search templates, categories, stack..."
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-slate-500 md:w-96"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none"
            >
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <div className="text-2xl font-black text-white">{filtered.length} templates found</div>
          <p className="mt-2 text-slate-400">
            Each card can later connect to Live Demo, ZIP Download, Case Study, Cart, Checkout and License Vault.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item) => (
            <article key={item.slug} className="rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-xl">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">{item.category}</p>
                  <h2 className="mt-3 text-2xl font-black text-white">{item.title}</h2>
                </div>
                <span className="rounded-full bg-emerald-300 px-3 py-1 text-xs font-black text-slate-950">
                  {item.price}
                </span>
              </div>

              <p className="text-sm leading-6 text-slate-400">
                Professional template detected from your local portfolio library. Ready for demo listing,
                customization request, and marketplace packaging.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-black/25 p-4">
                <p className="text-xs text-slate-500">Local Path</p>
                <p className="mt-1 break-all text-xs text-slate-300">{item.path}</p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="rounded-2xl bg-cyan-300 px-4 py-3 text-sm font-black text-slate-950">
                  Live Demo
                </button>
                <button className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-black text-white">
                  Download ZIP
                </button>
                <button className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-black text-white">
                  Case Study
                </button>
                <button className="rounded-2xl border border-violet-400/40 px-4 py-3 text-sm font-black text-violet-200">
                  Customize
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
