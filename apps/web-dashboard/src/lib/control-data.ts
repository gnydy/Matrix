export type SectionId =
  | 'overview'
  | 'leads'
  | 'visitors'
  | 'customers'
  | 'quotes'
  | 'projects'
  | 'payments'
  | 'services'
  | 'packages'
  | 'content'
  | 'users'
  | 'roles'
  | 'audit'
  | 'trash'
  | 'commands'
  | 'portfolio';

export type ControlSection = {
  id: SectionId;
  href: string;
  number: number;
  label: string;
  description: string;
  icon: string;
};

export const sections: ControlSection[] = [
  { id: 'overview', href: '/control', number: 2, label: 'نظرة عامة', description: 'ملخص التشغيل اليومي', icon: '◈' },
  { id: 'leads', href: '/control/leads', number: 3, label: 'طلبات العملاء', description: 'Leads وطلبات النظام', icon: '◎' },
  { id: 'visitors', href: '/control/visitors', number: 4, label: 'الزوار', description: 'تحليل زيارات الموقع', icon: '◌' },
  { id: 'customers', href: '/control/customers', number: 5, label: 'العملاء', description: 'إدارة العملاء', icon: '●' },
  { id: 'quotes', href: '/control/quotes', number: 6, label: 'عروض الأسعار', description: 'إنشاء ومتابعة العروض', icon: '▣' },
  { id: 'projects', href: '/control/projects', number: 7, label: 'المشاريع', description: 'مراحل وتسليمات العملاء', icon: '▦' },
  { id: 'payments', href: '/control/payments', number: 8, label: 'المدفوعات', description: 'المدفوع والمتبقي', icon: '◍' },
  { id: 'services', href: '/control/services', number: 9, label: 'كتالوج الخدمات', description: 'الخدمات المعروضة', icon: '▤' },
  { id: 'packages', href: '/control/packages', number: 10, label: 'الباقات', description: 'خطط وأسعار', icon: '▥' },
  { id: 'content', href: '/control/content', number: 11, label: 'إدارة المحتوى', description: 'CMS صفحات الموقع', icon: '✎' },
  { id: 'users', href: '/control/users', number: 12, label: 'المستخدمون', description: 'حسابات الفريق', icon: '◐' },
  { id: 'roles', href: '/control/roles', number: 13, label: 'الصلاحيات', description: 'Roles & Permissions', icon: '◫' },
  { id: 'audit', href: '/control/audit-logs', number: 14, label: 'سجل النشاطات', description: 'Audit trail', icon: '☷' },
  { id: 'trash', href: '/control/trash', number: 15, label: 'سلة المهملات', description: 'Soft delete', icon: '⌫' },
  { id: 'commands', href: '/control/command-center', number: 16, label: 'مركز الأوامر', description: 'أوامر آمنة فقط', icon: '⌘' },
  { id: 'portfolio', href: '/control/portfolio', number: 17, label: 'أعمالنا', description: 'Portfolio Manager', icon: '◆' }
];

export type SectionContent = {
  title: string;
  subtitle: string;
  primaryAction: string;
  secondaryAction: string;
  metrics: { label: string; value: string; trend: string }[];
  table: {
    columns: string[];
    rows: string[][];
  };
  notes: string[];
};

