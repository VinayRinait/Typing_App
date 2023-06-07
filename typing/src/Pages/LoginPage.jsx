import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Heading,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth } = useSelector((store) => store.AuthReducer);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData) {
      // Check if email and password match
      if (userData.email === email && userData.password === password) {
        // Successful login
        toast({
          title: "Login Successful",
          description: "You have successfully logged in!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        dispatch({ type: "LOGIN", payload: email });

        navigate("/");
      } else {
        // Invalid email or password
        toast({
          title: "Login Failed",
          description: "Invalid email or password. Please try again.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        navigate("/signup");
      }
    } else {
      // User data not found
      toast({
        title: "Login Failed",
        description: "User data not found. Please sign up first.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      navigate("/signup");
    }
  };

  return (
    <>
      <Navbar />
      <Box
        maxWidth="400px"
        mx="auto"
        marginTop={"1rem"}
        marginBottom={"1rem"}
        backgroundColor={"#EDF2F7"}
        padding={"2rem"}
      >
        <Heading as="h2" mb="4" textAlign={"center"}>
          Log In
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl mb="4">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
              <InputRightElement width="3rem">
                <IconButton
                  h="1.5rem"
                  size="sm"
                  variant="ghost"
                  onClick={handleTogglePassword}
                  icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Button type="submit" color={"white"} bg="#101820FF">
            Log In
          </Button>
        </form>
      </Box>
      <Footer />
    </>
  );
};

export default LoginForm;
