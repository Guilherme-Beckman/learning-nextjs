import Link from "next/link";

export function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-3 bg-zinc-900 text-white shadow-md">
      <h1 className="text-xl font-bold">Meu Projeto</h1>
      <nav className="space-x-4">
        <Link href="/">
        Home
        </Link>
      </nav>
    </header>
  );
}
