export const thumbnailVideoProductMap = async (thumbnails, products, users) => {
    function productMap(products, videoId) {
        let product = products.find((product) => {
            return product.productId._id.equals(videoId.productId);
        });
        return {
            productId: product.productId._id,
            userId: product.productId.userId,
        };
    }
    const videoThumbnailProductDtos = thumbnails.map(({ _id, videoId, urlImage, videoName }) => {
        const { userId } = productMap(products, videoId);
        return {
            videoName: videoName,
            thumbnailId: _id,
            videoId: videoId._id,
            urlVideo: videoId.url,
            urlImage: urlImage,
            user: users.find((user) => user.id == userId).username,
            product: productMap(products, videoId),
        };
    });
    return videoThumbnailProductDtos;
};
export const thumbnailMap = async (data) => {
    const videoThumbnailDtos = data.map((e) => {
        return { videoId: e.videoId, urlImage: e.urlImage, videoName: e.videoName };
    });
    return videoThumbnailDtos;
};
export const videoMap = async (data) => {
    const videoDtos = data.map((e) => {
        return { productId: e.productId, url: e.url, userId: e.userId };
    });
    return videoDtos;
};
