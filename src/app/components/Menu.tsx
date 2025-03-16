"use client";

import Link from "next/link";
import { useMenu } from "../hooks/useMenu";
// import { MenuItem } from "../lib/api";

export default function Menu() {
  const { data: menuData } = useMenu();

  return (
    <nav>
      <ul style={{ listStyle: "none", padding: 0, display: "flex", gap: "1rem" }}>
        {menuData?.map((item) => (
          <li key={item.id}>
            <Link href={item.path} style={{ color: "white", textDecoration: "none" }}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}