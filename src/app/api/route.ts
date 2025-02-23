import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  const webhookSecret = process.env.WEBHOOK_SECRET;
  const authHeader = request.headers.get("Authorization");

  if (!authHeader || authHeader !== `Bearer ${webhookSecret}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    revalidatePath("/collection");
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return new Response(`Webhook error: ${message}`, {
      status: 400,
    });
  }

  revalidatePath("/collection");

  return new Response("Revalidation triggered", {
    status: 200,
  });
}
