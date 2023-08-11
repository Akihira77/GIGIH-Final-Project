import ProductModel, { ProductDocument } from "./models/product.model.js";
import UserModel, { UserDocument } from "./models/user.model.js";
import UserCommentModel, {
  UserCommentDocument,
} from "./models/userComment.model.js";
import VideoModel, { VideoDocument } from "./models/video.model.js";
import VideoThumbnailModel, {
  VideoThumbnailDocument,
} from "./models/videoThumbnail.model.js";

export const SeedDataUser = async () => {
  const data: UserDocument[] = [
    { username: "andikawa123@gmail.com", password: "andikawa" },
    { username: "dikawa123@gmail.com", password: "dikawa" },
    { username: "awawa123@gmail.com", password: "awaawa" },
  ];

  await UserModel.insertMany(data);
};

export const SeedDataProduct = async () => {
  const users = await UserModel.find();
  const data: ProductDocument[] = [
    {
      title: "The Lord Of The Rings",
      price: 129000,
      url: "https://en.wikipedia.org/wiki/The_Lord_of_the_Rings",
      userId: users[0].id,
      image:
        "https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "The Laws Of Human Nature",
      price: 150000,
      url: "https://www.junkybooks.com/book/the-laws-of-human-nature",
      userId: users[1].id,
      image:
        "https://m.media-amazon.com/images/I/71LSBRGbSoL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Energy Project Financing",
      price: 229000,
      url: "https://www.junkybooks.com/book/energy-project-financing",
      userId: users[1].id,
      image:
        "https://images.routledge.com/common/jackets/crclarge/978100316/9781003169321.jpg",
    },
    {
      title: "Energy Project Financing",
      price: 229000,
      url: "https://www.junkybooks.com/book/energy-project-financing",
      userId: users[1].id,
      image:
        "https://images.routledge.com/common/jackets/crclarge/978100316/9781003169321.jpg",
    },
    {
      title: "Energy Project Financing",
      price: 229000,
      url: "https://www.junkybooks.com/book/energy-project-financing",
      userId: users[2].id,
      image:
        "https://images.routledge.com/common/jackets/crclarge/978100316/9781003169321.jpg",
    },
    {
      title: "Energy Project Financing",
      price: 229000,
      url: "https://www.junkybooks.com/book/energy-project-financing",
      userId: users[2].id,
      image:
        "https://images.routledge.com/common/jackets/crclarge/978100316/9781003169321.jpg",
    },
    {
      title: "Energy Project Financing",
      price: 229000,
      url: "https://www.junkybooks.com/book/energy-project-financing",
      userId: users[2].id,
      image:
        "https://images.routledge.com/common/jackets/crclarge/978100316/9781003169321.jpg",
    },
  ];

  await ProductModel.insertMany(data);
};

export const SeedDataVideo = async () => {
  const products = await ProductModel.find();

  const data: VideoDocument[] = [
    { productId: products[0].id, url: "https://youtu.be/hKRUPYrAQoE" },
    { productId: products[1].id, url: "https://youtu.be/_oOtUsfqo0w" },
    { productId: products[2].id, url: "https://youtu.be/n1a7o44WxNo" },
    { productId: products[3].id, url: "https://youtu.be/_oOtUsfqo0w" },
    { productId: products[4].id, url: "https://youtu.be/hKRUPYrAQoE" },
    { productId: products[5].id, url: "https://youtu.be/_oOtUsfqo0w" },
    { productId: products[6].id, url: "https://youtu.be/hKRUPYrAQoE" },
  ];

  await VideoModel.insertMany(data);
};

export const SeedDataThumbnail = async () => {
  const videos = await VideoModel.find();

  const data: VideoThumbnailDocument[] = [
    {
      videoId: videos[0].id,
      urlImage:
        "https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif",
    },
    {
      videoId: videos[1].id,
      urlImage:
        "https://www.junkybooks.com/administrator/bookimages/647357233721b7.17593093.jpg",
    },
    {
      videoId: videos[2].id,
      urlImage:
        "https://www.junkybooks.com/administrator/bookimages/644599e3001414.84971677.jpg",
    },
    {
      videoId: videos[3].id,
      urlImage:
        "https://www.junkybooks.com/administrator/bookimages/644599e3001414.84971677.jpg",
    },
    {
      videoId: videos[4].id,
      urlImage:
        "https://www.junkybooks.com/administrator/bookimages/644599e3001414.84971677.jpg",
    },
    {
      videoId: videos[5].id,
      urlImage:
        "https://www.junkybooks.com/administrator/bookimages/644599e3001414.84971677.jpg",
    },
    {
      videoId: videos[6].id,
      urlImage:
        "https://www.junkybooks.com/administrator/bookimages/644599e3001414.84971677.jpg",
    },
  ];

  await VideoThumbnailModel.insertMany(data);
};

export const SeedDataComment = async () => {
  const products = await ProductModel.find();

  const data: UserCommentDocument[] = [
    //TODO product 0
    {
      username: "andikawa123@gmail.com",
      productId: products[0].id,
      comment: "This book is very good",
    },
    {
      username: "andikawa123@gmail.com",
      productId: products[0].id,
      comment: "yeah i like it",
    },
    {
      username: "andikawa123@gmail.com",
      productId: products[0].id,
      comment: "woah what an amazing",
    },

    //TODO product 1
    {
      username: "dikawa123@gmail.com",
      productId: products[1].id,
      comment: "This book is very good",
    },
    {
      username: "dikawa123@gmail.com",
      productId: products[1].id,
      comment: "..okay",
    },

    //TODO product 2
    {
      username: "andikawa123@gmail.com",
      productId: products[2].id,
      comment: "This book is very good",
    },

    //TODO product 3
    {
      username: "andikawa123@gmail.com",
      productId: products[3].id,
      comment: "This book is very good",
    },
    {
      username: "andikawa123@gmail.com",
      productId: products[3].id,
      comment: "hahahaha",
    },
    {
      username: "andikawa123@gmail.com",
      productId: products[3].id,
      comment: "This book is very good",
    },

    //TODO product 4
    {
      username: "andikawa123@gmail.com",
      productId: products[4].id,
      comment: "This book is very good",
    },
    {
      username: "andikawa123@gmail.com",
      productId: products[4].id,
      comment: "hahahaha",
    },
    {
      username: "andikawa123@gmail.com",
      productId: products[4].id,
      comment: "This book is very good",
    },

    //TODO product 5
    {
      username: "andikawa123@gmail.com",
      productId: products[5].id,
      comment: "This book is very good",
    },
    {
      username: "andikawa123@gmail.com",
      productId: products[5].id,
      comment: "hahahaha",
    },
    {
      username: "andikawa123@gmail.com",
      productId: products[5].id,
      comment: "This book is very good",
    },

    //TODO product 6
    {
      username: "andikawa123@gmail.com",
      productId: products[6].id,
      comment: "This book is very good",
    },
    {
      username: "andikawa123@gmail.com",
      productId: products[6].id,
      comment: "hahahaha",
    },
    {
      username: "andikawa123@gmail.com",
      productId: products[6].id,
      comment: "This book is very good",
    },
  ];

  await UserCommentModel.insertMany(data);
};
