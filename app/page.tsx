import { CardsCarousel } from "@/components/CardCarousel";
import { Comments } from "@/components/Comments";
import { Map } from "@/components/Map";
import { getHighlightedStays } from "@/lib/api";

export default async function Home() {
  const highlightedStays = await getHighlightedStays();
  return (
    <main>
      <h3 className="text-2xl mb-6">À la une</h3>
      <CardsCarousel highlightedStays={highlightedStays} />
      <h3 className="text-2xl mt-24 mb-6">Nos séjours en Europe</h3>
      <div className="mb-24">
        <Map />
      </div>
      <Comments />
    </main>
  );
}
