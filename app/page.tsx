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
    //grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]
    <div className="flex flex-col justify-center px-32 py-8">
      <Search placeholder="Search: Pikachu, Greninja, etc." />
      <InfoCardGroup query={query} currentPage={currentPage} />
      <PokedexPagination totalPages={totalPages} />
    </div>
  );
}
