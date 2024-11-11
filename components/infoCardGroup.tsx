import { getPokemonId, getPokemonImageUrlById } from "@/lib/pokeAPI";
import InfoCard from "@/components/infoCard";
import { getFilteredPokemons } from "@/lib/pokeAPI";
import { Pokemon } from "@/lib/definitions";

export default async function InfoCardGroup({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const pokemons = await getFilteredPokemons(query, currentPage);

  return (
    <div className="grid grid-cols-1 place-items-center gap-x-12 gap-y-10 min-[500px]:grid-cols-2 min-[700px]:grid-cols-3 min-[800px]:grid-cols-4 lg:grid-cols-5">
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
  );
}
