import { type CollectionEntry } from "astro:content";
import postOgImage from "./og-templates/post";
import siteOgImage from "./og-templates/site";

export async function generateOgImageForPost(post: CollectionEntry<"blog">) {
  const svg = await postOgImage(post);
  return new TextEncoder().encode(svg);
}

export async function generateOgImageForSite() {
  const svg = await siteOgImage();
  return new TextEncoder().encode(svg);
}
