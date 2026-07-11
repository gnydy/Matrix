'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogoutButton } from './logout-button';

const navigation = [
  ['/', '◈', 'نظرة عامة'], ['/manage/customers','◉','العملاء'], ['/manage/leads','◇','الطلبات الأولية'], ['/manage/orders','▤','الطلبات'], ['/manage/quotes','▧','عروض الأسعار'], ['/manage/projects','◆','المشاريع'], ['/manage/templates','▦','القوالب'], ['/manage/payments','◍','المدفوعات'], ['/manage/transactions','⇄','المعاملات'], ['/manage/subscriptions','∞','الاشتراكات'], ['/manage/tickets','✦','الدعم الفني'], ['/users','♙','المستخدمون'], ['/audit','⌁','سجل التدقيق'], ['/settings','⚙','الإعدادات'],
] as const;

export function DashboardShell({ user, children }:{user:{name:string;email:string;role:string};children:React.ReactNode}){
 const pathname=usePathname();
 return <div className="shell"><aside className="sidebar"><div className="brand"><div className="brandMark"><span className="brandLogo">M</span><div><strong>Matrix Control Center</strong><small style={{display:'block',marginTop:4}}>Operations • Data • Security</small></div></div></div><nav className="nav">{navigation.map(([href,icon,label])=><Link key={href} href={href} className={(href==='/'?pathname===href:pathname.startsWith(href))?'active':''}><span>{icon}</span><span>{label}</span></Link>)}</nav><div className="sidebarFoot"><div style={{marginBottom:12}}><strong style={{display:'block',fontSize:12}}>{user.name}</strong><small>{user.email} • {user.role}</small></div><LogoutButton/></div></aside><section className="content"><header className="topbar"><div><span className="eyebrow">Matrix Administration</span><strong style={{display:'block',marginTop:4}}>إدارة المنصة والبيانات من مكان واحد</strong></div><div className="badge">● النظام متصل</div></header><main className="main">{children}</main></section></div>;
}
