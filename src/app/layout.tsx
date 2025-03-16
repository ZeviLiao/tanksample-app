import { PropsWithChildren } from 'react';
import Header from '@/components/Header';
import QueryProvider from '@/providers/QueryProvider';

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <QueryProvider>
          <Header />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
