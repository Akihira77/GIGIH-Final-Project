import {
  Box,
  Center,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Link as ChakraLink,
  Avatar,
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  ModalFooter,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import React from "react";
import { Container } from "./NavbarStyled";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { get } from "../../utils/fetchApi";

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleLogin: () => Promise<void>;
  user: any;
  handleLogout: () => void;
};

const navbarArray = [
  { id: 1, name: "All", url: "/" },
  { id: 2, name: "Explore", url: "/" },
  { id: 3, name: "Diskon Berkah", url: "/" },
  { id: 4, name: "Offical Store", url: "/" },
  { id: 5, name: "Tips & Rekomendasi", url: "/" },
  { id: 6, name: "Terbaru", url: "/" },
  { id: 7, name: "Upcoming", url: "/" },
];
const Navbar = ({
  isOpen,
  onClose,
  onOpen,
  setUsername,
  setPassword,
  handleLogin,
  user,
  handleLogout,
}: Props) => {
  return (
    <Container>
      <Flex color="white" px="2rem" py="1.5rem" gap="1rem">
        {navbarArray.map(({ id, name, url }) => {
          return (
            <Center key={id}>
              <Box
                className={`box__link ${name == "All" ? "now" : ""}`}
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
      <div className="left__navbar">
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <FiSearch color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Search..." autoFocus />
        </InputGroup>
        <div className="profile" onClick={onOpen}>
          {user ? (
            <Avatar
              name={user.username}
              src="https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
            />
          ) : (
            <Avatar
              name="user"
              src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            />
          )}

          {/* Model */}
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{user ? "Logout" : "Login"}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {user ? (
                  <h6>Logout</h6>
                ) : (
                  <FormControl isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input
                      type="email"
                      id="email"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormControl>
                )}
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="red" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                {user ? (
                  <Button colorScheme="blue" onClick={handleLogout}>
                    Logout
                  </Button>
                ) : (
                  <Button colorScheme="blue" onClick={handleLogin}>
                    Login
                  </Button>
                )}
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
