export type CommentsType = {
  username: string;
  comment: string;
  time: string;
};

export type ProductType = {
  title: string;
  url: string;
  image: string;
};

export type MessageType = {
  room: string;
  username: string;
  message: string;
  time: string;
};

export type CommentDataSocket = {
  username: string;
  message: string;
  time: string;
};

export type UserType = {
  username: string;
};

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
