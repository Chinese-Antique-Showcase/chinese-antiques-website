import { CollectionCarouselDisplay } from "@/_components/collection/carousel/collection-carousel-display";
import { AdditionalPhoto, DisplayAntique, IDItem } from "@/_data/antique";

// TODO - change to create own 404 page / look into more
// A configuration value to denote whether or not to generate pages that exist

//Individual pages may not exist first time / will be updated , so we need to generate / revalidate them
//caching still happens automatically: export const dynamic = 'auto' - is done BTS
//(https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamicparams)
export const dynamicParams = true;

//-------------------------------------
//-----------------------------------
//Generate static paths at build time
export async function generateStaticParams() {
  const response = await fetch(
    `${process.env.STRAPI_URL}/api/antiques?fields=id`,
    {
      cache: "force-cache", // Cache the data if it doesn't update often
      headers: {
        Authorization: `Bearer ${process.env.API_BEARER_TOKEN}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Error: ${response}`);
  }

  const antiques = await response.json();

  // antiqueIDs
  return antiques.data.map((item: IDItem) => ({
    antique: item.documentId,
  }));
}

async function getAntiqueData(antiqueID: string) {
  const res = await fetch(
    `${process.env.STRAPI_URL}/api/antiques/${antiqueID}?populate=*`,
    {
      cache: "force-cache", // Cache the data if it doesn't update often
      headers: {
        Authorization: `Bearer ${process.env.API_BEARER_TOKEN}`,
      },
      next: { tags: [antiqueID] },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function AntiquePage({
  params,
}: {
  params: Promise<{ antique: string }>;
}) {
  const { antique } = await params;

  const response = await getAntiqueData(antique);

  const rawAntique: DisplayAntique = {
    ID: response.data.documentId,
    Name: response.data.Name,
    Price: response.data.Price,
    Description: response.data.Description,
    MainPhotoURL: response.data.MainPhoto?.formats?.thumbnail?.url
      ? `${process.env.STRAPI_URL}${response.data.MainPhoto.formats.thumbnail.url}`
      : "",
    AdditionalPhotoURLs:
      response.data.AdditionalPhotos?.map(
        (photo: AdditionalPhoto) =>
          `${process.env.STRAPI_URL}${photo.formats?.thumbnail?.url ?? ""}`
      ) ?? [],
  };

  return (
    <div className="grid grid-cols-1 auto-rows-auto">
      <CollectionCarouselDisplay
        key={0}
        Name={rawAntique.Name}
        Price={rawAntique.Price}
        Description={rawAntique.Description}
        MainPhotoURL={rawAntique.MainPhotoURL}
        AdditionalPhotoURLs={rawAntique.AdditionalPhotoURLs}
        ID={rawAntique.ID}
      />
    </div>
  );
}
