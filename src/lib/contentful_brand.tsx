import { fetchGraphQL } from './contentful';

const POST_GRAPHQL_ADS_COLLECTION = `
      adImage {
        url
      }
      platform
`;

export async function getBrandData() {
  const entries = await fetchGraphQL(`
query {
  brandCollection {
   items{
      sys{
        publishedAt
        firstPublishedAt
        id
      }
      name
      title
      logo {
        url
      }
      tag
      description
      adsCollection(limit:3,order:sys_publishedAt_ASC){
        items {
        ${POST_GRAPHQL_ADS_COLLECTION}
        }
      }
      industry {
        title
        slug
      }
      hq
      funding
      slug
      key
   }
  }
}
`);
  return entries?.data?.brandCollection?.items;
}

export async function getBrandAds(slug: string) {
  const entries = await fetchGraphQL(`
query {
  brandCollection(limit: 1, where: { slug_contains: "${slug}"}) {
    items {
      name
      title
      tag
      logo{
        url
      }
      slug
      key
      adsCollection {
        items {
          sys {
            publishedAt
            firstPublishedAt
          }
          adImage {
            url
          }
          platform
        }
      }
    }
  }
}  
    `);
  return entries?.data?.brandCollection?.items;
}
