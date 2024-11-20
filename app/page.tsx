import Search from "@/components/search";
import PokedexPagination from "@/components/pokedexPagination";
import InfoCardGroup from "@/components/infoCardGroup";
import { getPages } from "@/lib/pokeAPI";

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await getPages(query);

  return (
    <div className="flex flex-col justify-center px-4 py-8 min-[700px]:px-32">
      <Search placeholder="Search: Pikachu, Greninja, etc." />
      <InfoCardGroup query={query} currentPage={currentPage} />
      <PokedexPagination totalPages={totalPages} />
    </div>
  );
}
