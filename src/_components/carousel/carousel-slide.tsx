import Image from "next/image";

interface CarouselSlideProps {
  imageURL: string;
}
export function CarouselSlide({ imageURL }: CarouselSlideProps) {
  return (
    <div className="min-w-full h-40 relative">
      <Image
        src={imageURL}
        alt="antique image"
        className="object-contain"
        fill
      />
    </div>
  );
}
