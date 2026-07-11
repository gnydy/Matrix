import { redirect } from 'next/navigation';
import { getDashboardSession } from '@/lib/auth';
import { LoginForm } from '@/components/login-form';
export default async function LoginPage(){if(await getDashboardSession())redirect('/');return <main className="loginPage"><section className="loginCard"><span className="brandLogo">M</span><h1>Matrix Control Center</h1><p className="muted">دخول الموظفين المصرح لهم فقط. جميع العمليات الحساسة تُسجّل في سجل التدقيق.</p><LoginForm/></section></main>}
