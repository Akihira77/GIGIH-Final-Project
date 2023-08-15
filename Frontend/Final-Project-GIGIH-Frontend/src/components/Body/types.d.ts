export type ProductType = {
  productId: string;
  userId: string;
};

export type ThumbnailType = {
  videoName: string;
  videoId: string;
  thumbnailId: string;
  urlVideo: string;
  urlImage: string;
  user: string;
  product: ProductType;
};
