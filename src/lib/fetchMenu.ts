import { MenuItem } from '@/hooks/useMenu';

export const fetchMenu = async (): Promise<MenuItem[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/menu`);

    if (!response.ok) {
      throw new Error(`Failed to fetch menu: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    return data.map((item: MenuItem) => ({
      id: item.id.toString(),
      title: item.title,
      path: `/page${item.id}`,
    }));
  } catch (error) {
    console.error('Error fetching menu:', error);
    throw error; // 讓 React Query 接收到這個錯誤並觸發 UI 更新
  }
};
