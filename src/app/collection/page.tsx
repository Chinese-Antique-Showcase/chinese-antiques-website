import { Carousel } from "@/_components/carousel/carousel";
import { AdditionalPhoto, DisplayAntique, RawAntique } from "@/_data/antique";

export const dynamic = "force-static";
async function getAntiquesData() {
  const res = await fetch(`${process.env.STRAPI_URL}/api/antiques?populate=*`, {
    cache: "force-cache", // Cache the data if it doesn't update often
    headers: {
      Authorization: `Bearer ${process.env.API_BEARER_TOKEN}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function CollectionPage() {
  const response = await getAntiquesData();

  const rawAntiques = response.data.map((item: RawAntique) => ({
    Name: item.Name,
    TimePeriod: item.TimePeriod,
    Price: item.Price,
    MainPhotoURL: item.MainPhoto?.formats?.thumbnail?.url
      ? `${process.env.STRAPI_URL}${item.MainPhoto.formats.thumbnail.url}`
      : "",
    AdditionalPhotoURLs:
      item.AdditionalPhotos.map(
        (photo: AdditionalPhoto) =>
          `${process.env.STRAPI_URL}${photo.formats?.thumbnail?.url ?? ""}`
      ) ?? [],
  }));

  return (
    // Collection
    <div
      className="grid 
            
            grid-cols-2 
            auto-rows-auto
            
            
            gap-x-4 px-6 py-16
            
            sm:grid-cols-3"
    >
      {rawAntiques.map((antique: DisplayAntique, index: number) => (
        <Carousel
          key={index}
          Name={antique.Name}
          Price={antique.Price}
          MainPhotoURL={antique.MainPhotoURL}
          AdditionalPhotoURLs={antique.AdditionalPhotoURLs}
        />
      ))}
    </div>
  );
}
