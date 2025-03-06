"use client";

import useEmblaCarousel from "embla-carousel-react";
import { CarouselSlide } from "./carousel-slide";
import Image from "next/image";
import { DisplayAntique } from "@/_data/antique";

export function Carousel({
  Name,
  Price,
  MainPhotoURL,
  AdditionalPhotoURLs,
}: DisplayAntique) {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
  });

  return (
    <div className="grid grid-rows-subgrid row-span-4">
      {/* Minimally need 2 things - embla viewport and embla container for rendering slides: https://www.embla-carousel.com/get-started/react/  */}
      {/* 1. Embla viewport - the root node that triggers upon click events */}
      <div ref={emblaRef} className="overflow-hidden">
        {/* 2. Embla container */}
        <div className="flex">
          {/* Embla  slides */}
          <div className="min-w-full h-40 relative">
            <Image
              src={MainPhotoURL}
              alt="antique image"
              className="object-contain"
              fill
            />
          </div>

          {AdditionalPhotoURLs.map((photoURL: string, index: number) => (
            <CarouselSlide key={index} imageURL={photoURL} />
          ))}
        </div>
      </div>

      <p className="text-lg">{Name}</p>
      <p className="text-slate-500">${Price}</p>

      {/* <div className="flex flex-col flex-nowrap justify-self-center items-center gap-1   ">
        </div> */}
    </div>
  );
}
