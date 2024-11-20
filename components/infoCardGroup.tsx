import { getPokemonId, getPokemonImageUrlById } from "@/lib/pokeAPI";
import InfoCard from "@/components/infoCard";
import { getFilteredPokemons } from "@/lib/pokeAPI";
import type { ListResult } from "@/lib/definitions";

export default async function InfoCardGroup({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const pokemons = await getFilteredPokemons(query, currentPage);

  return (
    <div className="grid grid-cols-2 place-items-center gap-x-4 gap-y-10 min-[700px]:grid-cols-3 min-[700px]:gap-x-8 min-[800px]:grid-cols-4 lg:grid-cols-5">
      {pokemons.map((p: ListResult) => {
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
  );
}
