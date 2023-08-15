import { Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductList from "../ProductSection/ProductList";
import MainVideo from "./MainVideo";
import { VideoContainer } from "../VideoStyled";

import { getCookie } from "../../../utils/cookie";
import CommentSection from "../CommentSection/CommentSection";
import { CommentsType } from "../../../types/types";
import {
  getUserProducts,
  getVideoById,
  getVideoComments,
} from "../../../utils/fetchApi";

type Props = {
  socket: any;
};

const Video = ({ socket }: Props) => {
  const userName = getCookie("user");
  const room = window.sessionStorage.getItem("room") ?? "";
  const videoId = window.location.href.split("video/")[1];
  const [userComments, setUserComments] = useState<CommentsType[]>([]);
  const [video, setVideo] = useState("");
  const [products, setProducts] = useState([]);

  const convertTime = (createdAt: Date) => {
    const hours = new Date(createdAt).getHours();
    const minutes = new Date(createdAt).getMinutes();

    return hours + ":" + (minutes > 10 ? minutes : `0${minutes}`);
  };

  useEffect(() => {
    if (room !== "") {
      socket.emit("join_room", room);
      const getComments = async () => {
        const { axiosResponse } = await getVideoComments(room);

        const result: CommentsType[] =
          axiosResponse?.data.data.userComments.map(
            ({ username, comment, createdAt }) => {
              return {
                username: username,
                comment: comment,
                time: convertTime(createdAt),
              };
            }
          );

        setUserComments(result);
      };

      getComments();
    }

    const getVideoAndRelatedProduct = async () => {
      const videoResult = await getVideoById(videoId);
      const productResult = await getUserProducts(
        videoResult.axiosResponse?.data.data.userId
      );
      setVideo(videoResult.axiosResponse?.data.data.url);
      setProducts(productResult.axiosResponse?.data.data.products);
    };

    getVideoAndRelatedProduct();
  }, [room, videoId]);

  return (
    <VideoContainer>
      <Grid
        maxHeight="100vh"
        templateAreas={`"left mid right"`}
        templateRows={`1fr`}
        templateColumns={`300px 1fr 300px`}
        gap={4}
      >
        <GridItem area={"left"}>
          <ProductList products={products} />
        </GridItem>
        <GridItem area={"mid"} className="mid">
          <MainVideo video={video} />
        </GridItem>
        <GridItem area={"right"}>
          <CommentSection
            userName={userName}
            videoId={videoId}
            socket={socket}
            userComments={userComments}
            setUserComments={setUserComments}
          />
        </GridItem>
      </Grid>
    </VideoContainer>
  );
};

export default Video;
