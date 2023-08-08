import { VideoDTO } from "../../models/video.model.js";
import { VideoThumbnailDTO } from "../../models/videoThumbnail.model.js";

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
    return { productId: e.productId, url: e.url };
  });

  return videoDtos;
};
