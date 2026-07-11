import type { ErpModuleKey } from './modules';

export type ErpFaqItem = {
  module: ErpModuleKey;
  question: string;
  answer: string;
};

/** أسئلة افتراضية — تُنسخ إلى قاعدة البيانات عند seed */
export const DEFAULT_MODULE_FAQ: ErpFaqItem[] = [
  {
    module: 'core',
    question: 'ما هو الإعداد الأساسي للنظام؟',
    answer: 'أنشئ الشركة والفرع والسنة المالية قبل أي عملية تشغيلية.',
  },
  {
    module: 'inventory',
    question: 'كيف أبدأ جرداً؟',
    answer: 'أنشئ جرداً بحالة مسودة، ابدأ العد، أدخل الكميات المعدودة، ثم رحّل الجرد.',
  },
  {
    module: 'sales',
    question: 'ما مسار فاتورة المبيعات؟',
    answer: 'عرض سعر → أمر بيع → فاتورة → تحصيل.',
  },
  {
    module: 'purchases',
    question: 'كيف أسجّل فاتورة مورد؟',
    answer: 'من المشتريات أنشئ مستند فاتورة، أضف الأصناف، ثم أكّد.',
  },
  {
    module: 'accounting',
    question: 'ما هي القيد المزدوج؟',
    answer: 'مجموع المدين يساوي مجموع الدائن قبل الترحيل.',
  },
  {
    module: 'hr',
    question: 'كيف أسجّل حضور موظف؟',
    answer: 'من الموارد البشرية → الحضور، اختر الموظف والتاريخ.',
  },
  {
    module: 'debts',
    question: 'ما الفرق بين الذمم المدينة والدائنة؟',
    answer: 'المدينة لعملائك. الدائنة لمورديك.',
  },
  {
    module: 'workflow',
    question: 'ما هي دورة العمل؟',
    answer: 'طلب → شراء → استلام → جرد → بيع → تحصيل → قيد.',
  },
];
