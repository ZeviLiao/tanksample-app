import { QueryClient } from "@tanstack/react-query";

// 共用的 QueryClient 實例
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 預設 5 分鐘
    },
  },
});