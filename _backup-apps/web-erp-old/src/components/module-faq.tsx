import type { ErpModuleKey } from '@allinall/erp';
import { erpFetch } from '@/lib/api';

type FaqRow = { id: string; question: string; answer: string };

export async function ModuleFaq({ module }: { module: ErpModuleKey }) {
  let items: FaqRow[] = [];
  try {
    items = await erpFetch<FaqRow[]>(`/erp/faq/${module}`);
  } catch {
    items = [];
  }

  if (items.length === 0) return null;

  return (
    <section className="mt-8 rounded-2xl border border-border bg-card/40 p-6">
      <h2 className="mb-4 text-lg font-semibold">أسئلة شائعة — هذا المديول</h2>
      <div className="space-y-3">
        {items.map((item) => (
          <details key={item.id} className="faq-item group">
            <summary className="cursor-pointer font-medium marker:content-none group-open:text-primary">
              {item.question}
            </summary>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
