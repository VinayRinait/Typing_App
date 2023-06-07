import { useState } from "react";
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
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show loading spinner
    setIsLoading(true);

    // Create an object with the form data
    const userData = {
      email: email,
      name: name,
      password: password,
    };

    // Store the userData object in localStorage
    localStorage.setItem("userData", JSON.stringify(userData));

    // Simulate an asynchronous API call
    setTimeout(() => {
      // Hide loading spinner
      setIsLoading(false);

      // Show success toast notification
      toast({
        title: "Sign Up Successful",
        description: "You have successfully signed up!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      // Reset form fields
      setEmail("");
      setPassword("");
      setName("");
      navigate("/login");
    }, 2000);
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
          Sign Up
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
            <FormLabel>Name</FormLabel>
            <Input
              type="name"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
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
                required
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

          {isLoading ? (
            <Spinner
              size="sm"
              thickness="2px"
              color="blue"
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
            />
          ) : (
            <Button
              type="submit"
              color="white"
              bg="#101820FF"
              position="relative"
            >
              Sign Up
            </Button>
          )}
        </form>
      </Box>
      <Footer />
    </>
  );
};

export default SignupForm;
