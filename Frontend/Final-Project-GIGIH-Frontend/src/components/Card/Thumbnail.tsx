import { CardBody, CardFooter, Card, Text, Image } from "@chakra-ui/react";
import React from "react";
import { Container } from "./ThumbnailStyled";
import { useNavigate } from "react-router-dom";

type Props = {
  urlImage: string;
  product: any;
  seller: string;
  videoId: string;
};

const Thumbnail = ({ urlImage, product, seller, videoId }: Props) => {
  const navigate = useNavigate();

  const goToDetail = (id: string) => {
    navigate(`/video/${id}`);
  };
  return (
    <Container>
      <Card maxW="sm" onClick={() => goToDetail(videoId)}>
        <CardBody>
          <Image src={urlImage} borderRadius="lg" className="card__image" />
        </CardBody>
        <CardFooter>
          <Text fontSize="xl">{product.title}</Text>
          <Text fontSize="lg">{seller}</Text>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default Thumbnail;
