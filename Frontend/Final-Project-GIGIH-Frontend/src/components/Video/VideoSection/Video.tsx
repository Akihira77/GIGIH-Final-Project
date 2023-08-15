import { Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductList from "../ProductSection/ProductList";
import MainVideo from "./MainVideo";
import { VideoContainer } from "../VideoStyled";

import { getCookie } from "../../../utils/cookie";
import CommentSection from "../CommentSection/CommentSection";
import { CommentsType } from "../../../types/types";
import { useJoinRoom } from "../../../hooks/useJoinRoom";
import { useGetVideo } from "../../../hooks/useGetVideo";

type Props = {
  socket: any;
};

const Video = ({ socket }: Props) => {
  const userName = getCookie("user");
  const room = window.sessionStorage.getItem("room") ?? "";
  const videoId = window.location.href.split("video/")[1];
  const [userComments, setUserComments] = useState<CommentsType[]>([]);
  const [urlVideo, setUrlVideo] = useState("");

  const { video, products } = useGetVideo({ videoId });
  const result = useJoinRoom({ room, socket });
  useEffect(() => {
    setUrlVideo(video);
    setUserComments(result);
  }, [video, result]);

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
          <MainVideo video={urlVideo} />
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
