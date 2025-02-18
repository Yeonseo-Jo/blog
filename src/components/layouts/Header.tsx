import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full h-[70px] px-4 border-b border-muted">
      <div className="flex gap-3">
        <Link href="/posts">Posts</Link>
        <Link href="/about">About</Link>
      </div>

      <div>
        <ThemeToggle />
      </div>
    </header>
  );
}
