import React, { useState } from "react";
import {
  Box,
  Flex,
  Spacer,
  VStack,
  HStack,
  Text,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Box bg="#101820FF" py={4} px={6}>
      <Flex maxW="6xl" mx="auto" align="center">
        <Image src={logo} alt="logo" height={"5rem"} />

        <Spacer />

        <IconButton
          display={{ base: "flex", md: "none" }}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          onClick={toggleMenu}
          color="white"
        />

        <HStack
          spacing={8}
          display={{ base: isOpen ? "flex" : "none", md: "flex" }}
        >
          <Link to={"/"}>
            <Text fontSize="md" color="white">
              Home
            </Text>
          </Link>
          <Text fontSize="md" color="white">
            About
          </Text>
          <Link to={"/signup"}>
            <Text fontSize="md" color="white">
              Signup
            </Text>
          </Link>
          <Link to={"/login"}>
            <Text fontSize="md" color="white">
              Login
            </Text>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
