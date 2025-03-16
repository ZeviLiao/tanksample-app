import { fetchMenu } from '@/lib/fetchMenu';

export default async function Header() {
  const menu = await fetchMenu();

  return (
    <header style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      {menu.map((item) => (
        <a
          key={item.id}
          href={item.path}
          style={{ marginRight: '10px' }}
        >
          {item.title}
        </a>
      ))}
    </header>
  );
}
