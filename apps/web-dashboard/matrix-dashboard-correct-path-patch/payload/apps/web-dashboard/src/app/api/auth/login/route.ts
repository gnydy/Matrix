import { NextResponse } from 'next/server';
import { prisma } from '@allinall/database';
import { createDashboardSession } from '@/lib/auth';
import { verifyPassword } from '@/lib/password';
import { getRequestIp, sha256 } from '@/lib/security';
import { recordAudit } from '@/lib/audit';

export async function POST(request: Request) {
  const headers = request.headers;
  try {
    const body = await request.json();
    const email = String(body.email || '').trim().toLowerCase().slice(0, 320);
    const password = String(body.password || '');
    const ipHash = sha256(getRequestIp(headers));
    const emailHash = sha256(email);
    const since = new Date(Date.now() - 15 * 60_000);
    const failures = await prisma.matrixLoginAttempt.count({ where: { createdAt:{gte:since}, success:false, OR:[{emailHash},{ipHash}] } });
    if (failures >= 10) return NextResponse.json({ error:'محاولات كثيرة. انتظر 15 دقيقة.' }, { status:429 });

    let user = await prisma.matrixAdminUser.findUnique({ where:{email} });
    const bootstrapEmail = String(process.env.MATRIX_DASHBOARD_BOOTSTRAP_EMAIL || '').toLowerCase();
    const bootstrapHash = process.env.MATRIX_DASHBOARD_BOOTSTRAP_PASSWORD_HASH || '';
    if (!user && email === bootstrapEmail && bootstrapHash && await verifyPassword(password, bootstrapHash)) {
      user = await prisma.matrixAdminUser.create({ data:{ email, name:'Matrix Owner', passwordHash:bootstrapHash, role:'owner', status:'active' } });
    }
    const allowed = user && user.status === 'active' && (!user.lockedUntil || user.lockedUntil <= new Date()) && await verifyPassword(password, user.passwordHash);
    await prisma.matrixLoginAttempt.create({ data:{emailHash,ipHash,success:Boolean(allowed),reason:allowed?null:'invalid_credentials'} });
    if (!allowed || !user) {
      if (user) await prisma.matrixAdminUser.update({ where:{id:user.id}, data:{ failedLogins:{increment:1}, lockedUntil:user.failedLogins >= 4 ? new Date(Date.now()+15*60_000) : null } });
      await recordAudit({ action:'auth.login', entityType:'MatrixAdminUser', entityId:user?.id, result:'failure', failureReason:'invalid_credentials', requestHeaders:headers });
      return NextResponse.json({ error:'بيانات الدخول غير صحيحة' }, { status:401 });
    }
    await prisma.matrixAdminUser.update({ where:{id:user.id}, data:{lastLoginAt:new Date(),failedLogins:0,lockedUntil:null} });
    await createDashboardSession(user.id);
    await recordAudit({ actorId:user.id, action:'auth.login', entityType:'MatrixAdminUser', entityId:user.id, requestHeaders:headers });
    return NextResponse.json({ ok:true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error:'حدث خطأ داخلي' }, { status:500 });
  }
}
