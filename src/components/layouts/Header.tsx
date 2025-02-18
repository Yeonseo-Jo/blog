import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between align-middle w-full px-4">
      <div className="flex gap-3">
        <Link href="/posts">Posts</Link>
        <Link href="/about">About</Link>
      </div>

      <div>setting section</div>
    </header>
  );
}
