import { NextResponse } from "next/server";
import { templates } from "@/data/templates.generated";

export async function GET() {
  return NextResponse.json({
    count: templates.length,
    templates
  });
}
