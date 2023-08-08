import React from "react";
import Thumbnail from "../Card/Thumbnail";
import { Container } from "./BodyStyled";

type Props = {};

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

const Body = (props: Props) => {
  return (
    <Container>
      {ThumbnailArray.map((thumbnail) => {
        return <Thumbnail key={thumbnail.id} title={thumbnail.title} />;
      })}
    </Container>
  );
};

export default Body;
