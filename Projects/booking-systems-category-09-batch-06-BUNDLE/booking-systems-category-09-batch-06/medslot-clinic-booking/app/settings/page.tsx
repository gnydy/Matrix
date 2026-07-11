import { Shell } from "@/components/Shell";
import { site } from "@/data/site";

const settings = ["Booking rules", "Cancellation policy", "Payment mode", "Notification templates", "Role permissions", "Brand customization"];

export default function SettingsPage() {
  return (
    <Shell eyebrow="Settings mock">
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h1 className="text-4xl font-black tracking-tight text-slate-950">Operational settings for {site.name}.</h1>
            <p className="mt-4 text-base leading-8 text-slate-600">Frontend settings screens help the client understand how the template becomes a real product later.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {settings.map((setting) => (
              <div key={setting} className="rounded-[2rem] border border-white bg-white p-6 shadow-sm">
                <p className="text-lg font-black text-slate-950">{setting}</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">Mock controls, toggles, and policy state for the {site.domain.toLowerCase()} use case.</p>
                <div className="mt-5 h-3 rounded-full bg-slate-100">
                  <div className={`h-3 w-2/3 rounded-full bg-gradient-to-r ${site.accent}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  );
}
