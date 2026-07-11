import { store } from '@/data/store';
import { money } from '@/lib/pos';

export function ProductTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
      <div className="grid grid-cols-5 bg-slate-50 px-5 py-3 text-xs font-bold uppercase tracking-wide text-slate-500">
        <span>Product</span><span>Category</span><span>Price</span><span>Stock</span><span>Location</span>
      </div>
      {store.products.map((product) => (
        <div key={product.id} className="grid grid-cols-5 px-5 py-4 text-sm table-row">
          <span className="font-bold text-slate-900">{product.name}<small className="block text-xs font-medium text-slate-400">{product.barcode}</small></span>
          <span>{product.category}</span>
          <span>{money(product.price)}</span>
          <span className={product.stock < 25 ? 'font-bold text-red-600' : 'text-slate-700'}>{product.stock}</span>
          <span>{product.location}</span>
        </div>
      ))}
    </div>
  );
}
