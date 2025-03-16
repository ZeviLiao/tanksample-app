// pages/api/menuRaw/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  console.log('Fetching raw menu data...');
  const menu = [
    { id: 1, title: 'Page 1' },
    { id: 2, title: 'Page 2' },
    { id: 3, title: 'Page 3' },
    { id: 4, title: 'Page 4' },
    { id: 5, title: 'Page 5' },
  ];
  await new Promise((resolve) => setTimeout(resolve, 500));
  return NextResponse.json(menu);
}