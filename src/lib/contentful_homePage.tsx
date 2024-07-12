import { fetchGraphQL } from './contentful';

export async function getHomePageData(id: string) {
  const entries = await fetchGraphQL(`
    query {
      homePage(id:"${id}"){
        name
        title
        description
        tag
        primaryButton
        sliderList1Collection {
          items {
            url
          }
        }
        sliderList2Collection {
          items {
            url
          }
        }
        sliderList3Collection {
          items {
            url
          }
        }
      }
    }
    `);
  return entries?.data?.homePage;
}

export async function getIndustryFields() {
  const entries = await fetchGraphQL(`
    query {
  industryCollection {
    items {
      title
    }
  }
}
    `);
  return entries?.data?.industryCollection?.items;
}
