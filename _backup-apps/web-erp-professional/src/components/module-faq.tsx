type FaqItem = { question: string; answer: string };

const fallbackFaq: FaqItem[] = [
  { question: 'هل الواجهة مرتبطة بالـ API؟', answer: 'نعم، الواجهة تحتفظ بمسار proxy إلى API على /api/v1/erp عند تشغيل الباك إند.' },
  { question: 'هل تعمل بدون API؟', answer: 'في التطوير يمكن تسجيل الدخول تجريبيًا لعرض التصميم، لكن التشغيل التجاري يحتاج API وقاعدة بيانات.' },
];

export function ModuleFaq({ items = fallbackFaq }: { items?: FaqItem[] }) {
  return (
    <div className="panel-grid">
      {items.map((item) => (
        <div className="panel" key={item.question}>
          <div className="panel-heading"><h2>{item.question}</h2></div>
          <p style={{ color: '#94a3b8', lineHeight: 1.8 }}>{item.answer}</p>
        </div>
      ))}
    </div>
  );
}
