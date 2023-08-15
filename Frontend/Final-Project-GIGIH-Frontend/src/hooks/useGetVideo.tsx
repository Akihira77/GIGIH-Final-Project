import { useEffect, useState } from "react";
import { getUserProducts, getVideoById } from "../utils/fetchApi";

export const useGetVideo = ({ videoId }) => {
  const [video, setVideo] = useState("");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getVideoAndRelatedProduct = async () => {
      const videoResult = await getVideoById(videoId);
      const productResult = await getUserProducts(
        videoResult.axiosResponse?.data.data.userId
      );
      // console.log(axiosResponse);

      setVideo(videoResult.axiosResponse?.data.data.url);
      setProducts(productResult.axiosResponse?.data.data.products);
    };

    getVideoAndRelatedProduct();
  }, [videoId]);

  return { video, products };
};
