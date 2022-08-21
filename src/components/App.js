import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import AllProjects from './AllProjects';
import NewProject from './NewProject';
import OneProject from './OneProject';

const App = () => {
  const [projects, setProjects] = useState([]);
  // const [tasks, setTasks] = useState([]);

  
  useEffect(() => {
    document.title = "Home Projects";
  }, []);
  
  const addProject = (project) => {
    // debugger
    setProjects([...projects, project])
  }
  
  function deleteProject(id) {
    const dProject = projects.filter(project => project.id.toString() !== id)
    // console.log(dGod);
    setProjects(dProject);
    // setGods(gods.filter(god => god.id !== id));
  }
  
  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('http://localhost:9292/projects')
      const data = await response.json();
      setProjects(data);
    }
    
    fetchProjects();
  }, []);
  
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllProjects projects={projects} />} />
        <Route path="/projects/new" element={<NewProject addProject={addProject} />} />
        <Route path="/projects/:id" element={<OneProject projects={projects} deleteProject={deleteProject} />} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;
