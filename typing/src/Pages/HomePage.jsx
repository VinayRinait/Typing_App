import React from "react";
import Navbar from "../components/Navbar";
import TypingText from "./TypingText";
import ComparePage from "./ComparePage";
import Result from "./ResultPage";
import Footer from "../components/Footer";
import { Box, Text } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <div>
      <Navbar />

      <Box
        sx={{
          backgroundColor: "#EDF2F7",
          backgroundImage:
            "url('https://res.cloudinary.com/dn1j6dpd7/image/upload/f_auto,q_auto/v1600423784/typing-speed-test/test-bg-right.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <TypingText />
        <ComparePage />
        <Result />
      </Box>

      <Footer />
    </div>
  );
};

export default HomePage;