export const sectionContent: Record<SectionId, SectionContent> = {
  overview: {
    title: 'Control Center',
    subtitle: 'لوحة تحكم مركزية لإدارة الموقع، العملاء، الطلبات، المحتوى، الأعمال، والصلاحيات.',
    primaryAction: 'إنشاء طلب جديد',
    secondaryAction: 'تصدير تقرير',
    metrics: [
      { label: 'طلبات جديدة', value: '24', trend: '+12%' },
      { label: 'عملاء نشطون', value: '9', trend: '+3' },
      { label: 'مشاريع جارية', value: '6', trend: '+2' },
      { label: 'محتوى يحتاج مراجعة', value: '11', trend: 'اليوم' }
    ],
    table: {
      columns: ['النشاط', 'القسم', 'الحالة', 'الوقت'],
      rows: [
        ['طلب جديد من صفحة ERP', 'Leads', 'جديد', 'منذ 8 دقائق'],
        ['تعديل مشروع Time Zone', 'Portfolio', 'منشور', 'منذ 22 دقيقة'],
        ['عرض سعر مبدئي', 'Quotes', 'مسودة', 'اليوم'],
        ['تحديث صلاحيات Sales', 'Roles', 'مكتمل', 'أمس']
      ]
    },
    notes: [
      'هذه الصفحة تعرض الحالة التشغيلية العامة.',
      'الأرقام الحالية Mock Data إلى أن يتم ربط API.',
      'أي إجراء حقيقي سيتم توصيله لاحقًا بالـ Backend.'
    ]
  },
  leads: {
    title: 'طلبات العملاء',
    subtitle: 'استقبال وفرز طلبات اطلب نظامك والتواصل والاستشارات.',
    primaryAction: 'إضافة Lead',
    secondaryAction: 'فلترة الطلبات',
    metrics: [
      { label: 'طلبات اليوم', value: '8', trend: '+4' },
      { label: 'بانتظار المتابعة', value: '13', trend: 'مهم' },
      { label: 'تم التواصل', value: '31', trend: '+9%' },
      { label: 'تحويل إلى عميل', value: '5', trend: '+2' }
    ],
    table: {
      columns: ['رقم الطلب', 'الاسم', 'القناة', 'الحالة'],
      rows: [
        ['AIA-2026-000018', 'شركة تجارية', 'Website', 'جديد'],
        ['AIA-2026-000017', 'مصنع ألمنيوم', 'WhatsApp', 'متابعة'],
        ['AIA-2026-000016', 'متجر ساعات', 'Contact', 'تم التواصل']
      ]
    },
    notes: [
      'لا يتم حذف الطلبات نهائيًا.',
      'أي Lead يتحول إلى Customer مع الاحتفاظ بالتاريخ.',
      'يجب تسجيل كل مكالمة أو متابعة في Activity Log.'
    ]
  },
  visitors: {
    title: 'الزوار والتحليلات',
    subtitle: 'متابعة الصفحات الأكثر زيارة ومصادر الزيارات ومسار التحويل.',
    primaryAction: 'تحديث التحليلات',
    secondaryAction: 'تصدير CSV',
    metrics: [
      { label: 'زيارات اليوم', value: '486', trend: '+18%' },
      { label: 'مصدر Meta', value: '39%', trend: '+6%' },
      { label: 'صفحة ERP', value: '212', trend: 'الأعلى' },
      { label: 'Conversion', value: '4.8%', trend: '+1.1%' }
    ],
    table: {
      columns: ['الصفحة', 'الزيارات', 'المصدر', 'التحويل'],
      rows: [
        ['/services/erp', '212', 'Meta', '7.2%'],
        ['/our-work', '98', 'Direct', '3.1%'],
        ['/packages', '76', 'Google', '2.6%']
      ]
    },
    notes: [
      'سيتم ربط Google Analytics وMeta Pixel لاحقًا.',
      'لا تخزن بيانات شخصية بدون موافقة.',
      'الهدف هو معرفة الصفحات التي تجلب طلبات فعلية.'
    ]
  },
  customers: {
    title: 'العملاء',
    subtitle: 'إدارة العملاء بعد تحويلهم من Leads إلى حسابات عملاء.',
    primaryAction: 'إضافة عميل',
    secondaryAction: 'استيراد العملاء',
    metrics: [
      { label: 'إجمالي العملاء', value: '18', trend: '+3' },
      { label: 'نشط', value: '9', trend: '+1' },
      { label: 'بانتظار عرض', value: '4', trend: 'متابعة' },
      { label: 'متوقف', value: '2', trend: 'مراجعة' }
    ],
    table: {
      columns: ['العميل', 'القطاع', 'الحالة', 'آخر متابعة'],
      rows: [
        ['Time Zone', 'Retail', 'نشط', 'اليوم'],
        ['Rafiq', 'Services', 'محتمل', 'أمس'],
        ['AIA Internal', 'ERP', 'داخلي', 'اليوم']
      ]
    },
    notes: [
      'العميل مرتبط بالطلبات والعروض والمشاريع.',
      'يفضل عدم إنشاء عميل بدون مصدر Lead.',
      'كل عميل يجب أن يمتلك مسؤول متابعة.'
    ]
  },
  quotes: {
    title: 'عروض الأسعار',
    subtitle: 'إنشاء عروض أسعار ومتابعة حالتها ومراحل الموافقة.',
    primaryAction: 'إنشاء عرض سعر',
    secondaryAction: 'قوالب العروض',
    metrics: [
      { label: 'عروض مفتوحة', value: '7', trend: '+2' },
      { label: 'قيد المراجعة', value: '3', trend: 'مهم' },
      { label: 'مقبولة', value: '4', trend: '+1' },
      { label: 'متوسط القيمة', value: '42K', trend: 'EGP' }
    ],
    table: {
      columns: ['العرض', 'العميل', 'القيمة', 'الحالة'],
      rows: [
        ['Q-00021', 'Time Zone', '35,000 EGP', 'مسودة'],
        ['Q-00020', 'Rafiq', '28,000 EGP', 'قيد المراجعة'],
        ['Q-00019', 'مصنع ألمنيوم', '80,000 EGP', 'مقبول']
      ]
    },
    notes: [
      'العرض يجب أن يحتوي نطاق العمل والمدة والتكلفة.',
      'لا ترسل عرض بدون مراجعة Owner.',
      'العرض المقبول يتحول إلى Project.'
    ]
  },
  projects: {
    title: 'المشاريع',
    subtitle: 'متابعة تنفيذ المشاريع والمراحل والتسليمات والملاحظات.',
    primaryAction: 'إنشاء مشروع',
    secondaryAction: 'جدول التسليم',
    metrics: [
      { label: 'جارية', value: '6', trend: '+2' },
      { label: 'تحتاج مراجعة', value: '2', trend: 'مهم' },
      { label: 'تم التسليم', value: '11', trend: '+4' },
      { label: 'متوسط الإنجاز', value: '64%', trend: '+9%' }
    ],
    table: {
      columns: ['المشروع', 'العميل', 'المرحلة', 'الحالة'],
      rows: [
        ['Time Zone Website', 'Time Zone', 'UI Review', 'جاري'],
        ['Rafiq Platform', 'Rafiq', 'Discovery', 'مخطط'],
        ['AIA ERP', 'Internal', 'MVP', 'جاري']
      ]
    },
    notes: [
      'كل مشروع يجب أن يبدأ من Quote مقبول.',
      'لا تعتمد تسليم شفهي فقط؛ كل تسليم يسجل.',
      'المراحل: Discovery، UI، Development، QA، Delivery.'
    ]
  },
  payments: {
    title: 'المدفوعات',
    subtitle: 'تسجيل المدفوعات والمتبقي وحالة التحصيل.',
    primaryAction: 'تسجيل دفعة',
    secondaryAction: 'تقرير مالي',
    metrics: [
      { label: 'مدفوع', value: '96K', trend: 'EGP' },
      { label: 'متبقي', value: '44K', trend: 'تحصيل' },
      { label: 'فواتير مفتوحة', value: '5', trend: 'متابعة' },
      { label: 'متأخر', value: '12K', trend: 'مهم' }
    ],
    table: {
      columns: ['العميل', 'المشروع', 'المدفوع', 'المتبقي'],
      rows: [
        ['Time Zone', 'Website', '15,000', '20,000'],
        ['Rafiq', 'Platform', '0', '28,000'],
        ['Internal', 'AIA ERP', '0', '0']
      ]
    },
    notes: [
      'المدفوعات لا تحذف؛ يتم عمل Void أو تصحيح.',
      'كل دفعة يجب ربطها بمشروع أو عرض.',
      'لاحقًا سيتم دعم المرفقات والإيصالات.'
    ]
  },
  services: {
    title: 'كتالوج الخدمات',
    subtitle: 'إدارة الخدمات المعروضة في الموقع والباقات.',
    primaryAction: 'إضافة خدمة',
    secondaryAction: 'ترتيب الخدمات',
    metrics: [
      { label: 'خدمات منشورة', value: '9', trend: '+2' },
      { label: 'مسودات', value: '3', trend: 'مراجعة' },
      { label: 'الأكثر طلبًا', value: 'ERP', trend: 'Top' },
      { label: 'تحديثات مطلوبة', value: '4', trend: 'اليوم' }
    ],
    table: {
      columns: ['الخدمة', 'التصنيف', 'الحالة', 'الأولوية'],
      rows: [
        ['ERP Systems', 'Business Systems', 'منشور', 'عالية'],
        ['Websites', 'Digital Solutions', 'منشور', 'عالية'],
        ['Custom Systems', 'Business Systems', 'منشور', 'عالية']
      ]
    },
    notes: [
      'الخدمات يجب أن تكون واضحة تجاريًا.',
      'كل خدمة لها وصف عربي وإنجليزي.',
      'الخدمة يمكن ربطها بباقات وأعمال Portfolio.'
    ]
  },
  packages: {
    title: 'الباقات',
    subtitle: 'تعديل الباقات والأسعار والوصف والمميزات.',
    primaryAction: 'إضافة باقة',
    secondaryAction: 'معاينة الموقع',
    metrics: [
      { label: 'باقات منشورة', value: '3', trend: 'Live' },
      { label: 'الأكثر مشاهدة', value: 'Business', trend: 'Top' },
      { label: 'طلبات ERP', value: '11', trend: '+5' },
      { label: 'مسودات', value: '1', trend: 'مراجعة' }
    ],
    table: {
      columns: ['الباقة', 'النوع', 'الحالة', 'مناسبة لـ'],
      rows: [
        ['Starter', 'Website', 'منشور', 'بداية'],
        ['Business', 'Website + Forms', 'منشور', 'شركات'],
        ['ERP', 'System', 'منشور', 'تشغيل داخلي']
      ]
    },
    notes: [
      'لا تعرض أسعار نهائية لو السعر يتغير حسب العميل.',
      'استخدم “يبدأ من” أو “اطلب عرض سعر”.',
      'الباقات يجب أن تربط مباشرة بنموذج طلب.'
    ]
  },
  content: {
    title: 'إدارة المحتوى',
    subtitle: 'تعديل صفحات الموقع والنصوص بدون تعديل الكود يدويًا.',
    primaryAction: 'تعديل صفحة',
    secondaryAction: 'مراجعة المحتوى',
    metrics: [
      { label: 'صفحات', value: '12', trend: '+4' },
      { label: 'تحتاج ترجمة', value: '5', trend: 'مهم' },
      { label: 'منشور', value: '18', trend: 'Live' },
      { label: 'مسودات', value: '7', trend: 'Draft' }
    ],
    table: {
      columns: ['الصفحة', 'اللغة', 'الحالة', 'آخر تعديل'],
      rows: [
        ['Home', 'AR/EN', 'منشور', 'اليوم'],
        ['Services', 'AR/EN', 'منشور', 'اليوم'],
        ['Footer', 'AR/EN', 'مراجعة', 'اليوم']
      ]
    },
    notes: [
      'هذا القسم لاحقًا سيكون مصدر ترجمة الموقع.',
      'أي تعديل محتوى يجب أن يسجل في Audit Logs.',
      'لا تنشر محتوى بدون Preview.'
    ]
  },
  users: {
    title: 'المستخدمون',
    subtitle: 'إدارة حسابات الفريق داخل لوحة التحكم.',
    primaryAction: 'إضافة مستخدم',
    secondaryAction: 'دعوة عضو',
    metrics: [
      { label: 'مستخدمون', value: '5', trend: '+1' },
      { label: 'نشطون', value: '3', trend: 'Online' },
      { label: 'بانتظار دعوة', value: '2', trend: 'Pending' },
      { label: 'موقوفون', value: '0', trend: 'Good' }
    ],
    table: {
      columns: ['الاسم', 'الدور', 'الحالة', 'آخر دخول'],
      rows: [
        ['Owner', 'Owner', 'نشط', 'اليوم'],
        ['Sales User', 'Sales', 'نشط', 'أمس'],
        ['Developer', 'Developer', 'دعوة', '—']
      ]
    },
    notes: [
      'لا يوجد حذف نهائي للمستخدم.',
      'أي تغيير صلاحيات يسجل.',
      'Owner فقط يستطيع إدارة الأدوار الحساسة.'
    ]
  },
  roles: {
    title: 'الأدوار والصلاحيات',
    subtitle: 'تحديد صلاحيات Owner وAdmin وSales وSupport وDeveloper.',
    primaryAction: 'إنشاء دور',
    secondaryAction: 'مصفوفة الصلاحيات',
    metrics: [
      { label: 'أدوار', value: '5', trend: 'Stable' },
      { label: 'صلاحيات', value: '42', trend: '+8' },
      { label: 'حساسة', value: '9', trend: 'Owner only' },
      { label: 'مراجعة', value: '3', trend: 'مهم' }
    ],
    table: {
      columns: ['الدور', 'الوصول', 'الحذف', 'الأوامر'],
      rows: [
        ['Owner', 'كامل', 'Soft Delete', 'مسموح'],
        ['Admin', 'معظم الأقسام', 'محدود', 'غير مسموح'],
        ['Sales', 'Leads/Customers/Quotes', 'لا', 'لا']
      ]
    },
    notes: [
      'لا تعطِ صلاحيات حذف حقيقي لأي موظف.',
      'Command Center للـ Owner فقط.',
      'كل Permission يجب أن تكون صريحة.'
    ]
  },
  audit: {
    title: 'سجل النشاطات',
    subtitle: 'تتبع كل تعديل وحذف ونشر ودخول داخل النظام.',
    primaryAction: 'تصدير السجل',
    secondaryAction: 'فلترة',
    metrics: [
      { label: 'أحداث اليوم', value: '128', trend: '+24' },
      { label: 'تعديلات محتوى', value: '19', trend: 'مراجعة' },
      { label: 'تسجيل دخول', value: '11', trend: 'طبيعي' },
      { label: 'أحداث حساسة', value: '2', trend: 'Owner' }
    ],
    table: {
      columns: ['المستخدم', 'الفعل', 'القسم', 'الوقت'],
      rows: [
        ['Owner', 'Updated portfolio', 'Portfolio', 'منذ 12 دقيقة'],
        ['Sales', 'Changed lead status', 'Leads', 'منذ 30 دقيقة'],
        ['Admin', 'Updated footer copy', 'Content', 'اليوم']
      ]
    },
    notes: [
      'Audit Logs لا تعدل ولا تحذف من الواجهة.',
      'كل حدث حساس يحتاج IP وUser Agent لاحقًا.',
      'هذا يحمي الشركة من العبث الداخلي.'
    ]
  },
  trash: {
    title: 'سلة المهملات',
    subtitle: 'استرجاع البيانات المحذوفة بنظام Soft Delete.',
    primaryAction: 'استرجاع المحدد',
    secondaryAction: 'فلترة المحذوفات',
    metrics: [
      { label: 'محذوفات', value: '14', trend: 'Soft' },
      { label: 'يمكن استرجاعها', value: '14', trend: 'Good' },
      { label: 'تنتهي قريبًا', value: '2', trend: 'مراجعة' },
      { label: 'حذف نهائي', value: '0', trend: 'ممنوع' }
    ],
    table: {
      columns: ['العنصر', 'النوع', 'حذف بواسطة', 'التاريخ'],
      rows: [
        ['Draft Quote', 'Quote', 'Owner', 'أمس'],
        ['Old Service Copy', 'Content', 'Admin', 'منذ يومين'],
        ['Test Lead', 'Lead', 'Sales', 'الأسبوع الحالي']
      ]
    },
    notes: [
      'الحذف النهائي غير مسموح في V1.',
      'الاسترجاع يجب أن يسجل في Audit Logs.',
      'كل عنصر يحتفظ بسبب الحذف لاحقًا.'
    ]
  },
  commands: {
    title: 'مركز الأوامر',
    subtitle: 'تنفيذ أوامر آمنة ومحددة مسبقًا فقط، وليس Terminal مفتوح.',
    primaryAction: 'تشغيل فحص آمن',
    secondaryAction: 'عرض السجل',
    metrics: [
      { label: 'أوامر مسموحة', value: '6', trend: 'Whitelist' },
      { label: 'تشغيل اليوم', value: '3', trend: 'Owner' },
      { label: 'فشل', value: '0', trend: 'Good' },
      { label: 'أوامر مرفوضة', value: '2', trend: 'Blocked' }
    ],
    table: {
      columns: ['الأمر', 'الوصف', 'الصلاحية', 'الحالة'],
      rows: [
        ['build:marketing', 'Build للموقع', 'Owner', 'مسموح'],
        ['backup:db', 'نسخة احتياطية', 'Owner', 'مسموح'],
        ['run:any-shell', 'Terminal مفتوح', 'ممنوع', 'محظور']
      ]
    },
    notes: [
      'ممنوع تنفيذ أوامر عشوائية من الواجهة.',
      'كل أمر يجب أن يكون Whitelisted.',
      'كل تشغيل يسجل مع المستخدم والوقت والنتيجة.'
    ]
  },
  portfolio: {
    title: 'إدارة أعمالنا',
    subtitle: 'إضافة وتعديل مشاريع Portfolio مثل Time Zone وRafiq مع نص عربي وإنجليزي وصور وروابط.',
    primaryAction: 'إضافة مشروع',
    secondaryAction: 'معاينة الصفحة',
    metrics: [
      { label: 'أعمال منشورة', value: '3', trend: '+1' },
      { label: 'مسودات', value: '2', trend: 'مراجعة' },
      { label: 'تحتاج صور', value: '1', trend: 'مهم' },
      { label: 'Featured', value: '2', trend: 'Top' }
    ],
    table: {
      columns: ['المشروع', 'العميل', 'التصنيف', 'الحالة'],
      rows: [
        ['Time Zone Watches', 'Time Zone', 'Luxury Store', 'منشور'],
        ['Rafiq', 'Rafiq', 'Services Platform', 'مسودة'],
        ['AIA ERP Platform', 'AllInAll', 'ERP', 'منشور']
      ]
    },
    notes: [
      'كل مشروع يحتاج عنوان عربي وإنجليزي.',
      'أضف URL، لوجو، صورة غلاف، وصف مختصر، تفاصيل، وتقنيات.',
      'لا تنشر مشروع بدون موافقة العميل لو المشروع حقيقي.'
    ]
  }
};