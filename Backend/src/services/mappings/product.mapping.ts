import { ProductDTO, VideoProductDTO } from "../../models/product.model.js";

export const productMap = async (data: any[]): Promise<ProductDTO[]> => {
  const productDtos: ProductDTO[] = data.map(({ title, price, url, image }) => {
    return { title, price, url, image };
  });

  return productDtos;
};

export const videoProductMap = async (
  data: any[]
): Promise<VideoProductDTO[]> => {
  const videoProductDtos: VideoProductDTO[] = data.map(
    ({ id, title, price, url, userId, image }: VideoProductDTO) => {
      return {
        id: id,
        title: title,
        price: price,
        url: url,
        userId: userId,
        image: image,
      };
    }
  );

  return videoProductDtos;
};
