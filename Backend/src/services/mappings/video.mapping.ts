import {
  ProductDocument,
  VideoProductDTO,
} from "../../models/product.model.js";
import { VideoDTO } from "../../models/video.model.js";
import {
  VideoThumbnailDTO,
  VideoThumbnailProductDTO,
} from "../../models/videoThumbnail.model.js";

export const thumbnailVideoProductMap = async (
  thumbnails: any[],
  products: any[]
): Promise<VideoThumbnailProductDTO[]> => {
  function productMap(products: any, videoId: any) {
    let product = products.find((product: any) => {
      return product.productId._id.equals(videoId.productId);
    });

    return {
      productId: product.productId._id,
      title: product.productId.title,
      price: product.productId.price,
      url: product.productId.url,
      userId: product.productId.userId,
    };
  }

  const videoThumbnailProductDtos = thumbnails.map(
    ({ _id, videoId, urlImage }) => {
      return {
        thumbnailId: _id,
        videoId: videoId._id,
        urlVideo: videoId.url,
        urlImage: urlImage,
        product: productMap(products, videoId),
      };
    }
  );

  return videoThumbnailProductDtos;
};
export const thumbnailMap = async (
  data: any[]
): Promise<VideoThumbnailDTO[]> => {
  const videoThumbnailDtos: VideoThumbnailDTO[] = data.map((e) => {
    return { videoId: e.videoId, urlImage: e.urlImage };
  });

  return videoThumbnailDtos;
};

export const videoMap = async (data: any[]): Promise<VideoDTO[]> => {
  const videoDtos: VideoDTO[] = data.map((e) => {
    return { productId: e.productId, url: e.url, userId: e.userId };
  });

  return videoDtos;
};
