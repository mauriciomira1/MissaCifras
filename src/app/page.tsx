import CoverMain from "@/components/CoverMain/CoverMain";
import CoverSecondary from "@/components/CoverSecondary/CoverSecondary";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center mx-4">
      <CoverMain />
      <CoverSecondary />
    </main>
  );
}
