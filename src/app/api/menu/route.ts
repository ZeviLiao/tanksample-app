// pages/api/menu/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { unstable_cache } from 'next/cache';
import { serverFetch } from '@/lib/serverFetch';

const getMenuData = unstable_cache(
  async (): Promise<{ id: number; title: string }[]> => {
    console.log('Fetching and caching menu data...');
    const menu = await serverFetch<{ id: number; title: string }[]>
      (`${process.env.NEXT_PUBLIC_BASE_URL}/api/menuRaw`);
    return menu;
  },
  ['menuApiData'],
  { tags: ['menuApiData'], revalidate: 60 * 10 } // 每 60 秒重新驗證
);


export async function GET(request: NextRequest) {
  // 從快取中獲取資料（如果沒有則執行 getMenuData 並快取）
  const menu = await getMenuData();
  return NextResponse.json(menu);
}