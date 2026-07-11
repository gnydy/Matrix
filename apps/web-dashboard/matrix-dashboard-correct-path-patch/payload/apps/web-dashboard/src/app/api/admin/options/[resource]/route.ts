import { NextResponse } from 'next/server';
import { getDashboardSession } from '@/lib/auth';
import { listOptions } from '@/lib/resource-server';
export async function GET(_:Request,{params}:{params:Promise<{resource:string}>}){if(!await getDashboardSession())return NextResponse.json({error:'غير مصرح'},{status:403});const {resource}=await params;return NextResponse.json({items:await listOptions(resource)});}
