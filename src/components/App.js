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
    setProjects(newProjects)
  }
  
  function deleteProject(id) {
    const dProject = projects.filter(project => project.id.toString() !== id)
    // console.log(dGod);
    setProjects(dProject);
    // setGods(gods.filter(god => god.id !== id));
  }
  
  // function editTask(editTaskData) {
  //   // console.log(e.target.id)
  //   const p = projects.find(p => p.id == editTaskData.project_id)

  //   const editedTaskList = projects.map((proj) => {
  //     if (p) {
  //       return {...p, tasks: [...p.tasks, task]}
  //     }
  //     return proj
  //   });
  //   setProjects(editedTaskList);
  // }

  //   const newProjects = projects.map((proj) => {
  //     //   if (proj.id === p.id) {
  //     //     return newP
  //     //   } else {
  //     //     return proj
  //     //   }
  //     // })
    
  //   const newTasks = [...p.tasks, task]
  //   const newP = {...p, tasks: newTasks}
  // })

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
        <Route path="/projects/:id" element={<OneProject projects={projects} addTask={addTask} deleteProject={deleteProject} />} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;