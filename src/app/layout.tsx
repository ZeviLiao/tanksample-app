import { PropsWithChildren } from 'react';
import Header from '@/components/Header';
import './globals.css'

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
          <Header />
          {children}
      </body>
    </html>
  );
};

export default RootLayout;
