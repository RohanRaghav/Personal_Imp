import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ProjectItem from './ProjectItem'; // Replace with your content component

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Define your content data with options
  const allProjects = [
    { label: 'Project 1', year: 2022 },
    { label: 'Project 2', year: 2021 },
    { label: 'Project 3', year: 2020 },
    // Add more options as needed
  ];

  // Function to handle search
  const handleSearch = (term) => {
    setSearchTerm(term);

    // Filter projects based on search term
    const filtered = allProjects.filter((project) =>
      project.label.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredProjects(filtered);
  };

  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={allProjects} // Provide the options array here
        getOptionLabel={(option) => option.label} // Define how to display the labels
        sx={{ width: 300 }}
        onInputChange={(e, value) => handleSearch(value)}
        renderInput={(params) => <TextField {...params} label="Search" />}
      />
      <div>
        {searchTerm ? (
          // Display filtered content
          filteredProjects.map((project) => (
            <ProjectItem key={project.label} project={project} />
          ))
        ) : (
          // Display all content when search term is empty
          allProjects.map((project) => (
            <ProjectItem key={project.label} project={project} />
          ))
        )}
      </div>
    </div>
  );
}
