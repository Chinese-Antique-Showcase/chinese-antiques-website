"use client";

import useEmblaCarousel from "embla-carousel-react";
import { DisplayAntique } from "@/_data/antique";
import { useCallback, useEffect, useState } from "react";
import { CollectionCarouselThumb } from "./collection-carousel-thumb";
import { CollectionCarouselSlide } from "./collection-carousel-slide";

export function CollectionCarouselDisplay({
  Name,
  Price,
  MainPhotoURL,
  AdditionalPhotoURLs,
  Description
}: DisplayAntique) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({
    loop: true,
  });

  const [emblaThumbnailsRef, emblaThumbnailsApi] = useEmblaCarousel({});

  const allPhotos = [MainPhotoURL, ...AdditionalPhotoURLs];

  const thumbnailClick = (index: number) => {
    if (!emblaMainApi || !emblaThumbnailsApi) return;

    setSelectedIndex(index);
    emblaMainApi?.scrollTo(index);
    emblaThumbnailsApi?.scrollTo(index);
  };

  const onSelectMainSlide = useCallback(() => {
    if (!emblaMainApi || !emblaThumbnailsApi) return;

    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbnailsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbnailsApi, setSelectedIndex]);

  useEffect(() => {
    emblaMainApi?.on("select", onSelectMainSlide);
  }, [selectedIndex, emblaMainApi, onSelectMainSlide]);

  return (
    <div className="grid grid-rows-subgrid row-span-5">
      {/* Main Container */}
      <div className="w-full h-full border flex justify-center">
        {/* Minimally need 2 things - embla viewport and embla container for rendering slides: https://www.embla-carousel.com/get-started/react/  */}
        {/* 1. Embla viewport - the root node that triggers upon click events */}
        <div ref={emblaMainRef} className="overflow-hidden max-w-full">
          {/* 2. Embla container */}
          <div className="flex w-44 h-44">
            {/* Embla  slides */}
            {allPhotos.map((photoURL: string, index: number) => (
              <CollectionCarouselSlide key={index} imageURL={photoURL} />
            ))}
          </div>
        </div>
      </div>

      {/* Thumbnail container */}

      <div className="mt-2">
        <div ref={emblaThumbnailsRef} className="overflow-hidden max-w-full">
          <div className="flex gap-2 h-24 w-24">
            {allPhotos.map((photoURL: string, index: number) => (
              <CollectionCarouselThumb
                imageURL={photoURL}
                selected={index === selectedIndex}
                onClick={() => thumbnailClick(index)}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>


      <p className="text-xl mb-2">{Name}</p>
      <p className="text-base mb-2">{Description}</p>

      <p className="text-slate-500">${Price}</p>
      

      {/* <div className="flex flex-col flex-nowrap justify-self-center items-center gap-1   ">
        </div> */}
    </div>
  );
}
