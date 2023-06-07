import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

function Result() {
  const [isSmallerThanMd] = useMediaQuery("(max-width: 768px)");
  const { accuracy, pressedkey, wpm } = useSelector(
    (store) => store.AppReducer
  );

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="40px"
        marginTop="50px"
      >
        <Text fontSize="xl">
          <Box fontSize="30px">WPM :- {wpm}</Box>
        </Text>
        <Text fontSize="xl">
          <Box fontSize="30px">Accuracy :- {`${accuracy}%`}</Box>
        </Text>
      </Box>
      <Box
        justifyContent="center"
        alignItems="center"
        gap="40px"
        marginLeft={isSmallerThanMd ? "10rem" : "31rem"}
        padding={"1rem"}
      >
        <Text marginTop="20px" fontSize="xl" marginBottom={"1rem"} as="u">
          Number of keys pressed in 5 minutes: {pressedkey}
        </Text>
      </Box>
    </Box>
  );
}

export default Result;
