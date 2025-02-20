import { IDItem } from "@/_data/antique";

// TODO - change to create own 404 page / look into more 
// A configuration value to denote whether or not to generate pages that exist 
// (https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamicparams)
export const dynamicParams = false;
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
export default async function AntiquePage({
  params,
}: {
  params: Promise<{ antique: string }>;
}) {
  const { antique } = await params;

  return <p>hello world {antique}</p>;
}
