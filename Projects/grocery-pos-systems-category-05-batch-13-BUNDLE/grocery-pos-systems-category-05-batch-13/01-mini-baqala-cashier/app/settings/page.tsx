import { AppShell } from '@/components/AppShell';

export default function SettingsPage() {
  const settings = ['Receipt template','Tax profile','Payment methods','Cashier roles','Discount approvals','Audit log'];
  return <AppShell><h1 className="mb-5 text-4xl font-black">Settings mock</h1><div className="grid gap-4 md:grid-cols-2">{settings.map((s) => <div key={s} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><h2 className="text-xl font-black">{s}</h2><p className="mt-2 text-sm text-slate-500">Frontend placeholder for client customization.</p></div>)}</div></AppShell>;
}
