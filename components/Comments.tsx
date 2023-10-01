import { Card, Group, Text } from "@mantine/core";
import React from "react";

export const Comments = () => {
  return (
    <div>
      <h3 className="text-2xl mt-24 mb-6">Avis de la communauté</h3>

      <div className="mb-28 flex flex-wrap">
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
      </div>
    </div>
  );
};

const Comment = ({ text, userName }: { text: string; userName: string }) => {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className="max-w-lg m-4"
    >
      <Group justify="space-between">
        <Text fw={500}>{userName}</Text>
      </Group>
      <blockquote className="mt-2 italic text-slate-900">{text}</blockquote>
    </Card>
  );
};
