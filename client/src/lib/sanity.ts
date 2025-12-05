import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
});

// Helper function to build image URLs
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
