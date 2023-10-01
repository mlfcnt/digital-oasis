"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Stay } from "@/lib/api";
import "./carousel.css";

type Props = {
  highlightedStays: Stay[];
};

export const Carousel = ({ highlightedStays }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 5_000,
    }),
  ]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {highlightedStays.map((stay) => (
            <div className="embla__slide" key={stay.id}>
              <p>{stay.title}</p>
              <Image
                className="embla__slide__img"
                src={stay.image}
                alt={`Image of ${stay.title}`}
                width={100_000}
                height={100_000}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
