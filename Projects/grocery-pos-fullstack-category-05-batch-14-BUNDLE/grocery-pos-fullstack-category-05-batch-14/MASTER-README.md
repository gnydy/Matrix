# Grocery POS Fullstack Category 05 Batch 14

هذه دفعة جديدة من 20 قالب كاشير بقالة مختلفة فعليًا في الواجهة، التدرج التجاري، والـ backend mock.

## الفرق عن الدفعة السابقة
- جميع القوالب تستخدم `next.config.js` وليس `next.config.ts`.
- كل قالب يحتوي Frontend POS UI + Next.js API routes.
- كل قالب له صفحة كاشير، منتجات، مبيعات، مخزون، ورديات، تقارير، إعدادات.
- كل قالب قابل للبيع كـ fullstack mock template.

## Templates
1. Pocket Baqala Terminal — كاشير بقالة صغيرة جدًا
2. Neighborhood Market POS — كاشير سوبر ماركت حي
3. Express Superette Checkout — كاشير سريع لسوبرت صغير
4. Wholesale Counter OS — كاشير جملة
5. Scale Produce POS — كاشير خضار وفاكهة بالوزن
6. Bakery Grocery Counter — كاشير مخبوزات وبقالة
7. Butcher Deli Cashier — كاشير جزارة وديلي
8. Night Shift Convenience — كاشير ورديات ليلية
9. Mobile Grocery Cart — كاشير كشك متنقل
10. Family Mini Market — ميني ماركت عائلي
11. Loyalty Grocery Checkout — كاشير بنظام نقاط
12. Delivery Grocery POS — كاشير طلبات توصيل
13. Inventory First POS — كاشير مخزون أولًا
14. Offline Grocery Terminal — كاشير Offline Mock
15. Multi Cashier Market — عدة كاشيرات
16. Warehouse Retail POS — مخزن وبيع مباشر
17. Supermarket Branch POS — فرع سوبرماركت
18. Hypermarket Checkout Suite — هايبر ماركت
19. Franchise Grocery HQ — إدارة فروع Franchise
20. Enterprise Retail Chain OS — نظام سلسلة ضخمة

## Install one by one
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\install-one-by-one.ps1
```

## Run all
```powershell
.\run-all-20.ps1
.\open-all-chrome.ps1
```

## Production Warning
هذه قوالب عرض وبيع وليست POS production جاهز للمحاسبة الحقيقية. الإنتاج يحتاج قاعدة بيانات، صلاحيات، audit logs، ضرائب، طابعة إيصالات، باركود scanner، نسخ احتياطي، وحماية.
