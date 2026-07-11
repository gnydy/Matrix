
import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';

export default async function ErpHomePage() {
  const session = await getSession();

  if (!session) {
    redirect('/login');
  }

  const roles = session.roles ?? [];

  if (roles.includes('cashier')) {
    redirect('/cashier');
  }

  redirect('/customers');
}
