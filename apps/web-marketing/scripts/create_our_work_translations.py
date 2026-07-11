from __future__ import annotations

import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "src" / "i18n" / "pages"


OUR_WORK_AR = {
    "meta": {
        "title": "أعمالنا | Matrix",
        "description": "نماذج من أعمال Matrix في المواقع، الأنظمة، ERP، المتاجر الإلكترونية، ولوحات التحكم.",
    },
    "hero": {
        "eyebrow": "Portfolio / أعمالنا",
        "title": "أعمال رقمية مصممة لتعرض الثقة وتحوّل الزائر إلى عميل.",
        "description": "نماذج من المواقع، الأنظمة، لوحات التحكم، ERP، والحلول الرقمية المخصصة التي يمكن تنفيذها لعملاء Matrix.",
    },
    "stats": {
        "projects": "مشروع منشور",
        "featured": "مشروع مميز",
        "technologies": "تقنية مستخدمة",
    },
    "actions": {
        "viewDetails": "عرض التفاصيل",
        "backToWork": "العودة إلى أعمالنا",
        "openProject": "فتح المشروع",
        "watchDemo": "مشاهدة Demo",
        "downloadCaseStudy": "تحميل Case Study",
    },
    "labels": {
        "client": "العميل",
        "category": "التصنيف",
        "deliveredAt": "تاريخ التنفيذ",
        "services": "الخدمات",
        "technologies": "التقنيات",
        "problem": "المشكلة",
        "solution": "الحل",
        "results": "النتائج",
        "projectDescription": "وصف المشروع",
    },
    "projects": [
        {
            "slug": "time-zone-watches",
            "title": "Time Zone Watches",
            "client": "Time Zone",
            "category": "متجر ساعات فاخر",
            "shortDescription": "تجربة متجر ساعات فاخرة بواجهة راقية، عرض منتجات احترافي، وربط مباشر بطلبات العملاء.",
            "fullDescription": "مشروع متجر ساعات فاخر يركز على إبراز المنتجات بصورة عالية الجودة، تقليل التشتيت، وتسهيل انتقال العميل من مشاهدة المنتج إلى التواصل والطلب.",
            "problem": "البراند يمتلك صور منتجات جيدة، لكن لا توجد تجربة موقع منظمة تعرض الثقة والفخامة وتحوّل الزائر إلى عميل محتمل.",
            "solution": "بناء واجهة احترافية، صفحة أعمال ومنتجات، تفاصيل منتج، زر طلب عبر واتساب، وتجهيز البنية للتسويق والتحليلات.",
            "results": [
                "تجربة عرض أكثر احترافية للمنتجات.",
                "مسار أوضح لتحويل الزائر إلى طلب.",
                "واجهة مناسبة لإعلانات Meta وحملات Google.",
            ],
            "technologies": ["Next.js", "React", "SEO", "WhatsApp", "Analytics"],
            "services": ["تصميم موقع", "واجهة متجر", "عرض براند"],
            "deliveredAt": "2026-07-01",
        },
        {
            "slug": "aia-erp-platform",
            "title": "AIA ERP Platform",
            "client": "AllInAll",
            "category": "نظام ERP",
            "shortDescription": "منصة ERP لإدارة الشركات والطلبات والعملاء والمخزون والمبيعات والمشتريات.",
            "fullDescription": "منصة ERP متعددة الشركات والفروع، تبدأ من استقبال الطلبات والعملاء ثم تتوسع إلى إدارة مالية وتشغيلية كاملة.",
            "problem": "الشركات الصغيرة والمتوسطة تحتاج نظامًا ينظم البيانات والطلبات والعملاء بدل الاعتماد على ملفات متفرقة وواتساب فقط.",
            "solution": "بناء منصة منظمة قابلة للتوسع، تدعم إدارة الطلبات والعملاء والصلاحيات والتقارير والتكاملات المستقبلية.",
            "results": [
                "توحيد بيانات العملاء والطلبات.",
                "تأسيس بنية قابلة للتوسع التجاري.",
                "تجهيز النظام للتكامل مع الموقع والتسويق.",
            ],
            "technologies": ["Next.js", "NestJS", "Prisma", "PostgreSQL", "Docker"],
            "services": ["ERP", "لوحة تحكم", "Backend", "أنظمة أعمال"],
            "deliveredAt": "2026-07-01",
        },
    ],
}


