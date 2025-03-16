import Link from "next/link";
import Menu from "./Menu";

const Header = () => {
  return (
    <header style={{ background: "#333", color: "white", padding: "1rem" }}>
      {/* Logo 點擊回到首頁 */}
      <Link href="/" style={{ color: "white", textDecoration: "none" }}>
        <h1>My Website</h1>
      </Link>
      <Menu />
    </header>
  );
}

export default Header