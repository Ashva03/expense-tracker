export interface ImageInterface {
  url: string;
}

export interface IndustryDataInterface {
  title: string;
  tabletWidth?: boolean;
}

export interface AdsItemInterface {
  sys: sysInterface;
  adImage: ImageInterface;
  platform: string[];
}

export interface AdsDataInterface {
  items: AdsItemInterface[];
}
export interface sysInterface {
  id: string;
  firstPublishedAt: string;
  publishedAt: string;
}

export interface BrandDataInterface {
  sys: sysInterface;
  name: string;
  title: string;
  logo?: ImageInterface;
  tag?: string;
  description?: string;
  industry?: IndustryDataInterface;
  adsCollection: AdsDataInterface;
  hq?: string;
  funding?: string;
  slug?: string;
  key?: string[];
  isSaved?: boolean;
}

export interface brandReducerInterface {
  industry: string;
  sortType: string;
  savedBrandList: BrandDataInterface[];
  filteredList: BrandDataInterface[];
  brandList: BrandDataInterface[];
  filteredBrandCard: AdsItemInterface[];
}

export interface BrandAdsData {
  sys: sysInterface;
  name: string;
  title: string;
  logo?: ImageInterface;
  tag?: string;
  adsCollection: AdsDataInterface;
  slug?: string;
  key?: string;
}

export interface UpdateSavedBrandListPayload {
  id: string;
  propsName: string;
  value: any;
}