OUR_WORK_EN = {
    "meta": {
        "title": "Our Work | Matrix",
        "description": "Selected Matrix work across websites, systems, ERP, e-commerce, and dashboards.",
    },
    "hero": {
        "eyebrow": "Portfolio / Our Work",
        "title": "Digital work designed to build trust and convert visitors into leads.",
        "description": "Selected examples across websites, systems, dashboards, ERP, and custom digital solutions that Matrix can deliver for clients.",
    },
    "stats": {
        "projects": "Published Projects",
        "featured": "Featured Projects",
        "technologies": "Technologies Used",
    },
    "actions": {
        "viewDetails": "View Details",
        "backToWork": "Back to Our Work",
        "openProject": "Open Project",
        "watchDemo": "Watch Demo",
        "downloadCaseStudy": "Download Case Study",
    },
    "labels": {
        "client": "Client",
        "category": "Category",
        "deliveredAt": "Delivered At",
        "services": "Services",
        "technologies": "Technologies",
        "problem": "Problem",
        "solution": "Solution",
        "results": "Results",
        "projectDescription": "Project Description",
    },
    "projects": [
        {
            "slug": "time-zone-watches",
            "title": "Time Zone Watches",
            "client": "Time Zone",
            "category": "Luxury Watch Store",
            "shortDescription": "A premium luxury-watch store experience with refined product presentation and a direct customer request flow.",
            "fullDescription": "A premium watch-store concept designed to highlight products with strong visuals, reduce friction, and move visitors from browsing to requesting.",
            "problem": "The brand had strong product visuals but lacked a structured website experience that communicated trust and luxury.",
            "solution": "Build a polished interface, project and product pages, product details, direct WhatsApp ordering, and a structure ready for marketing analytics.",
            "results": [
                "More professional product presentation.",
                "Clearer path from visitor to request.",
                "Interface suitable for Meta and Google campaigns.",
            ],
            "technologies": ["Next.js", "React", "SEO", "WhatsApp", "Analytics"],
            "services": ["Website Design", "E-commerce UI", "Brand Presentation"],
            "deliveredAt": "2026-07-01",
        },
        {
            "slug": "aia-erp-platform",
            "title": "AIA ERP Platform",
            "client": "AllInAll",
            "category": "ERP System",
            "shortDescription": "An ERP platform for managing companies, leads, customers, inventory, sales, and purchasing.",
            "fullDescription": "A multi-company ERP platform starting with lead and customer handling, then expanding into financial and operational management.",
            "problem": "Small and mid-sized companies need structured systems instead of scattered files and WhatsApp-only operations.",
            "solution": "Build a scalable platform for leads, customers, permissions, reports, and future integrations.",
            "results": [
                "Unified customer and lead data.",
                "Commercially scalable architecture.",
                "Ready for website and marketing integration.",
            ],
            "technologies": ["Next.js", "NestJS", "Prisma", "PostgreSQL", "Docker"],
            "services": ["ERP", "Dashboard", "Backend", "Business Systems"],
            "deliveredAt": "2026-07-01",
        },
    ],
}


def to_ts_const(name: str, data: dict) -> str:
    json_text = json.dumps(data, ensure_ascii=False, indent=2)
    return f"export const {name} = {json_text} as const;\n"


def write_file(path: Path, content: str) -> None:
    path.write_text(content, encoding="utf-8", newline="\n")
    print(f"written: {path}")


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    write_file(
        OUT_DIR / "our-work.ar.ts",
        to_ts_const("ourWorkAr", OUR_WORK_AR),
    )

    write_file(
        OUT_DIR / "our-work.en.ts",
        to_ts_const("ourWorkEn", OUR_WORK_EN),
    )

    index_code = """import { ourWorkAr } from './our-work.ar';
import { ourWorkEn } from './our-work.en';

export type OurWorkLocale = 'ar' | 'en';

export function getOurWorkCopy(locale: OurWorkLocale) {
  return locale === 'en' ? ourWorkEn : ourWorkAr;
}

export function getOurWorkProject(locale: OurWorkLocale, slug: string) {
  return getOurWorkCopy(locale).projects.find((project) => project.slug === slug);
}
"""

    write_file(OUT_DIR / "our-work.ts", index_code)


if __name__ == "__main__":
    main()