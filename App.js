import React, { useState } from "react";
import CustomCursor from "./Component/CustomCursor";
import MainPage from "./MainPage";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignIn from "./Component/SignIn"; // Import the SignIn component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle user sign-in
  const handleSignIn = () => {
    // Perform your authentication logic here.
    // For simplicity, we'll assume the user is authenticated on sign-in.
    setIsAuthenticated(true);
  };

  // Function to handle user sign-out
  const handleSignOut = () => {
    // Perform sign-out logic here.
    setIsAuthenticated(false);
  };

  return (
    <div>
      <Router>
        <CustomCursor />
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to="/MainPage" /> : <SignIn onSignIn={handleSignIn} />} />
          <Route path="/MainPage/*" element={isAuthenticated ? <MainPage /> : <Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
