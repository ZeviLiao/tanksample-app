import { fetchMenu } from '@/app/lib/fakeApi';
import { NextResponse } from "next/server";

export async function GET() {
  const data = await fetchMenu();
  return NextResponse.json(data.data);
}