//Tutorial: https://nextjs.org/docs/app/building-your-application/routing/route-handlers

import { revalidatePath, revalidateTag } from "next/cache";

export async function POST(request: Request) {
  const refreshToken = process.env.STRAPI_DATA_REFRESH_TOKEN;
  const authHeader = request.headers.get("Authorization");

  if (!authHeader || authHeader !== `Bearer ${refreshToken}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    // Force cache refreshing on main page
    revalidatePath("/collection");

    const body = await request.json();

    // Each collection page is associated with a cache tag. When the data changes, the cache tag is revalidated
    if (body?.id) {
      revalidateTag(`${body?.id}`);
    } else if (body?.documentIds) {
      for (const id of body?.documentIds) {
        revalidateTag(`${id}`);
      }
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return new Response(`Refresh cache path: ${message}`, {
      status: 400,
    });
  }

  return new Response("Revalidation triggered", {
    status: 200,
  });
}
