import Image from "next/image";
import { MouseEventHandler } from "react";

export const CollectionCarouselThumb = ({
  imageURL,
  selected,
  onClick,
}: {
  imageURL: string;
  selected: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}) => {
  //divs for selection  based styles
  return (
    <div
      className={"min-w-full basis-1/4 p-2 relative border ".concat(
        selected ? "border-2 border-yellow-400" : " "
      )}
      onClick={onClick}
    >
      {/* Container for respecting the parent padding */}
      <div className="relative w-full h-full">
        <Image src={imageURL} alt="test" className="object-contain" fill />
      </div>
    </div>
  );
};
