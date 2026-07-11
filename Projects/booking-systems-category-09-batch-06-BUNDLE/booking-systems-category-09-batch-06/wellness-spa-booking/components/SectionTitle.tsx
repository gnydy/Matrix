export function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-slate-500">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">{text}</p>
    </div>
  );
}
