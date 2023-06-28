import Menu from "@/components/Menu/Menu";
import Submenu from "@/components/Submenu/Submenu";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav>
        <Menu />
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Submenu />
        <Link href="/contact">Contato</Link>
      </main>
    </div>
  );
}
