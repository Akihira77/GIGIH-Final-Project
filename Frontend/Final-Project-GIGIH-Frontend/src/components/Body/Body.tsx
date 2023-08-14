import React from "react";
import Thumbnail from "../Card/Thumbnail";
import { Container } from "./BodyStyled";

type Props = {
  thumbnails: any[];
};

const Body = ({ thumbnails }: Props) => {
  // console.log(thumbnails);
  return (
    <Container>
      {thumbnails.map((thumbnail) => {
        return (
          <Thumbnail
            key={thumbnail.thumbnailId}
            urlImage={thumbnail.urlImage}
            title={thumbnail.videoName}
            seller={thumbnail.user}
            videoId={thumbnail.videoId}
          />
        );
      })}
    </Container>
  );
};

export default Body;
