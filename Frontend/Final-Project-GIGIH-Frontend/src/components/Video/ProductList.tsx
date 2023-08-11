import React, { useEffect, useState } from "react";
import { ProductListContainer } from "./VideoStyled";
import { useStateProvider } from "../../utils/StateProvider";
import { getProductsFromVideo } from "../../utils/fetchApi";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

type Props = {
  videoId: string;
};

const ProductList = ({ videoId }: Props) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      const { axiosResponse, error } = await getProductsFromVideo(videoId);

      // console.log(axiosResponse?.data.data);
      if (error) {
        alert("Error has happened");
        navigate("/");
        return;
      }
      setProducts(axiosResponse?.data.data.products);
    };

    getProducts();
  }, [videoId]);
  return (
    <ProductListContainer>
      {products &&
        products.map(({ id, title, price, url, image }) => {
          return (
            <Link href={url}>
              <Card maxW="sm" key={id}>
                <CardBody padding="1rem">
                  <Image src={image} alt={title} borderRadius="lg" />
                </CardBody>
                {/* <CardFooter>
                <Text fontSize="xl">{title}</Text>
                <Text fontSize="lg">{price}</Text>
              </CardFooter> */}
              </Card>
            </Link>
          );
        })}
    </ProductListContainer>
  );
};

export default ProductList;
