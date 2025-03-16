import { ReactNode } from "react";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { getMenuData } from "./lib/api";
import Header from "./components/Header";
import Footer from "./components/Footer";
import QueryProvider from "./components/QueryProvider";

export default async function RootLayout({ children }: { children: ReactNode }) {
  // 在 server-side 預取選單資料
  await queryClient.prefetchQuery({
    queryKey: ["menu"],
    queryFn: getMenuData,
  });

  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {/* 設置 QueryClientProvider 和 HydrationBoundary */}
        <QueryProvider>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <Header />
            <main>{children}</main>
            <Footer />
          </HydrationBoundary>
        </QueryProvider>
      </body>
    </html>
  );
}