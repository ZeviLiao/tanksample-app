'use client';

import { PropsWithChildren } from 'react';

const QueryProvider = ({ children }: PropsWithChildren) => {
  return (
    <div>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </div>
  );
};

export default QueryProvider;
