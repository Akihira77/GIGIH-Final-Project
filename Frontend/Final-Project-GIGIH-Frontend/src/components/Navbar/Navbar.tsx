import {
  Box,
  Center,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Link as ChakraLink,
} from "@chakra-ui/react";
import React from "react";
import { Container } from "./NavbarStyled";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

type Props = {};

const navbarArray = [
  { id: 1, name: "All", url: "/" },
  { id: 2, name: "Explore", url: "/" },
  { id: 3, name: "Diskon Berkah", url: "/" },
  { id: 4, name: "Offical Store", url: "/" },
  { id: 5, name: "Tips & Rekomendasi", url: "/" },
  { id: 6, name: "Terbaru", url: "/" },
  { id: 7, name: "Upcoming", url: "/" },
];
const Navbar = (props: Props) => {
  return (
    <Container>
      <Flex color="white" px="2rem" py="1.5rem" gap="1rem">
        {navbarArray.map(({ id, name, url }) => {
          return (
            <Center key={id}>
              <Box
                className="box__link"
                boxShadow="md"
                py="1"
                px="4"
                rounded="md"
                border="1px"
              >
                <ChakraLink as={Link} to={url}>
                  {name}
                </ChakraLink>
              </Box>
            </Center>
          );
        })}
      </Flex>
      <div className="search">
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <FiSearch color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Search..." autoFocus />
        </InputGroup>
      </div>
    </Container>
  );
};

export default Navbar;
