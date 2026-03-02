import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "0racsf6r",
    dataset: import.meta.env.VITE_SANITY_DATASET || "production",
    token: import.meta.env.VITE_SANITY_TOKEN || "skNolEqbR4bxW5GL9wsBJlySYlXACHkM46o7qx3N9oj4fIYisv650rlYbll8yV7vT7NkmipRySm8oNsK63nBjaqqlbho7EyrKUxiN5stuALvTd17xUrzwFW6Zf2ur6xNeX3RBv5f0JVBZfCbBmBaL5yCgALz9PP4Yn2PBWbBYvDSIUG617jL",
    useCdn: false, // false so we always get fresh content
    apiVersion: '2024-01-01',
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
    return builder.image(source);
}
