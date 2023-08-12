import { Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import MainVideo from "./MainVideo";
import { VideoContainer } from "./VideoStyled";
import YourProfile from "./YourProfile";
import CommentList from "./CommentList";
import { getUserProducts, getVideoById } from "../../utils/fetchApi";

type Props = {};

const Video = (props: Props) => {
  const videoId = window.location.href.split("video/")[1];
  const [video, setVideo] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getVideo = async () => {
      const videoResult = await getVideoById(videoId);
      const productResult = await getUserProducts(
        videoResult.axiosResponse?.data.data.userId
      );
      // console.log(axiosResponse);
      setVideo(videoResult.axiosResponse?.data.data.url);
      setProducts(productResult.axiosResponse?.data.data.products);
    };

    getVideo();
  }, [videoId]);

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
          <ProductList products={products} />
        </GridItem>
        <GridItem border="1px solid #b3b3b3" area={"mid"} className="mid">
          <MainVideo video={video} />
        </GridItem>
        <GridItem border="1px solid #b3b3b3" area={"right"} overflow="hidden">
          <CommentList videoId={videoId} />
        </GridItem>
        <GridItem border="1px solid #b3b3b3" area={"profile"}>
          <YourProfile videoId={videoId} />
        </GridItem>
      </Grid>
    </VideoContainer>
  );
};

export default Video;
