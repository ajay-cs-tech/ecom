import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios"; 
import { useNavigate } from "react-router-dom"; 

const LoginPage = () => {
	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	});
	const toast = useToast();
	const navigate = useNavigate(); 

	const handleLogin = async () => {
		try {
			const response = await axios.post('/api/auth/login', credentials); 
			const { success, message, token } = response.data; 
			if (!success) {
				toast({
					title: "Error",
					description: message,
					status: "error",
					isClosable: true,
				});
			} else {
				toast({
					title: "Success",
					description: message,
					status: "success",
					isClosable: true,
				});
				
				
				localStorage.setItem('authToken', token);
				
				
				navigate('/');
			}
		} catch (error) {
			toast({
				title: "Error",
				description: error.response?.data?.message || "Login failed",
				status: "error",
				isClosable: true,
			});
		}
	};

	return (
		<Container maxW={"container.sm"}>
			<VStack spacing={8}>
				<Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
					Login
				</Heading>

				<Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>
					<VStack spacing={4}>
						<Input
							placeholder='Email'
							name='email'
							type='email'
							value={credentials.email}
							onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
						/>
						<Input
							placeholder='Password'
							name='password'
							type='password'
							value={credentials.password}
							onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
						/>

						<Button colorScheme='blue' onClick={handleLogin} w='full'>
							Login
						</Button>
					</VStack>
				</Box>
			</VStack>
		</Container>
	);
};

export default LoginPage;
