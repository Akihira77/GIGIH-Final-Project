import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Box,
  Link as ChakraLink,
} from "@chakra-ui/react";
import React from "react";
import { DrawerContainer } from "./DrawerExampleStyled";
import { Link } from "react-router-dom";
const DrawerExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement | any>();

  return (
    <DrawerContainer>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        First Time
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>First Time</DrawerHeader>

          <DrawerBody>
            <h1>Welcome</h1>
            <p>You can still use this website without login</p>
            <p>But if you want to try use comment chat</p>
            <p>You can use</p>
            <Box bg="#282828" p="4" color="white">
              <div style={{ paddingBottom: "10px" }}>
                <label htmlFor="email">Email: andikawa123@gmail.com</label>{" "}
                <br />
                <label htmlFor="password">Password: andikawa123</label>
              </div>
              <div>
                <label htmlFor="email">Email: dikawa123@gmail.com</label> <br />
                <label htmlFor="password">Password: dikawa123</label>
              </div>
            </Box>
            <br />
            <p>
              Then go to{" "}
              <ChakraLink as={Link} to="/play" color="teal.500">
                Play
              </ChakraLink>
            </p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </DrawerContainer>
  );
};

export default DrawerExample;
