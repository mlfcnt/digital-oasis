"use client";

import { Paper, Text, Title, Button } from "@mantine/core";
import classes from "./CardsCarousel.module.css";
import Link from "next/link";
import { Stay } from "@/lib/api";

type CardProps = Pick<Stay, "id" | "category" | "image" | "title">;

export const Card = ({ image, title, category, id }: CardProps) => {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        {category ? (
          <Text className={classes.category} size="xs">
            {category}
          </Text>
        ) : null}

        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        <Link href={`/stays/${id}`}>{"Plus d'informations"}</Link>
      </Button>
    </Paper>
  );
};
