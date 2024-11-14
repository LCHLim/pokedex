import { getPokemonDetailById } from "@/lib/pokeAPI";
import PokemonDetail from "@/components/pokemonDetail";
import NavigationButton from "@/components/navigationButton";
import { MAX_POKEMON_COUNT } from "@/lib/pokeAPI";

export default async function Page({
  params,
}: {
  params: Promise<{ pokemonId: string }>;
}) {
  const { pokemonId } = await params;
  const currentPage = Number(pokemonId);
  const pokemon = await getPokemonDetailById(currentPage);

  return (
    <div>
      <div className="relative h-full w-full py-4 pl-[10%]">
        <NavigationButton text="Back" url="/" disabled={false} />
      </div>

      <div className="flex items-center justify-center gap-8">
        <NavigationButton
          text="<"
          url={`/${currentPage - 1}`}
          disabled={currentPage <= 1}
        />
        <div className="w-1/2">
          <PokemonDetail pokemon={pokemon} />
        </div>
        <NavigationButton
          text=">"
          url={`/${currentPage + 1}`}
          disabled={currentPage >= MAX_POKEMON_COUNT}
        />
      </div>
    </div>
  );
}
