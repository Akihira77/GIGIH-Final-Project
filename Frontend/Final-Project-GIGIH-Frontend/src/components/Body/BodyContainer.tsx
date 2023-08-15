import React, { useEffect, useState } from "react";
import Body from "./Body";
import { getVideos, searchVideo } from "../../utils/fetchApi";
import { useSearchParams } from "react-router-dom";
import { ThumbnailType } from "./types";

type Props = {
  socket: any;
};

const BodyContainer = ({ socket }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchText = searchParams.get("searchText");

  const room = window.sessionStorage.getItem("room");
  const [thumbnails, setThumbnails] = useState<ThumbnailType[]>([]);
  useEffect(() => {
    if (room) {
      socket.emit("leave_room", room);

      window.sessionStorage.removeItem("room");
    }
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
  return (
    <>
      <Body thumbnails={thumbnails} />
    </>
  );
};

export default BodyContainer;
