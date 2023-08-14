import { ProductListContainer } from "./VideoStyled";
import { Card, CardBody, Image, Link } from "@chakra-ui/react";

type Props = {
  products: any[];
};

const ProductList = ({ products }: Props) => {
  return (
    <ProductListContainer>
      <h3>Our Products</h3>
      {products &&
        products.map(({ id, title, price, url, image }) => {
          return (
            <Card maxW="sm" key={id}>
              <Link href={url}>
                <CardBody padding="1rem">
                  <Image src={image} alt={title} borderRadius="lg" />
                </CardBody>
                {/* <CardFooter>
                <Text fontSize="xl">{title}</Text>
                <Text fontSize="lg">{price}</Text>
              </CardFooter> */}
              </Link>
            </Card>
          );
        })}
    </ProductListContainer>
  );
};

export default ProductList;
