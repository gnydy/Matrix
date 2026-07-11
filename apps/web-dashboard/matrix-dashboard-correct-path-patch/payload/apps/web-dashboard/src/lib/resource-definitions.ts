export type FieldType = 'text' | 'email' | 'phone' | 'textarea' | 'number' | 'money' | 'date' | 'datetime' | 'select' | 'boolean' | 'json' | 'relation';
export type FieldDefinition = { key: string; label: string; type: FieldType; required?: boolean; options?: { value: string; label: string }[]; relationResource?: string; placeholder?: string; readOnly?: boolean };
export type ResourceDefinition = { title: string; singular: string; model: string; codeField?: string; codePrefix?: string; searchable: string[]; fields: FieldDefinition[]; columns: string[]; softDelete?: boolean };

const priority = [
  { value: 'low', label: 'منخفضة' }, { value: 'normal', label: 'عادية' }, { value: 'high', label: 'مرتفعة' }, { value: 'urgent', label: 'عاجلة' },
];
const currency = [{ value: 'EGP', label: 'جنيه مصري' }, { value: 'USD', label: 'دولار' }, { value: 'SAR', label: 'ريال سعودي' }, { value: 'AED', label: 'درهم إماراتي' }];

export const RESOURCE_DEFINITIONS: Record<string, ResourceDefinition> = {
  customers: {
    title: 'العملاء', singular: 'عميل', model: 'matrixCustomer', codeField: 'customerCode', codePrefix: 'CUS', searchable: ['customerCode','name','tradeName','email','phone','industry'], softDelete: true,
    columns: ['customerCode','name','phone','industry','status','contractType','updatedAt'],
    fields: [
      { key:'customerCode', label:'كود العميل', type:'text', readOnly:true }, { key:'name', label:'اسم الشركة/العميل', type:'text', required:true }, { key:'tradeName', label:'الاسم التجاري', type:'text' },
      { key:'email', label:'البريد الإلكتروني', type:'email' }, { key:'phone', label:'رقم الهاتف', type:'phone' }, { key:'website', label:'الموقع', type:'text' }, { key:'address', label:'العنوان', type:'textarea' },
      { key:'city', label:'المدينة', type:'text' }, { key:'country', label:'الدولة', type:'text' }, { key:'industry', label:'المجال', type:'text' }, { key:'branchesCount', label:'عدد الفروع', type:'number' }, { key:'usersCount', label:'عدد المستخدمين', type:'number' },
      { key:'status', label:'الحالة', type:'select', options:[{value:'active',label:'نشط'},{value:'inactive',label:'غير نشط'},{value:'suspended',label:'موقوف'},{value:'archived',label:'مؤرشف'}] },
      { key:'contractType', label:'نوع التعاقد', type:'select', options:[{value:'saas',label:'SaaS'},{value:'dedicated',label:'Dedicated'},{value:'onprem',label:'On-premise'},{value:'custom',label:'مخصص'}] },
      { key:'source', label:'المصدر', type:'text' }, { key:'notes', label:'ملاحظات', type:'textarea' },
    ],
  },
  leads: {
    title:'الطلبات الأولية', singular:'طلب أولي', model:'matrixLead', codeField:'leadNumber', codePrefix:'LEAD', searchable:['leadNumber','name','company','email','phone','projectType','description'], softDelete:true,
    columns:['leadNumber','name','company','projectType','status','priority','updatedAt'],
    fields:[
      {key:'leadNumber',label:'رقم الطلب',type:'text',readOnly:true},{key:'name',label:'الاسم',type:'text',required:true},{key:'company',label:'الشركة',type:'text'},{key:'email',label:'البريد',type:'email'},{key:'phone',label:'الهاتف',type:'phone'},
      {key:'projectType',label:'نوع المشروع',type:'text',required:true},{key:'projectSize',label:'حجم المشروع',type:'select',options:[{value:'small',label:'صغير'},{value:'medium',label:'متوسط'},{value:'large',label:'كبير'},{value:'enterprise',label:'Enterprise'}]},
      {key:'description',label:'الوصف',type:'textarea'},{key:'usersExpected',label:'المستخدمون المتوقعون',type:'number'},{key:'branchesCount',label:'عدد الفروع',type:'number'},{key:'deploymentType',label:'طريقة التشغيل',type:'select',options:[{value:'saas',label:'SaaS'},{value:'dedicated',label:'Dedicated'},{value:'onprem',label:'On-premise'}]},
      {key:'preferredLanguage',label:'اللغة',type:'select',options:[{value:'ar',label:'العربية'},{value:'en',label:'English'}]},{key:'source',label:'المصدر',type:'text'},
      {key:'status',label:'الحالة',type:'select',options:[{value:'new',label:'جديد'},{value:'contacted',label:'تم التواصل'},{value:'needs_review',label:'يحتاج مراجعة'},{value:'qualified',label:'مؤهل'},{value:'proposal_sent',label:'عرض مرسل'},{value:'won',label:'مقبول'},{value:'lost',label:'مفقود'},{value:'archived',label:'مؤرشف'}]},
      {key:'priority',label:'الأولوية',type:'select',options:priority},{key:'consent',label:'موافقة التواصل',type:'boolean'},
    ],
  },
  orders: {
    title:'الطلبات', singular:'طلب', model:'matrixOrder', codeField:'orderNumber', codePrefix:'ORD', searchable:['orderNumber','title','type','description','notes'], softDelete:true,
    columns:['orderNumber','title','type','status','total','currency','updatedAt'],
    fields:[
      {key:'orderNumber',label:'رقم الطلب',type:'text',readOnly:true},{key:'customerId',label:'العميل',type:'relation',relationResource:'customers'},{key:'leadId',label:'الطلب الأولي',type:'relation',relationResource:'leads'},
      {key:'type',label:'نوع الطلب',type:'text',required:true},{key:'title',label:'العنوان',type:'text',required:true},{key:'description',label:'الوصف',type:'textarea'},
      {key:'status',label:'الحالة',type:'select',options:[{value:'draft',label:'مسودة'},{value:'submitted',label:'مرسل'},{value:'reviewing',label:'مراجعة'},{value:'quoted',label:'تم التسعير'},{value:'approved',label:'معتمد'},{value:'in_progress',label:'قيد التنفيذ'},{value:'completed',label:'مكتمل'},{value:'cancelled',label:'ملغى'},{value:'archived',label:'مؤرشف'}]},
      {key:'priority',label:'الأولوية',type:'select',options:priority},{key:'currency',label:'العملة',type:'select',options:currency},{key:'subtotal',label:'قبل الخصم والضريبة',type:'money'},{key:'discount',label:'الخصم',type:'money'},{key:'tax',label:'الضريبة',type:'money'},{key:'total',label:'الإجمالي',type:'money'},{key:'dueDate',label:'تاريخ الاستحقاق',type:'date'},{key:'notes',label:'ملاحظات',type:'textarea'},
    ],
  },
  quotes: {
    title:'عروض الأسعار', singular:'عرض سعر', model:'matrixQuote', codeField:'quoteNumber', codePrefix:'QUO', searchable:['quoteNumber','title','scope','notes'], softDelete:true,
    columns:['quoteNumber','title','status','version','total','currency','validUntil'],
    fields:[
      {key:'quoteNumber',label:'رقم العرض',type:'text',readOnly:true},{key:'customerId',label:'العميل',type:'relation',relationResource:'customers'},{key:'leadId',label:'الطلب الأولي',type:'relation',relationResource:'leads'},
      {key:'title',label:'عنوان العرض',type:'text',required:true},{key:'scope',label:'نطاق العمل',type:'textarea'},{key:'status',label:'الحالة',type:'select',options:[{value:'draft',label:'مسودة'},{value:'internal_review',label:'مراجعة داخلية'},{value:'sent',label:'مرسل'},{value:'accepted',label:'مقبول'},{value:'rejected',label:'مرفوض'},{value:'expired',label:'منتهي'},{value:'cancelled',label:'ملغى'}]},
      {key:'version',label:'الإصدار',type:'number'},{key:'currency',label:'العملة',type:'select',options:currency},{key:'subtotal',label:'المجموع',type:'money'},{key:'discount',label:'الخصم',type:'money'},{key:'tax',label:'الضريبة',type:'money'},{key:'total',label:'الإجمالي',type:'money'},{key:'paymentTerms',label:'شروط الدفع',type:'textarea'},{key:'validUntil',label:'صالح حتى',type:'date'},{key:'notes',label:'ملاحظات',type:'textarea'},
    ],
  },
  projects: {
    title:'المشاريع', singular:'مشروع', model:'matrixProject', codeField:'projectNumber', codePrefix:'PRJ', searchable:['projectNumber','name','scope','notes'], softDelete:true,
    columns:['projectNumber','name','status','priority','completion','budget','targetDate'],
    fields:[
      {key:'projectNumber',label:'رقم المشروع',type:'text',readOnly:true},{key:'name',label:'اسم المشروع',type:'text',required:true},{key:'customerId',label:'العميل',type:'relation',relationResource:'customers',required:true},{key:'quoteId',label:'عرض السعر',type:'relation',relationResource:'quotes'},
      {key:'managerId',label:'مدير المشروع',type:'relation',relationResource:'users'},{key:'status',label:'الحالة',type:'select',options:[{value:'not_started',label:'لم يبدأ'},{value:'planning',label:'تخطيط'},{value:'in_progress',label:'قيد التنفيذ'},{value:'waiting_client',label:'انتظار العميل'},{value:'testing',label:'اختبار'},{value:'delivered',label:'تم التسليم'},{value:'closed',label:'مغلق'},{value:'cancelled',label:'ملغى'}]},
      {key:'priority',label:'الأولوية',type:'select',options:priority},{key:'scope',label:'نطاق العمل',type:'textarea'},{key:'startDate',label:'تاريخ البداية',type:'date'},{key:'targetDate',label:'موعد التسليم',type:'date'},{key:'budget',label:'الميزانية',type:'money'},{key:'currency',label:'العملة',type:'select',options:currency},{key:'completion',label:'نسبة الإنجاز',type:'number'},{key:'notes',label:'ملاحظات',type:'textarea'},
    ],
  },
  payments: {
    title:'المدفوعات', singular:'دفعة', model:'matrixPayment', codeField:'reference', codePrefix:'PAY', searchable:['reference','method','provider','providerRef','notes'], softDelete:true,
    columns:['reference','customerId','status','amount','currency','method','paidAt'],
    fields:[
      {key:'reference',label:'المرجع',type:'text',readOnly:true},{key:'customerId',label:'العميل',type:'relation',relationResource:'customers',required:true},{key:'projectId',label:'المشروع',type:'relation',relationResource:'projects'},
      {key:'status',label:'الحالة',type:'select',options:[{value:'pending',label:'منتظرة'},{value:'processing',label:'معالجة'},{value:'paid',label:'مدفوعة'},{value:'failed',label:'فشلت'},{value:'refunded',label:'مستردة'},{value:'cancelled',label:'ملغاة'}]},
      {key:'method',label:'طريقة الدفع',type:'text'},{key:'provider',label:'مزود الدفع',type:'text'},{key:'providerRef',label:'مرجع المزود',type:'text'},{key:'currency',label:'العملة',type:'select',options:currency},{key:'amount',label:'المبلغ',type:'money',required:true},{key:'dueAt',label:'تاريخ الاستحقاق',type:'date'},{key:'paidAt',label:'تاريخ الدفع',type:'datetime'},{key:'notes',label:'ملاحظات',type:'textarea'},
    ],
  },
  transactions: {
    title:'المعاملات المالية', singular:'معاملة', model:'matrixFinancialTransaction', codeField:'reference', codePrefix:'TRX', searchable:['reference','description'], softDelete:true,
    columns:['reference','type','status','amount','currency','occurredAt','description'],
    fields:[
      {key:'reference',label:'المرجع',type:'text',readOnly:true},{key:'customerId',label:'العميل',type:'relation',relationResource:'customers'},{key:'projectId',label:'المشروع',type:'relation',relationResource:'projects'},{key:'paymentId',label:'الدفعة',type:'relation',relationResource:'payments'},
      {key:'type',label:'النوع',type:'select',required:true,options:[{value:'payment',label:'دفعة'},{value:'refund',label:'استرداد'},{value:'expense',label:'مصروف'},{value:'income',label:'إيراد'},{value:'adjustment',label:'تسوية'},{value:'commission',label:'عمولة'}]},
      {key:'status',label:'الحالة',type:'select',options:[{value:'pending',label:'معلقة'},{value:'posted',label:'مرحلة'},{value:'failed',label:'فشلت'},{value:'reversed',label:'معكوسة'}]},
      {key:'currency',label:'العملة',type:'select',options:currency},{key:'amount',label:'المبلغ',type:'money',required:true},{key:'occurredAt',label:'تاريخ المعاملة',type:'datetime'},{key:'postedAt',label:'تاريخ الترحيل',type:'datetime'},{key:'description',label:'الوصف',type:'textarea'},
    ],
  },
  templates: {
    title:'القوالب', singular:'قالب', model:'matrixTemplate', codeField:'code', codePrefix:'TPL', searchable:['code','slug','name','nameAr','category','description'], softDelete:true,
    columns:['code','name','category','type','status','version','price','updatedAt'],
    fields:[
      {key:'code',label:'كود القالب',type:'text',readOnly:true},{key:'slug',label:'Slug',type:'text',required:true},{key:'name',label:'الاسم',type:'text',required:true},{key:'nameAr',label:'الاسم العربي',type:'text'},{key:'category',label:'الفئة',type:'text',required:true},
      {key:'type',label:'النوع',type:'select',required:true,options:[{value:'website',label:'Website'},{value:'ecommerce',label:'E-Commerce'},{value:'dashboard',label:'Dashboard'},{value:'system_ui',label:'System UI'},{value:'portal',label:'Portal'},{value:'marketplace',label:'Marketplace'},{value:'saas',label:'SaaS'},{value:'admin_panel',label:'Admin Panel'},{value:'mobile_ui',label:'Mobile UI'},{value:'desktop_ui',label:'Desktop UI'},{value:'ai_app',label:'AI App'},{value:'api',label:'API'},{value:'automation',label:'Automation'}]},
      {key:'status',label:'الحالة',type:'select',options:[{value:'draft',label:'مسودة'},{value:'review',label:'مراجعة'},{value:'published',label:'منشور'},{value:'archived',label:'مؤرشف'},{value:'disabled',label:'معطل'}]},
      {key:'version',label:'الإصدار',type:'text'},{key:'description',label:'الوصف',type:'textarea'},{key:'price',label:'السعر',type:'money'},{key:'currency',label:'العملة',type:'select',options:currency},{key:'stack',label:'التقنيات JSON',type:'json'},{key:'features',label:'المزايا JSON',type:'json'},{key:'previewUrl',label:'رابط المعاينة',type:'text'},{key:'repositoryUrl',label:'المستودع',type:'text'},{key:'thumbnailUrl',label:'الصورة',type:'text'},{key:'isFeatured',label:'قالب مميز',type:'boolean'},
    ],
  },
  subscriptions: {
    title:'الاشتراكات', singular:'اشتراك', model:'matrixSubscription', codeField:'subscriptionCode', codePrefix:'SUB', searchable:['subscriptionCode','planName','notes'], softDelete:true,
    columns:['subscriptionCode','customerId','planName','status','amount','billingCycle','endDate'],
    fields:[
      {key:'subscriptionCode',label:'كود الاشتراك',type:'text',readOnly:true},{key:'customerId',label:'العميل',type:'relation',relationResource:'customers',required:true},{key:'planName',label:'الباقة',type:'text',required:true},
      {key:'status',label:'الحالة',type:'select',options:[{value:'trial',label:'تجريبي'},{value:'active',label:'نشط'},{value:'overdue',label:'متأخر'},{value:'suspended',label:'موقوف'},{value:'cancelled',label:'ملغى'},{value:'expired',label:'منتهي'}]},
      {key:'billingCycle',label:'دورة الفوترة',type:'select',options:[{value:'monthly',label:'شهري'},{value:'quarterly',label:'ربع سنوي'},{value:'annual',label:'سنوي'},{value:'one_time',label:'مرة واحدة'}]},
      {key:'currency',label:'العملة',type:'select',options:currency},{key:'amount',label:'القيمة',type:'money'},{key:'startDate',label:'البداية',type:'date',required:true},{key:'endDate',label:'النهاية',type:'date'},{key:'trialEndsAt',label:'نهاية التجربة',type:'date'},{key:'nextBillingAt',label:'الفاتورة التالية',type:'date'},{key:'maxUsers',label:'الحد الأقصى للمستخدمين',type:'number'},{key:'maxBranches',label:'الحد الأقصى للفروع',type:'number'},{key:'enabledModules',label:'الموديلات JSON',type:'json'},{key:'entitlements',label:'الصلاحيات JSON',type:'json'},{key:'deploymentType',label:'التشغيل',type:'select',options:[{value:'saas',label:'SaaS'},{value:'dedicated',label:'Dedicated'},{value:'onprem',label:'On-premise'}]},{key:'notes',label:'ملاحظات',type:'textarea'},
    ],
  },
  tickets: {
    title:'الدعم الفني', singular:'تذكرة', model:'matrixSupportTicket', codeField:'ticketNumber', codePrefix:'TKT', searchable:['ticketNumber','subject','description','category'], softDelete:true,
    columns:['ticketNumber','subject','customerId','status','priority','category','updatedAt'],
    fields:[
      {key:'ticketNumber',label:'رقم التذكرة',type:'text',readOnly:true},{key:'customerId',label:'العميل',type:'relation',relationResource:'customers',required:true},{key:'assignedToId',label:'المسؤول',type:'relation',relationResource:'users'},
      {key:'subject',label:'الموضوع',type:'text',required:true},{key:'description',label:'التفاصيل',type:'textarea',required:true},{key:'status',label:'الحالة',type:'select',options:[{value:'open',label:'مفتوحة'},{value:'in_progress',label:'قيد العمل'},{value:'waiting_customer',label:'انتظار العميل'},{value:'resolved',label:'تم الحل'},{value:'closed',label:'مغلقة'}]},{key:'priority',label:'الأولوية',type:'select',options:priority},{key:'category',label:'التصنيف',type:'text'},
    ],
  },
};

export function getResourceDefinition(resource: string): ResourceDefinition | null { return RESOURCE_DEFINITIONS[resource] || null; }
