"use client";

import { Carousel } from "@mantine/carousel";
import { rem } from "@mantine/core";
import { Card } from "./Card";
import { Stay, getHighlightedStays } from "@/lib/api";
import { useEffect, useState } from "react";

type Props = {
  highlightedStays: Stay[];
};

export const CardsCarousel = ({ highlightedStays }: Props) => {
  const [stays, setStays] = useState<Stay[]>(highlightedStays);

  const slides = stays.map((stay) => (
    <Carousel.Slide key={stay.id}>{<Card {...stay} />}</Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: "100%", sm: "50%" }}
      slideGap={{ base: rem(2), sm: "xl" }}
      align="start"
      slidesToScroll={1}
    >
      {slides}
    </Carousel>
  );
};
