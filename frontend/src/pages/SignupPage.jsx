import { useState } from "react";
import { Box, Button, Container, Heading, Input, VStack, useToast, useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const toast = useToast();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignup = async () => {
        try {
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await response.json();

            if (!data.success) {
                toast({
                    title: "Error",
                    description: data.message,
                    status: "error",
                    isClosable: true,
                });
            } else {
                toast({
                    title: "Success",
                    description: "Signup successful! Redirecting to login...",
                    status: "success",
                    isClosable: true,
                });
                navigate("/login"); // Redirect to login page after signup
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Something went wrong",
                status: "error",
                isClosable: true,
            });
        }
    };

    return (
        <Container maxW="container.sm">
            <VStack spacing={8}>
                <Heading as="h1" size="2xl" textAlign="center" mb={8}>
                    Signup
                </Heading>
                <Box
                    w="full"
                    bg={useColorModeValue("white", "gray.800")} // Handle light/dark mode for background
                    p={6}
                    rounded="lg"
                    shadow="md"
                >
                    <VStack spacing={4}>
                        <Input
                            placeholder="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <Input
                            placeholder="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <Input
                            placeholder="Password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <Button colorScheme="blue" onClick={handleSignup} w="full">
                            Signup
                        </Button>

                        <p>By Signing Up you agree with all our Terms and Conditions.</p>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    );
};

export default SignupPage;
