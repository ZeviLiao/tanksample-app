import { memo, PropsWithChildren } from 'react';

export const ClientTitle = memo(({ children }:
  PropsWithChildren) => {
  console.log('title render');
  return <h3>{children}</h3>;
});
