import React from "react";
import Thumbnail from "../Card/Thumbnail";
import { Container } from "./BodyStyled";

type Props = {
  thumbnails: any[];
};

const ThumbnailArray = [
  { id: 1, title: "abc" },
  { id: 2, title: "abc" },
  { id: 3, title: "abc" },
  { id: 4, title: "abc" },
  { id: 5, title: "abc" },
  { id: 6, title: "abc" },
  { id: 7, title: "abc" },
  { id: 8, title: "abc" },
  { id: 9, title: "abc" },
  { id: 10, title: "abc" },
];

const Body = ({ thumbnails }: Props) => {
  console.log(thumbnails);
  return (
    <Container>
      {thumbnails.map((thumbnail) => {
        return (
          <Thumbnail
            key={thumbnail.thumbnailId}
            urlImage={thumbnail.urlImage[0]}
            product={thumbnail.product}
            seller={thumbnail.product.title}
          />
        );
      })}
      {thumbnails.map((thumbnail) => {
        return (
          <Thumbnail
            key={thumbnail.thumbnailId}
            urlImage={thumbnail.urlImage[0]}
            product={thumbnail.product}
            seller={thumbnail.product.title}
          />
        );
      })}
    </Container>
  );
};

export default Body;
