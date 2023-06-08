import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  Button,
  Text,
  Input,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
const plainText = [
  "aada aa aa aa",
  "sds sklj;s ss ss",
  "dd dd dd dd",
  "ll ll ll ll",
  "asdf l;l;",
  "ls dj al dl",
  "as as as as",
  "dss dss dss fdss",
  "df df df df",
  "ff f;f jfjf ff",
  "gg gg gg gg",
  "asdj ;lgf",
  "sdja hl;g",
  "djsa lg;h",
  "hh hsdah hh hh",
  "jj jj jj jj",
  "kkkk gghkk kk",
  "gh gh gh gh",
  "jk jk jk jk",
  "l; l; l; l;",
  "sa df gj lk",
  "dj aasdfl sk ;l",
  "as df gj kl",
  "sd jg la ;k",
  "djsa fghl",
  "sadj hgfl",
  "jdassdl;gh",
  "adsjjhj ;flg",
  "sjaddssglh;",
  "js;lhg",
  "das das das das",
  "jala alala lalala",
];
const ComparePage = () => {
  const presentText = useSelector((store) => store.AppReducer.presentText);
  const [errorMessage, setErrorMessage] = useState("");

  const [inputtypes, setInputtypes] = useState(""); // State for user input
  const [presenttchar, setPresenttchar] = useState(presentText[0]); // State for the current character to be displayed
  const [runt, setRunt] = useState(null); // Time when typing starts
  const [all, setAll] = useState(1); // Total characters typed
  const [gltchars, setGltchars] = useState(0); // Total incorrect characters typed
  const [curc, setCurc] = useState({}); // Object to store correctness of each character
  const [seconds, setSeconds] = useState(0); // Time elapsed in seconds
  const [times, setTimes] = useState(null); // Interval ID for updating seconds
  const [allchar, setAllchar] = useState(0); // Total characters typed for calculating WPM
  const [gltchar, setGltchar] = useState(0); // Total incorrect characters typed for calculating WPM
  const [level, setLevel] = useState("plainText"); // Current level of text to be typed
  const [isSmallerThanMd] = useMediaQuery("(max-width: 768px)"); // Media query for responsiveness
  let totalCharacterTyped; // Variable to store total characters typed
  const dispatch = useDispatch();
  const toast = useToast();
  // Check if 5 minutes have passed and calculate WPM
  if (seconds % 300 === 0 && seconds !== 0 && times) {
    clearInterval(times);
    setSeconds(0);
    const match = (Date.now() - runt) / 1000;
    const WPM = Math.round(allchar / 5 / (match / 60));
    const NumWPM = Math.round((allchar - gltchar) / 5 / (match / 60));
    const accuracy = Math.floor((NumWPM * 100) / WPM);
    if (accuracy < 0) {
      accuracy = 0; // Set accuracy to 0 if it goes below 0
    }
    totalCharacterTyped = allchar;
    dispatch({ type: "5MIN", payload: { totalCharacterTyped, WPM } });
  }

  // Start the timer
  function runtr() {
    setAllchar(0);
    setGltchar(0);
    let id = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    setTimes(id);
  }

  // Change the text to be typed
  const handleTextChange = () => {
    if (level === "plainText") {
      const randomValue = Math.floor(Math.random() * plainText.length);

      setPresenttchar(plainText[randomValue]);

      dispatch({ type: "CHANGE", payload: plainText[randomValue] });
    }
  };

  // Handle user input
  const handleInput = (e) => {
    const value = e.target.value;
    setInputtypes(value);
    setErrorMessage(""); // Clear the error message

    if (seconds === 0 && !times) {
      let id = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      setTimes(id);
    }

    let test = "";
    for (let i = 0; i < value.length; i++) {
      test = test + presentText[i];
      if (value[i] === presentText[i] && curc[i] === undefined) {
        curc[i] = true;
        setCurc({ ...curc });
      } else if (curc[i] === undefined) {
        curc[i] = false;
        setCurc({ ...curc });
      }
    }

    if (value.length > inputtypes.length) {
      setAll((pre) => pre + 1);
      setAllchar(allchar + 1);
    }

    // Calculate incorrect characters
    if (!runt) {
      setRunt(Date.now());
    }

    if (test !== value) {
      setGltchars(gltchars + 1);
      setGltchar(gltchar + 1);

      // Set the error message
      setErrorMessage("Wrong word! Delete the incorrect characters.");
      return; // Exit the function to prevent further processing
    } else {
      if (value[value.length - 1] === presentText[value.length - 1]) {
        setPresenttchar(presentText[value.length]);
      }
    }

    // Check if all characters have been typed correctly
    if (test === value && value.length === presentText.length) {
      const match = (Date.now() - runt) / 1000;
      const WPM = Math.round(all / 5 / (match / 60));
      const NumWPM = Math.round((all - gltchars) / 5 / (match / 60));
      let accuracy = Math.floor((NumWPM * 100) / WPM);
      if (accuracy < 0) {
        accuracy = 0; // Set accuracy to 0 if it goes below 0
      }
      setInputtypes("");
      setRunt(null);
      setAll(1);
      setCurc({});
      setGltchars(0);
      dispatch({ type: "SHOW", payload: { wpm: WPM, accuracy: accuracy } });
      handleTextChange();
    }
  };

  // Set initial text
  useEffect(() => {
    handleTextChange();
  }, []);

  const minutes = Math.floor(seconds / 60);
  const secondss = seconds % 60;
  // Display the error message
  if (errorMessage !== "") {
    toast({
      title: "Error",
      description: errorMessage,
      status: "error",
      duration: 300,
      isClosable: true,
    });
  }
  return (
    <>
      <div>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="20px"
          marginTop="20px"
          marginBottom="30px"
        >
          <Box display="flex" justifyContent="center">
            <Text fontSize="30px">Enter Key -</Text>
            <Button
              variant="outlined"
              sx={{
                // width: 120,
                color: "white",
                marginLeft: "20px",
                backgroundColor: "teal",
                fontSize: "25px",
                height: 50,
              }}
            >
              {presenttchar === " " ? "Space" : presenttchar}
            </Button>
          </Box>
          <Box sx={{ fontSize: "20px" }}>
            Minutes: {minutes} Seconds: {secondss}
            {seconds === 0 && (
              <Button
                variant="outlined"
                sx={{
                  marginLeft: "10px",
                  color: "white",
                  backgroundColor: "teal",
                }}
                onClick={runtr}
              >
                Start
              </Button>
            )}
          </Box>
        </Box>

        <Box
          justifyContent={"center"}
          marginLeft={isSmallerThanMd ? "15rem" : "22rem"}
        >
          <Input
            placeholder="Start Typing........"
            sx={{
              width: { sm: 300, md: 700 },
              height: "9rem",
              // border: "1px solid black",
              marginTop: "20px",
              "& .MuiInputBase-root": {
                height: 80,
                borderRadius: "10px",
              },
            }}
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              marginRight: "10rem",
            }}
            fontSize={"3rem"}
            value={inputtypes}
            onChange={handleInput}
          />
        </Box>
      </div>
    </>
  );
};

export default ComparePage;
