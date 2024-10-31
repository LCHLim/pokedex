import { Input } from "@/components/ui/input";
import InfoCard from "@/components/infoCard";
import {
  getPokemonList,
  getPokemonId,
  getPokemonImageUrlById,
  Pokemon
} from "@/lib/pokeAPI";

export default async function Home() {
  const offset = 0;
  const limit = 40;
  const pokemons = await getPokemonList(limit, offset);

  return (
    //grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]
    <div className="flex flex-col justify-center px-32 py-8">
      <div className="mb-8 flex justify-center">
        <Input className="w-1/2" placeholder="Pikachu, Greninja, etc." />
      </div>
      <div className="grid grid-cols-1 place-items-center gap-x-12 gap-y-10  min-[500px]:grid-cols-2 min-[700px]:grid-cols-3 min-[800px]:grid-cols-4 lg:grid-cols-5">
        {pokemons.map((p: Pokemon) => {
          const pokemonId = getPokemonId(p);
          const imageUrl = getPokemonImageUrlById(pokemonId);
          return (
            <InfoCard
              name={p.name}
              id={pokemonId}
              key={pokemonId}
              imageUrl={imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
}
