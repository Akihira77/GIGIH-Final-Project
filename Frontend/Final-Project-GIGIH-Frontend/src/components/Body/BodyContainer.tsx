import React, { useEffect, useState } from "react";
import Body from "./Body";
import { getVideos } from "../../utils/fetchApi";

type Props = {};

const BodyContainer = (props: Props) => {
  const [thumbnails, setThumbnails] = useState([]);
  useEffect(() => {
    const getVid = async () => {
      const { axiosResponse, error } = await getVideos();
      const result = axiosResponse!.data.data;

      setThumbnails(result);
    };

    getVid();
  }, []);
  return (
    <>
      <Body thumbnails={thumbnails} />
    </>
  );
};

export default BodyContainer;
