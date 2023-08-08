export const thumbnailMap = async (data) => {
    const videoThumbnailDtos = data.map((e) => {
        return { videoId: e.videoId, urlImage: e.urlImage };
    });
    return videoThumbnailDtos;
};
export const videoMap = async (data) => {
    const videoDtos = data.map((e) => {
        return { productId: e.productId, url: e.url };
    });
    return videoDtos;
};
