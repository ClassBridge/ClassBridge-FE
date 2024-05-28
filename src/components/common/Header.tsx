import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center w-256 box-border">
      <Link href="/" className="text-xl">
        <h1 className="pr-5 pl-5">
          <span className="text-primary font-bold">C</span>LASS{" "}
          <span className="text-secondary font-bold">B</span>
          RIDGE
        </h1>
      </Link>
      <button className="pr-5 pl-5">카테고리</button>
      <button className="pr-5 pl-5">지역</button>
      <button className="pr-7 pl-7">SEARCH BAR</button>
      <button className="pr-5 pl-5">로그인</button>
    </header>
  );
}
