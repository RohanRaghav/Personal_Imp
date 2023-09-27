import React from "react";
import Navbar from "./Component/Navbar";
import Projects from "./Component/Projects";
import CustomCursor from "./Component/CustomCursor";
import { Route, Routes, Navigate } from 'react-router-dom';
import "./MainPage.css";


function MainPage() {
  return (
    <div className="app-container">
        <Navbar />
        <CustomCursor /> 
        {/* Render the custom cursor component */}
          {/* Your content components here */}
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
    </div> 
  );
}

export default MainPage;
