import CoverMain from "@/components/CoverMain/CoverMain";
import CoverSecondary from "@/components/CoverSecondary/CoverSecondary";
import TopMain from "@/components/TopArea/TopMain";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center mx-4">
      <CoverMain />
      <CoverSecondary />
      <div className="h-4 w-full my-7 bg-gray-200"></div>
      <TopMain />
    </main>
  );
}
