import { AppShell } from '@/components/AppShell';
import { POSWorkspace } from '@/components/POSWorkspace';
import { site } from '@/data/site';

export default function Page() {
  return (
    <AppShell>
      <div className="mb-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">{site.scale}</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">{site.name}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{site.positioning}</p>
        <div className="mt-5 flex flex-wrap gap-2">{site.features.map((f) => <span key={f} className="rounded-full bg-slate-100 px-4 py-2 text-xs font-black text-slate-700">{f}</span>)}</div>
      </div>
      <POSWorkspace />
    </AppShell>
  );
}
