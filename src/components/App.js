import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import AllProjects from './AllProjects';
import NewProject from './NewProject';
import OneProject from './OneProject';

const App = () => {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    document.title = "Home Projects";
  }, []);
  
  const addProject = (project) => {
    // debugger
    setProjects([...projects, project])
  }

  // console.log(projects)
  
  const addTask = (task) => {
    // console.log(task);
    const p = projects.find(p => p.id == task.project_id)
    const newP = {...p, tasks: [...p.tasks, task]}
    // const newTasks = [...p.tasks, task]
    // const newP = {...p, tasks: newTasks}
    const newProjects = projects.map((proj) => proj.id === p.id ? newP : proj)
    // const newProjects = projects.map((proj) => {
    //   if (proj.id === p.id) {
    //     return newP
    //   } else {
    //     return proj
    //   }
    // })
    // console.log(newP)
    setProjects(newProjects)
  }
  
  function deleteProject(id) {
    const dProject = projects.filter(project => project.id.toString() !== id)
    setProjects(dProject);
  }

  const addUpdatedTask = (updatedTask) => {
    const p = projects.find(p => p.id == updatedTask.project_id)
    const projTask = p.tasks.map(t => {
      if(t.id == updatedTask.id) {
        return updatedTask
      } return t
    })
    const newP = {...p, tasks: projTask}
    const newProjects = projects.map((proj) => proj.id === p.id ? newP : proj)
    setProjects(newProjects);
  }
  
  function deleteTask(data) {
    const p = projects.find(p => p.id == data.project_id)
    console.log(p)
    const projTask = p.tasks.filter(t => t.id !== data.id)
    const newP = {...p, tasks: projTask}
    const newProjects = projects.map((proj) => proj.id === p.id ? newP : proj)
    setProjects(newProjects);
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
        <Route path="/projects/:id" element={projects.length > 0 && <OneProject 
        projects={projects} 
        addTask={addTask} 
        deleteProject={deleteProject} 
        deleteTask={deleteTask}
        addUpdatedTask={addUpdatedTask}
        />} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;