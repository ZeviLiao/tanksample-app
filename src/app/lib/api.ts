import { fetchMenu } from "./fakeApi";

export interface MenuItem {
  id: string;
  title: string;
  path: string;
  children?: MenuItem[];
}

export const getMenuData = async (): Promise<MenuItem[]> => {
  const response = await fetchMenu();
  return response.data;
};