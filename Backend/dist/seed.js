import ProductModel from "./models/product.model.js";
import UserModel from "./models/user.model.js";
import UserCommentModel from "./models/userComment.model.js";
import VideoModel from "./models/video.model.js";
import VideoThumbnailModel from "./models/videoThumbnail.model.js";
export const SeedDataUser = async () => {
    const data = [
        { username: "andikawa123@gmail.com", password: "andikawa" },
        { username: "dikawa123@gmail.com", password: "dikawa" },
        { username: "awawa123@gmail.com", password: "awaawa" },
    ];
    await UserModel.insertMany(data);
};
export const SeedDataProduct = async () => {
    const users = await UserModel.find();
    const data = [
        {
            title: "The Lord Of The Rings",
            price: 129000,
            url: "https://en.wikipedia.org/wiki/The_Lord_of_the_Rings",
            userId: users[0].id,
            image: "https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg",
        },
        {
            title: "The Laws Of Human Nature",
            price: 150000,
            url: "https://www.junkybooks.com/book/the-laws-of-human-nature",
            userId: users[1].id,
            image: "https://m.media-amazon.com/images/I/71LSBRGbSoL._AC_UF1000,1000_QL80_.jpg",
        },
        {
            title: "Energy Project Financing",
            price: 229000,
            url: "https://www.junkybooks.com/book/energy-project-financing",
            userId: users[1].id,
            image: "https://images.routledge.com/common/jackets/crclarge/978100316/9781003169321.jpg",
        },
        {
            title: "Energy Project Financing",
            price: 229000,
            url: "https://www.junkybooks.com/book/energy-project-financing",
            userId: users[1].id,
            image: "https://images.routledge.com/common/jackets/crclarge/978100316/9781003169321.jpg",
        },
        {
            title: "Energy Project Financing",
            price: 229000,
            url: "https://www.junkybooks.com/book/energy-project-financing",
            userId: users[2].id,
            image: "https://images.routledge.com/common/jackets/crclarge/978100316/9781003169321.jpg",
        },
        {
            title: "Energy Project Financing",
            price: 229000,
            url: "https://www.junkybooks.com/book/energy-project-financing",
            userId: users[2].id,
            image: "https://images.routledge.com/common/jackets/crclarge/978100316/9781003169321.jpg",
        },
        {
            title: "Energy Project Financing",
            price: 229000,
            url: "https://www.junkybooks.com/book/energy-project-financing",
            userId: users[2].id,
            image: "https://images.routledge.com/common/jackets/crclarge/978100316/9781003169321.jpg",
        },
    ];
    await ProductModel.insertMany(data);
};
export const SeedDataVideo = async () => {
    const products = await ProductModel.find();
    const data = [
        {
            productId: products[0].id,
            url: "https://www.youtube.com/watch?v=IcvWGB5EqbA",
        },
        { productId: products[1].id, url: "https://youtu.be/_oOtUsfqo0w" },
        { productId: products[2].id, url: "https://youtu.be/n1a7o44WxNo" },
        {
            productId: products[3].id,
            url: "https://www.youtube.com/embed/3Kxf2dHlDpQ",
        },
        { productId: products[4].id, url: "https://youtu.be/hKRUPYrAQoE" },
        {
            productId: products[5].id,
            url: "https://www.youtube.com/watch?v=3Kxf2dHlDpQ&list=RDXbxNtPiCBK8&index=3&pp=8AUB",
        },
        { productId: products[6].id, url: "https://youtu.be/hKRUPYrAQoE" },
    ];
    await VideoModel.insertMany(data);
};
export const SeedDataThumbnail = async () => {
    const videos = await VideoModel.find();
    const data = [
        {
            videoName: "We are live",
            videoId: videos[0].id,
            urlImage: "https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif",
        },
        {
            videoName: "Buruan diskon",
            videoId: videos[1].id,
            urlImage: "https://www.junkybooks.com/administrator/bookimages/647357233721b7.17593093.jpg",
        },
        {
            videoName: "Ayo Buruan diskon",
            videoId: videos[2].id,
            urlImage: "https://www.junkybooks.com/administrator/bookimages/644599e3001414.84971677.jpg",
        },
        {
            videoName: "Cuci gudang",
            videoId: videos[3].id,
            urlImage: "https://www.junkybooks.com/administrator/bookimages/644599e3001414.84971677.jpg",
        },
        {
            videoName: "Ayo gaes murah meriah",
            videoId: videos[4].id,
            urlImage: "https://www.junkybooks.com/administrator/bookimages/644599e3001414.84971677.jpg",
        },
        {
            videoName: "Beli 5 gratis 1",
            videoId: videos[5].id,
            urlImage: "https://www.junkybooks.com/administrator/bookimages/644599e3001414.84971677.jpg",
        },
        {
            videoName: "Live ga ngapa-ngapain",
            videoId: videos[6].id,
            urlImage: "https://www.junkybooks.com/administrator/bookimages/644599e3001414.84971677.jpg",
        },
    ];
    await VideoThumbnailModel.insertMany(data);
};
export const SeedDataComment = async () => {
    const videos = await VideoModel.find();
    const data = [
        {
            username: "andikawa123@gmail.com",
            videoId: videos[0].id,
            comment: "This book is very good",
        },
        {
            username: "andikawa123@gmail.com",
            videoId: videos[0].id,
            comment: "yeah i like it",
        },
        {
            username: "andikawa123@gmail.com",
            videoId: videos[0].id,
            comment: "woah what an amazing",
        },
        {
            username: "dikawa123@gmail.com",
            videoId: videos[1].id,
            comment: "This book is very good",
        },
        {
            username: "dikawa123@gmail.com",
            videoId: videos[1].id,
            comment: "..okay",
        },
        {
            username: "andikawa123@gmail.com",
            videoId: videos[2].id,
            comment: "This book is very good",
        },
        {
            username: "andikawa123@gmail.com",
            videoId: videos[3].id,
            comment: "This book is very good",
        },
        {
            username: "andikawa123@gmail.com",
            videoId: videos[3].id,
            comment: "hahahaha",
        },
        {
            username: "andikawa123@gmail.com",
            videoId: videos[3].id,
            comment: "This book is very good",
        },
        {
            username: "andikawa123@gmail.com",
            videoId: videos[4].id,
            comment: "This book is very good",
        },
        {
            username: "andikawa123@gmail.com",
            videoId: videos[4].id,
            comment: "hahahaha",
        },
        {
            username: "andikawa123@gmail.com",
            videoId: videos[4].id,
            comment: "This book is very good",
        },
        {
            username: "andikawa123@gmail.com",
            videoId: videos[5].id,
            comment: "This book is very good",
        },
        {
            username: "andikawa123@gmail.com",
            videoId: videos[5].id,
            comment: "hahahaha",
        },
        {
            username: "andikawa123@gmail.com",
            videoId: videos[5].id,
            comment: "This book is very good",
        },
        {
            username: "andikawa123@gmail.com",
            videoId: videos[6].id,
            comment: "This book is very good",
        },
        {
            username: "andikawa123@gmail.com",
            videoId: videos[6].id,
            comment: "hahahaha",
        },
        {
            username: "andikawa123@gmail.com",
            videoId: videos[6].id,
            comment: "This book is very good",
        },
    ];
    await UserCommentModel.insertMany(data);
};
