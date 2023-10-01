import { CardsCarousel } from "@/components/CardCarousel";
import { Map } from "@/components/Map";
import { getHighlightedStays } from "@/lib/api";
import { Card, Group, Text } from "@mantine/core";

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
      <h3 className="text-2xl mt-24 mb-6">Quelques avis de la communauté</h3>
      <div className="mb-28 flex flex-wrap flex-grow">
        <Comment
          text="J'adore Digital Oasis ! Grâce à eux, j'ai pu planifier mon
          voyage en train à travers la France en toute simplicité. Une
          expérience écologique inoubliable !"
          userName="Marie123"
        />
        <Comment
          text="Digital Oasis a changé ma vie de voyageur. Leurs conseils m'ont permis de découvrir des destinations incroyables tout en préservant l'environnement. Merci pour cette initiative géniale !"
          userName="PierreVoyageur"
        />
        <Comment
          text="Je suis un voyageur passionné de train, et Digital Oasis est mon allié ultime. Leurs recommandations m'ont aidé à explorer la France de manière responsable. Bravo pour votre engagement éco-responsable !"
          userName="ÉcoNomade"
        />
        <Comment
          text="Digital Oasis est la référence pour les amoureux du voyage en train. Leurs articles sont toujours inspirants et leurs conseils pratiques. Je recommande vivement cette association à tous les voyageurs."
          userName="AventureEnTrain"
        />
        <Comment
          text="Digital Oasis incarne l'esprit du voyage responsable. Leurs informations sur les voyages en train m'ont ouvert de nouvelles perspectives. Je suis fier de soutenir cette association. Continuez votre excellent travail !"
          userName="NaturellementNomade"
        />
      </div>
    </main>
  );
}

const Comment = ({ text, userName }: { text: string; userName: string }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className="mb-4">
      <Group justify="space-between">
        <Text fw={500}>{userName}</Text>
      </Group>

      <Text size="sm" c="dimmed">
        {text}
      </Text>
    </Card>
  );
};
