import { NextResponse } from 'next/server';
import {
  createPortfolioProject,
  readDashboardDB,
  seedRealDashboardIfEmpty,
} from '../../../../lib/db/dashboard-db';

export async function GET() {
  seedRealDashboardIfEmpty();

  const db = readDashboardDB();

  return NextResponse.json({
    ok: true,
    data: db.portfolio.filter((item) => item.status !== 'deleted'),
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.slug || !body.titleAr || !body.titleEn || !body.client) {
    return NextResponse.json(
      {
        ok: false,
        error: 'slug, titleAr, titleEn, and client are required',
      },
      { status: 400 },
    );
  }

  const project = createPortfolioProject({
    title: body.titleEn,
    slug: body.slug,
    titleAr: body.titleAr,
    titleEn: body.titleEn,
    client: body.client,
    categoryAr: body.categoryAr ?? '',
    categoryEn: body.categoryEn ?? '',
    descriptionAr: body.descriptionAr ?? '',
    descriptionEn: body.descriptionEn ?? '',
    projectUrl: body.projectUrl ?? '',
    logoUrl: body.logoUrl ?? '',
    coverUrl: body.coverUrl ?? '',
    technologies: Array.isArray(body.technologies)
      ? body.technologies
      : String(body.technologies ?? '')
          .split(',')
          .map((item) => item.trim())
          .filter(Boolean),
    featured: Boolean(body.featured),
    status: body.status ?? 'draft',
  });

  return NextResponse.json({
    ok: true,
    data: project,
  });
}