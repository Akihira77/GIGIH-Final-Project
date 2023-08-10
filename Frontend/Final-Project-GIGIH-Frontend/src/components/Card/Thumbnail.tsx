import {
  Button,
  ButtonGroup,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Card,
  Text,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { Container } from "./ThumbnailStyled";
import { useNavigate } from "react-router-dom";

type Props = {
  urlImage: string;
  product: any;
  seller: string;
};

const Thumbnail = ({ urlImage, product, seller }: Props) => {
  const navigate = useNavigate();

  const goToDetail = (id: string) => {
    navigate(`/video/${id}`);
  };
  return (
    <Container>
      <Card maxW="sm" onClick={() => goToDetail(product.productId)}>
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
