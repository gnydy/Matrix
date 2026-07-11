import { records } from '@/data/mock';
export async function GET(){ return Response.json({ records }); }
export async function POST(req: Request){ const body = await req.json().catch(()=>({})); return Response.json({ ok:true, created: body }); }
