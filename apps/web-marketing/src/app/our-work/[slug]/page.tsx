import { OurWorkDetail } from '../../../components/marketing/our-work-detail';

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <OurWorkDetail slug={slug} />;
}