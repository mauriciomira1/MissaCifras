import CoverMain from "@/components/CoverMain/CoverMain";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CoverMain />
    </main>
  );
}
