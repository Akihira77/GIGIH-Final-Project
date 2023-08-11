import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useDisclosure, useToast } from "@chakra-ui/react";
import { login } from "../../utils/fetchApi";
import { useStateProvider } from "../../utils/StateProvider";
import { expiresOneHour } from "../../utils/constant";
import { getCookie } from "../../utils/cookie";
import { Outlet } from "react-router-dom";

type Props = {};

const NavbarContainer = (props: Props) => {
  const user = getCookie("user") == "" ? null : getCookie("user");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleLogin = async () => {
    const { axiosResponse, error } = await login({ username, password });

    onClose();
    if (axiosResponse?.status == 200) {
      document.cookie = `user=${username}; expires=${expiresOneHour}; path=/;`;
      toast({
        title: `${axiosResponse.data.message}`,
        status: "success",
        position: "top-right",
      });
      return;
    }

    toast({
      title: `${error}`,
      status: "error",
      position: "top-right",
    });
  };

  const handleLogout = () => {
    window.document.cookie = `user=;, Max-Age=-99999; path=/;`;
    onClose();
  };
  return (
    <>
      <Navbar
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        setUsername={setUsername}
        setPassword={setPassword}
        handleLogin={handleLogin}
        user={user}
        handleLogout={handleLogout}
      />
      <Outlet />
    </>
  );
};

export default NavbarContainer;
