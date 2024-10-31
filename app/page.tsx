import { Input } from "@/components/ui/input";
import InfoCard from "@/components/infoCard";

export default function Home() {
  return (
    //grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]
    <div className="flex flex-col justify-center p-8">
      <div className="mb-8 flex justify-center">
        <Input className="w-1/2" placeholder="Pikachu, Greninja, etc." />
      </div>
      <div className="grid grid-cols-1 place-items-center gap-x-8 gap-y-10 min-[300px]:grid-cols-2 min-[450px]:grid-cols-3 min-[600px]:grid-cols-4 min-[800px]:grid-cols-5 lg:grid-cols-6">
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
    </div>
  );
}
