import { useEffect, useState } from "react";
import { ThumbnailType } from "../types/types";
import { getVideos, searchVideo } from "../utils/fetchApi";

export const useGetLiveVideo = ({ searchText }) => {
  const [thumbnails, setThumbnails] = useState<ThumbnailType[]>([]);

  useEffect(() => {
    const getVid = async (text: string | null) => {
      let result: ThumbnailType[];
      if (!text) {
        const { axiosResponse } = await getVideos();
        result = axiosResponse!.data.data;
      } else {
        const { axiosResponse } = await searchVideo(text);
        result = axiosResponse!.data.data;
      }
      setThumbnails(result);
    };

    getVid(searchText);
  }, [searchText]);

  return thumbnails;
};
