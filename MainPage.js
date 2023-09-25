import React from "react";
import Navbar from "./Component/Navbar";
import ProjectForm from "./Component/ProjectForm";
import Projects from "./Component/Projects";
import CustomCursor from "./Component/CustomCursor";
import { Route, Routes, Navigate } from 'react-router-dom';
import AddProject from "./Component/AddProject";

function MainPage() {
  return (
    <div>
        <Navbar />
        <CustomCursor /> 
        <AddProject />{/* Render the custom cursor component */}
          {/* Your content components here */}
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/Addition" element={<ProjectForm />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
    </div>
  );
}

export default MainPage;
