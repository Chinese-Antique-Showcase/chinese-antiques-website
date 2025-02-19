import Image from "next/image";

interface CarouselSlideProps {
  imageURL: string;
}
export function CarouselSlide({ imageURL }: CarouselSlideProps) {
  return (
    <div className="grow-0 shrink-0 basis-full w-20 h-20 ">
      <Image
        src={imageURL}
        alt="antique image"
        className="object-contain"
        fill
      />
    </div>
  );
}
