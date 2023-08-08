import { ProductDTO, VideoProductDTO } from "../../models/product.model.js";

export const productMap = async (data: any[]): Promise<ProductDTO[]> => {
  const productDtos: ProductDTO[] = data.map((e) => {
    return { title: e.title, price: e.price, url: e.url };
  });

  return productDtos;
};

export const videoProductMap = async (
  data: any[]
): Promise<VideoProductDTO[]> => {
  const videoProductDtos: VideoProductDTO[] = data.map((e) => {
    return { id: e._id, title: e.title, price: e.price, url: e.url };
  });

  return videoProductDtos;
};
