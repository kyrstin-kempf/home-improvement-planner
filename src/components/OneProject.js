import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import DropDown from "./DropDown";
// import NewTask from "./NewTask";

const OneProject = ({ projects, deleteProject }) => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [isShown, setIsShown] = useState(false);
  const [tasks, setTasks] = useState([]);

  const editCard = '⋮'
  const handleClick = () => {
    setIsShown(!isShown)
  };
  
  let thisProject = projects.filter(project => project.id == id)
  // console.log(thisProject)
  let thisProjectTasks = thisProject.map(p => p.tasks)
  console.log(thisProjectTasks)
  console.log(thisProjectTasks.map(t => t.id))

  console.log(projects.filter(project => project.id == id).map(project => (
    project.tasks.map(task => (task.name)))))

  let tasksList = projects.filter(project => project.id == id).map(project => (
      project.tasks.map(task => (      
          <li key={task.id}>
            <input 
            type="checkbox" 
            id={`checkbox-${task.id}`} 
            // checked={isChecked[task.id]} 
            // onChange={() => handleOnChange(task.id)}
            />
            <label htmlFor={`checkbox-${task.id}`}>{task.name}</label>
          </li>
        )))
      ); 
      

  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     const response = await fetch('http://localhost:9292/projects')
  //     const data = await response.json();
  //     addTask(data);
  //   }
    
  //   fetchTasks();
  // }, []);
  
  let result
  const projectPriority = projects.filter(project => project.id == id)
  .map((project) => {
    const a = project.priority
    if (a === 'high') {
        result = (<span className="priority-high-task-view">!!!</span>)
    } else if (a === 'medium') {
        result = (<span className="priority-med-task-view">!!</span>)
    } else if (a === 'low') {
        result = (<span className="priority-low-task-view">!</span>)
    } else {
        result = (<span></span>)
    };
  });

  const handleAddTask = (e) => {
    e.preventDefault();
    console.log('clicked')

  
    const newTaskData = {
        name: name,
        task_status: false,
        project_id: id,
    }

    fetch(`http://localhost:9292/tasks`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newTaskData)
    })
    .then(r => r.json())
    .then(data => {
    addTask(data)
    })
}  

  return (
    <div className="tiles-container">
      {projects
        .filter(project => project.id == id)
        .map(project => (
          <div className="details-container" key={project.id}>
            <div className="item1">
              <h2>{project.name}{result}</h2>
            </div>
            <div className="item2">
              <button className="edit-icon" onClick={handleClick}>{editCard}</button>
              {isShown && (
                <DropDown deleteProject={deleteProject}/>
              )}
            </div>
            <div className="item3">
              {tasksList}
              {/* {t} */}
            </div>
            {/* <NewTask addTask={addTask}/> */}
            <div className="item4">
              <form id="new-task-form" onSubmit={handleAddTask}>
              <input type="text" id="new-task" value={name} onChange={ (e) => setName(e.target.value)} />
              <label htmlFor="new-task"></label>
              <div id="add-task-icon">
                  <input type="submit" className="edit-icon-2" value="＋" />
              </div>
              </form>
            </div>
          </div>
        ))
      }
    </div>
  );
}
export default OneProject;