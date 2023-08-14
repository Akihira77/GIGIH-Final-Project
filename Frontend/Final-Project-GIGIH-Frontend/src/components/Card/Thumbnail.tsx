import {
  CardBody,
  CardFooter,
  Card,
  Text,
  Image,
  CardHeader,
} from "@chakra-ui/react";
import React from "react";
import { Container } from "./ThumbnailStyled";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

type Props = {
  urlImage: string;
  title: string;
  seller: string;
  videoId: string;
};

const Thumbnail = ({ urlImage, title, seller, videoId }: Props) => {
  const navigate = useNavigate();

  const goToDetail = (id: string) => {
    window.sessionStorage.setItem("room", id);
    navigate(`/video/${id}`);
  };
  return (
    <Container>
      <Card maxW="sm" onClick={() => goToDetail(videoId)}>
        <CardHeader>
          <div className="status">LIVE</div>
          <div className="viewer">
            <AiOutlineEye />
            <span>0</span>
          </div>
        </CardHeader>
        <CardBody>
          <Image src={urlImage} borderRadius="lg" className="card__image" />
        </CardBody>
        <CardFooter>
          <Text className="title">{title}</Text>
          <Text className="seller">
            {seller.substring(0, seller.indexOf("@"))}
          </Text>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default Thumbnail;
