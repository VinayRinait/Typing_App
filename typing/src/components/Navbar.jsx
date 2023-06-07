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
          <Text fontSize="md" color="white">
            Home
          </Text>
          <Text fontSize="md" color="white">
            About
          </Text>
          <Text fontSize="md" color="white">
            Services
          </Text>
          <Text fontSize="md" color="white">
            Contact
          </Text>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
