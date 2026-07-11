type Props = { eyebrow: string; title: string; description: string };
export function SectionHeader({ eyebrow, title, description }: Props) {
  return <div className="mx-auto max-w-3xl text-center">
    <p className="text-sm font-black uppercase tracking-[0.24em] text-slate-500">{eyebrow}</p>
    <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">{title}</h2>
    <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
  </div>;
}
