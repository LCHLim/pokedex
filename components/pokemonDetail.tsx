import Image from "next/image";
import { Progress } from "@/components/ui/progress";

export default function PokemonDetail({ pokemon }: { pokemon: any }) {
  function renderStats() {
    return pokemon.stats.map((s: any) => {
      const statName = s.stat.name;
      const statValue = s.base_stat;

      return (
        <div key={statName} className="lg:flex lg:items-stretch">
          <p className="lg:w-1/2">
            {statName}: {statValue}
          </p>
          <Progress className="m-auto lg:w-1/2" value={statValue} />
        </div>
      );
    });
  }

  return (
    <div>
      <p className="text-center text-xl capitalize sm:text-2xl">
        {pokemon.name}
      </p>
      <Image
        className="m-4 mx-auto"
        alt={`Picture of ${pokemon.name}`}
        height={250}
        width={250}
        src={pokemon.sprites.other["official-artwork"].front_default}
        priority
      />
      <div className="m-4 flex justify-center gap-4">
        <p className="rounded-md bg-slate-200 p-2 text-center">
          Weight: {pokemon.weight / 10} kg
        </p>
        <p className="rounded-md bg-slate-200 p-2 text-center">
          Height: {pokemon.height / 10} m
        </p>
      </div>

      <div className="my-8 flex flex-col gap-3">{renderStats()}</div>
    </div>
  );
}
