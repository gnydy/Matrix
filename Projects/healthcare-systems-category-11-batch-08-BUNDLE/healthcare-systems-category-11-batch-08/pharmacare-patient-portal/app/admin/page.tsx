import { Shell } from '@/components/Shell';
import { StateShowcase } from '@/components/StateShowcase';

export default function AdminPage() {
  return (
    <Shell title="Admin & Settings" eyebrow="Role-based UI concept">
      <div className="grid gap-8 xl:grid-cols-[1fr_0.8fr]">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-black text-slate-950">Operational settings</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {['Roles & permissions', 'Departments setup', 'Notification rules', 'Insurance workflow', 'Billing mock', 'Audit policy'].map((item) => (
              <div key={item} className="rounded-3xl border border-slate-100 bg-slate-50 p-5 font-bold text-slate-600">{item}</div>
            ))}
          </div>
        </section>
        <StateShowcase />
      </div>
    </Shell>
  );
}
