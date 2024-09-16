import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes, Navigate } from "react-router-dom";

import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage"; 
import SignupPage from "./pages/SignupPage";  // Import signup

function App() {
    const isAuthenticated = !!localStorage.getItem('authToken');  // Check if the user is logged in

    return (
        <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
            <Navbar />
            <Routes>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignupPage />} /> {/* Add Signup Page */}
                <Route path='/' element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />  {/* Protect the homepage */}
                <Route path='/create' element={isAuthenticated ? <CreatePage /> : <Navigate to="/login" />} />
            </Routes>
        </Box>
    );
}

export default App;
