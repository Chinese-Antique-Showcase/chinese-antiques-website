import Image from "next/image";
import Link from "next/link";

export const CollectionClickableDisplayItem = ({
  Name,
  Price,
  MainPhotoURL,
  ID,
}: {
  Name: string;
  Price: number;
  MainPhotoURL: string;
  ID: string;
}) => {
  return (
    <div className="grid grid-rows-subgrid row-span-3 mb-4">
      <Link href={`/collection/${ID}`}>
        <div className="min-w-full h-36 relative">
          <Image
            src={MainPhotoURL}
            alt="antique image"
            className="object-contain"
            fill
          />
        </div>
      </Link>

      <Link href={`/collection/${ID}`}>
        <p className="text-sm leading-tight">{Name}</p>
      </Link>
      
      <p className="text-slate-500 text-sm">${Price}</p>
    </div>
  );
};
