import { Shell } from "@/components/Shell";
import { RecordsTable } from "@/components/RecordsTable";
import { site } from "@/data/site";

export default function CustomersPage() {
  return (
    <Shell eyebrow="Customers and records">
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="mb-8 max-w-3xl">
          <h1 className="text-4xl font-black tracking-tight text-slate-950">Customer records connected to the booking workflow.</h1>
          <p className="mt-4 text-base leading-8 text-slate-600">This page shows how {site.name} can expand into profiles, history, payments, notes, and role-based access later.</p>
        </div>
        <RecordsTable />
      </section>
    </Shell>
  );
}
