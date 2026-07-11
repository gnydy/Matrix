import { notFound } from 'next/navigation';
import { requireDashboardSession } from '@/lib/auth';
import { canAccessResource } from '@/lib/permissions';
import { getResourceDefinition } from '@/lib/resource-definitions';
import { DataManager } from '@/components/data-manager';
export default async function ManagePage({params}:{params:Promise<{resource:string}>}){const {resource}=await params;const definition=getResourceDefinition(resource);if(!definition)notFound();const session=await requireDashboardSession();if(!canAccessResource(session.user.role,resource,'read'))return <div className="errorBox">ليست لديك صلاحية لعرض هذا القسم.</div>;return <DataManager resource={resource} definition={definition}/>}
