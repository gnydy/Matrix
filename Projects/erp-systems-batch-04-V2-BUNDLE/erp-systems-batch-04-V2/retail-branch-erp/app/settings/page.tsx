import { Shell } from '@/components/Shell';
import { Topbar } from '@/components/ErpBlocks';

const settings = ['Company profile', 'Roles and permissions', 'Approval rules', 'Notification channels', 'Audit policy', 'Data import'];

export default function SettingsPage() {
  return (
    <Shell>
      <Topbar />
      <section className="px-5 py-8 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {settings.map((item) => (
            <div key={item} className="card rounded-3xl p-6">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Settings</p>
              <h2 className="mt-3 text-xl font-black">{item}</h2>
              <p className="mt-2 text-sm text-slate-500">Mock configuration card prepared for client demo and future backend connection.</p>
            </div>
          ))}
        </div>
      </section>
    </Shell>
  );
}
