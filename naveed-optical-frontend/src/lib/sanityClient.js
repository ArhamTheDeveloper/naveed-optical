import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';

// createClient() throws synchronously on an invalid projectId (e.g. the
// placeholder fallback used to be 'YOUR_PROJECT_ID', which contains an
// underscore — not allowed). Since this file is imported at module load
// time, that throw used to crash the entire app to a blank white screen
// instead of just failing the product fetch. Guard against that so a
// missing/bad .env degrades gracefully instead of taking down the whole site.
let client;
try {
  if (!projectId) {
    throw new Error('VITE_SANITY_PROJECT_ID is not set. Add it to your .env file.');
  }
  client = createClient({
    projectId,
    dataset,
    useCdn: true,
    apiVersion: '2023-05-03',
  });
} catch (err) {
  console.error('[sanityClient] Failed to initialize Sanity client:', err.message);
  // Minimal stand-in so importers don't crash — fetch() rejects,
  // which the existing try/catch in each component already handles.
  client = {
    fetch: () => Promise.reject(err),
  };
}

export { client };

const builder = projectId ? imageUrlBuilder(client) : null;

export function urlFor(source) {
  if (!builder) return { url: () => '', width: () => ({ url: () => '' }) };
  return builder.image(source);
}
