export function StateShowcase() {
  const states = ['Empty state', 'Loading state', 'Error state', 'Permission state'];
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-400">UX states</p>
      <h3 className="mt-1 text-2xl font-black text-slate-950">System state coverage</h3>
      <div className="mt-5 grid gap-3">
        {states.map((state) => <div key={state} className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm font-bold text-slate-500">{state} component placeholder included for production UX planning.</div>)}
      </div>
    </section>
  );
}
