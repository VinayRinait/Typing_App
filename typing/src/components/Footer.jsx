import React from "react";
import { Box, Flex, Text, Link, Stack, Image } from "@chakra-ui/react";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <Box bg="#101820FF" color="white" py={10} px={6}>
      <Flex
        direction={{ base: "column", md: "column" }}
        maxW="6xl"
        mx="auto"
        align="center"
        justify="center"
      >
        <Image src={logo} alt="logo" height={"5rem"} />
        <Text fontSize="sm" mt={4} textAlign={{ base: "center", md: "start" }}>
          &copy; {new Date().getFullYear()} TYPO. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
