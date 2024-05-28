import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Header() {
  return (
    <header className={cn()}>
      <nav>
        <ul className={cn()}>
          <li className={cn()}>
            <Link href="/">CLASS BRIDGE</Link>
          </li>
          <li className={cn()}>
            <Link href="/">카테고리</Link>
          </li>
          <li className={cn()}>
            <Link href="/">지역</Link>
          </li>
          SEARCH SECTION
          <li className={cn()}>
            <button className={cn()}>
              <Link href="/">로그인</Link>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
