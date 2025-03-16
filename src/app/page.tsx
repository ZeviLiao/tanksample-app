import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { fetchMenu } from '@/lib/fetchMenu';
import { getQueryClient } from '@/lib/reactQuery';

export default async function Home() {
  const queryClient = getQueryClient();

  // 使用共用的 queryClient 預載入資料
  await queryClient.prefetchQuery({
    queryKey: ['menu'],
    queryFn: fetchMenu,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div>
        <h1>Welcome to the Main Page</h1>
      </div>
    </HydrationBoundary>
  );
}

