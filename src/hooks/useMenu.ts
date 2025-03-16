import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export type MenuItem = {
  id: string;
  title: string;
  path: string;
};

const fetchMenu = async (): Promise<MenuItem[]> => {
  const response = await axios.get('/api/menu');
  return response.data.map((item: { id: number; title: string }) => ({
    id: item.id.toString(),
    title: item.title,
    path: `/page${item.id}`,
  }));
};

