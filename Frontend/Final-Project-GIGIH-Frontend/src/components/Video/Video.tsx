import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import ProductList from "./ProductList";
import MainVideo from "./MainVideo";
import { VideoContainer } from "./VideoStyled";
import YourProfile from "./YourProfile";
import CommentList from "./CommentList";

type Props = {};

const Video = (props: Props) => {
  const videoId = window.location.href.split("video/")[1];

  return (
    <VideoContainer>
      <Grid
        h="100vh"
        templateAreas={`"left mid right"
      "left mid profile"`}
        templateRows={`490px 200px`}
        templateColumns={`300px 1fr 300px`}
        gap={4}
      >
        <GridItem border="1px solid #b3b3b3" area={"left"}>
          <ProductList videoId={videoId} />
        </GridItem>
        <GridItem border="1px solid #b3b3b3" area={"mid"} className="mid">
          <MainVideo videoId={videoId} />
        </GridItem>
        <GridItem border="1px solid #b3b3b3" area={"right"} overflow="hidden">
          <CommentList videoId={videoId} />
        </GridItem>
        <GridItem border="1px solid #b3b3b3" area={"profile"}>
          <YourProfile />
        </GridItem>
      </Grid>
    </VideoContainer>
  );
};

export default Video;
