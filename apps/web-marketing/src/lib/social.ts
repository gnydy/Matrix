/** بريد إنشاء وإدارة صفحات التواصل — يُستخدم عند التسجيل في المنصات */
export const socialBusinessEmail = 'oargamal3107@gmail.com';

export type SocialPlatform = 'facebook' | 'instagram' | 'linkedin';

export type SocialLink = {
  id: SocialPlatform;
  label: string;
  /** اسم المستخدم المقترح عند إنشاء الصفحة */
  suggestedHandle: string;
  href: string | null;
};

function envUrl(key: string): string | null {
  const value = process.env[key]?.trim();
  return value && value.length > 0 ? value : null;
}

/** روابط الصفحات — عيّن NEXT_PUBLIC_* في Netlify بعد إنشاء الصفحات */
export const socialLinks: SocialLink[] = [
  {
    id: 'facebook',
    label: 'فيسبوك',
    suggestedHandle: 'matrixallinall',
    href: envUrl('NEXT_PUBLIC_FACEBOOK_URL'),
  },
  {
    id: 'instagram',
    label: 'إنستجرام',
    suggestedHandle: 'matrixallinall',
    href: envUrl('NEXT_PUBLIC_INSTAGRAM_URL'),
  },
  {
    id: 'linkedin',
    label: 'لينكدإن',
    suggestedHandle: 'matrix-allinall',
    href: envUrl('NEXT_PUBLIC_LINKEDIN_URL'),
  },
];

export function getActiveSocialLinks(): SocialLink[] {
  return socialLinks.filter((link) => link.href !== null);
}

/** نصوص جاهزة للنسخ عند إنشاء الصفحات */
export const socialPageCopy = {
  pageName: 'Matrix — AllInAll ERP',
  tagline: 'منصة ERP عربية متكاملة',
  shortBio:
    'نظام إدارة أعمال متكامل للشركات العربية — محاسبة، مخزون، مبيعات، مشتريات، موارد بشرية. SaaS أو نشر مخصص.',
  longBio: `Matrix منصة AllInAll ERP لإدارة أعمال الشركات العربية في نظام واحد.

✓ محاسبة ومخزون ومبيعات ومشتريات
✓ موارد بشرية ودورة عميل كاملة
✓ فروع متعددة — عربي RTL
✓ SaaS سحابي أو نشر مخصص (On-premise)
✓ مساعد ذكي ELY وأتمتة n8n

📍 القاهرة، مصر
📧 ${socialBusinessEmail}
🌐 matrix.allinall.io`,
  linkedInAbout: `Matrix هي منصة ERP عربية متكاملة تُمكّن الشركات من إدارة المحاسبة، المخزون، المبيعات، المشتريات، الموارد البشرية، ودورة العميل في نظام واحد.

نقدّم حلول SaaS سحابية ونشرًا مخصصًا للشركات التي تحتاج تحكمًا كاملاً في بياناتها. المنصة عربية أولًا (RTL)، تدعم الفروع المتعددة، وتتضمن مساعدًا ذكيًا (ELY) وأتمتة عبر n8n.

القطاعات: التجزئة، التصنيع، الخدمات، التوزيع، المقاولات، والعيادات.`,
  categories: {
    facebook: 'Software Company',
    instagram: 'Software Company / Technology',
    linkedin: 'Software Development',
  },
} as const;
