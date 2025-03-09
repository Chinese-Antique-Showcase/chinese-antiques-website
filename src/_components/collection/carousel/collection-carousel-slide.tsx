import Image from "next/image";

interface CarouselSlideProps {
  imageURL: string;
}
export function CollectionCarouselSlide({ imageURL }: CarouselSlideProps) {
  return (
    <div className="min-w-full min-h-full relative">
      <Image
        src={imageURL}
        alt="antique image"
        className="object-contain"
        fill
      />
    </div>
  );
}
