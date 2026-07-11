import { NextResponse } from 'next/server';
import { destroyDashboardSession, getDashboardSession } from '@/lib/auth';
import { recordAudit } from '@/lib/audit';
export async function POST(request:Request){const session=await getDashboardSession();if(session)await recordAudit({actorId:session.user.id,action:'auth.logout',entityType:'MatrixAdminUser',entityId:session.user.id,requestHeaders:request.headers});await destroyDashboardSession();return NextResponse.json({ok:true});}
