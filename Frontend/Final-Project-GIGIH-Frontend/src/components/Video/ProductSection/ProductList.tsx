import { ProductListContainer } from "../VideoStyled";
import { Card, CardBody, Image, Link } from "@chakra-ui/react";
import { ProductType } from "../types";

type Props = {
  products: ProductType[];
};

const ProductList = ({ products }: Props) => {
  return (
    <ProductListContainer>
      <h3>Our Products</h3>
      {products &&
        products.map(({ id, title, url, image }: ProductType) => {
          return (
            <Card maxW="sm" key={id}>
              <Link href={url}>
                <CardBody padding="1rem">
                  <Image src={image} alt={title} borderRadius="lg" />
                </CardBody>
              </Link>
            </Card>
          );
        })}
    </ProductListContainer>
  );
};

export default ProductList;
