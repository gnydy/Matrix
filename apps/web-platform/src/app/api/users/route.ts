import { AdminRole, prisma } from '@allinall/database';
import { NextResponse } from 'next/server';
import { writeAudit } from '@/lib/audit';
import { ensureSeedAdmin } from '@/lib/audit';

export async function GET() {
  await ensureSeedAdmin();
  const users = await prisma.adminUser.findMany({ orderBy: { createdAt: 'asc' } });
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const body = (await request.json()) as {
    email?: string;
    name?: string;
    role?: string;
  };

  if (!body.email?.trim() || !body.name?.trim()) {
    return NextResponse.json({ error: 'البريد والاسم مطلوبان' }, { status: 400 });
  }

  const role =
    body.role && Object.values(AdminRole).includes(body.role as AdminRole)
      ? (body.role as AdminRole)
      : AdminRole.admin;

  try {
    const user = await prisma.adminUser.create({
      data: {
        email: body.email.trim().toLowerCase(),
        name: body.name.trim(),
        role,
      },
    });
    await writeAudit({
      action: 'create',
      entity: 'admin_user',
      entityId: user.id,
      metadata: { email: user.email, role: user.role },
    });
    return NextResponse.json(user);
  } catch {
    return NextResponse.json({ error: 'البريد مستخدم مسبقاً' }, { status: 409 });
  }
}
