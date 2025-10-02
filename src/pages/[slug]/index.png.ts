import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { generateOgImageForPost } from "@utils/generateOgImages";
import { slugifyStr } from "@utils/slugify";

export async function getStaticPaths() {
  const posts = await getCollection("blog").then(
    (p: CollectionEntry<"blog">[]) =>
      p.filter(
        ({ data }: CollectionEntry<"blog">) => !data.draft && !data.ogImage
      )
  );

  return posts.map((post: CollectionEntry<"blog">) => ({
    params: { slug: slugifyStr(post.data.title) },
    props: post,
  }));
}

export const GET: APIRoute = async ({ props }) =>
  new Response(await generateOgImageForPost(props as CollectionEntry<"blog">), {
    headers: { "Content-Type": "image/svg+xml" },
  });
