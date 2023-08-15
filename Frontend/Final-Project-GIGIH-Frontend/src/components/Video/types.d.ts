export type CommentsType = {
  username: string;
  comment: string;
  time: string;
};

export type ProductType = {
  id: string;
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
