import { MenuItem } from '@/hooks/useMenu';

export const fetchMenu = async (): Promise<MenuItem[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/menu`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch menu');
  }

  const data = await response.json();
  return data.map((item: { id: number; title: string }) => ({
    id: item.id.toString(),
    title: item.title,
    path: `/page${item.id}`,
  }));
};
