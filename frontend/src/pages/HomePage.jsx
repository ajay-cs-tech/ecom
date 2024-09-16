import { Box, Button, Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
	const { fetchProducts, products } = useProductStore();
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const navigate = useNavigate();

	// Check if user is authenticated (JWT token present in localStorage)
	useEffect(() => {
		const token = localStorage.getItem('authToken');
		if (token) {
			setIsAuthenticated(true);
		} else {
			navigate('/login'); // Redirect to login if not authenticated
		}
	}, [navigate]);

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

	// Logout function: remove token and redirect to login page
	const handleLogout = () => {
		localStorage.removeItem('authToken');
		setIsAuthenticated(false);
		navigate('/login');
	};

	return (
		<Container maxW='container.xl' py={12}>
			<VStack spacing={8}>
				<Text
					fontSize={"30"}
					fontWeight={"bold"}
					bgGradient={"linear(to-r, cyan.400, red.500)"}
					bgClip={"text"}
					textAlign={"center"}
				>
					Current Products 🪃
				</Text>

				<SimpleGrid
					columns={{
						base: 1,
						md: 2,
						lg: 3,
					}}
					spacing={10}
					w={"full"}
				>
					{products.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</SimpleGrid>

				{products.length === 0 && (
					<Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
						Oops 😿, No products found! {" "}
						<Link to={"/create"}>
							<Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
								Create a product
							</Text>
						</Link>
					</Text>
				)}

				{isAuthenticated && (
					<Box mt={8}>
						<Button colorScheme='red' onClick={handleLogout}>
							Logout
						</Button>
					</Box>
				)}
			</VStack>
		</Container>
	);
};

export default HomePage;
