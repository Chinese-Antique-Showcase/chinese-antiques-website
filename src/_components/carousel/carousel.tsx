'use client'

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Button } from '@headlessui/react'
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { CarouselSlide } from './carousel-slide'
import Image from 'next/image';
import { DisplayAntique } from '@/_data/antique'


export function Carousel({ Name, Price, MainPhotoURL, AdditionalPhotoURLs }: DisplayAntique) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="overflow-hidden mb-10">

      {/* Viewport */}
      <div ref={emblaRef}>
        <div className="flex">
          {/* the item does not grow or shrink when available space changes
            , initial size is at 100% - equivalent to (flex: grow shrink basis) syntax */}

          {/* border-blue-400 border-8 - testing purposes*/}
          <div className="grow-0 shrink-0 basis-full w-20 h-20 ">
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

      <div className="flex flex-col flex-nowrap justify-self-center items-center gap-1   ">
        <p className="text-lg">{Name}</p>
        <p className="text-slate-500">${Price}</p>
      </div>

      <div className="flex justify-between">
        <Button className="border-spacing-5 " onClick={scrollPrev}>
          <GrFormPrevious size={32} />
        </Button>

        <Button onClick={scrollNext}>
          <GrFormNext size={32} />
        </Button>

      </div>

    </div>
  )
}