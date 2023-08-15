import React from "react";
import Thumbnail from "../Card/Thumbnail";
import { Container } from "./BodyStyled";
import { ThumbnailType } from "../../types/types";

type Props = {
  thumbnails: ThumbnailType[];
};

const Body = ({ thumbnails }: Props) => {
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
