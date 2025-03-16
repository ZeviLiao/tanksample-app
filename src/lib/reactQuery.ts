import { QueryClient } from '@tanstack/react-query';

let client: QueryClient | null = null;

export const getQueryClient = () => {
  if (!client) {
    client = new QueryClient({
      defaultOptions: {
        queries: {
          // staleTime: 5 * 60 * 1000, // 5 min
          staleTime: 5 * 1000, // 5 min
        },
      },
    });
  }
  return client;
};
