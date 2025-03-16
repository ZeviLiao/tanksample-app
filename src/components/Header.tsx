'use client';

import Link from 'next/link';
import { useMenu } from '@/hooks/useMenu';

const Header = () => {
  const { data: menu, isLoading } = useMenu();

  if (isLoading) return <div>Loading...</div>;

  return (
    <header style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      {menu?.map((item) => (
        <Link key={item.id} href={item.path} style={{ marginRight: '10px' }}>
          {item.title}
        </Link>
      ))}
    </header>
  );
};

export default Header;
