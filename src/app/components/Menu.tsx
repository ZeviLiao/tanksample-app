"use client";

import { MenuItem } from "../lib/api";
import Link from "next/link";
import { useMenu } from "../hooks/useMenu";

const Menu = () => {
  const { data: menuData } = useMenu();
  // console.log('menu rerender');
  return (
    <nav>
      <ul style={{ listStyle: "none", padding: 0, display: "flex", gap: "1rem" }}>
        {menuData?.map((item: MenuItem) => (
          <li key={item.id}>
            <Link href={item.path} style={{ color: "white", textDecoration: "none" }}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
