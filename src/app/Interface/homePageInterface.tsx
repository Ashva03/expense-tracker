export interface ImageDataInterface {
  url: string;
}

interface ImageSliderInterface {
  Data: ImageDataInterface[];
  isLogin?: boolean;
}

interface ImageCollectionInterface{
  items : ImageDataInterface[]
}

export interface HomeDataInterface {
  title: string;
  description: string;
  primaryButton: string;
  tag: string;
  imagesCollection?: ImageCollectionInterface
}