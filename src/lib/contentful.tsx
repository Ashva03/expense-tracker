// import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } from '@/global/enviroment';

// export async function fetchGraphQL(query: string, preview = false, type = ['other']) {
//   return fetch(`https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`, {
//     method: 'POST',
//     cache: 'force-cache',
//     next: { tags: type },
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
//     },
//     body: JSON.stringify({ query }),
//   }).then((response) => response.json());
// }
