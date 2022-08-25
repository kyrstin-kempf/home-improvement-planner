import React, { useState } from "react";
import { useParams} from "react-router-dom";
import DropDown from "./DropDown";
import TaskList from "./TaskList";

const OneProject = ({ projects, addTask, deleteTask, deleteProject, addUpdatedTask }) => {
  const { id } = useParams();
  const [name, setName] = useState(''); // adding new task
  const [isShown, setIsShown] = useState(false); // dropdown options
  const [canEditTasks, setCanEditTasks] = useState(false); // pencil edit
  const [isEditing, setIsEditing] = useState(false); // show save/delete icons

  const editCard = '⋮'
  const handleClick = () => {
    setIsShown(!isShown)
  };

  const tasksList = projects.filter(project => project.id == id).map(project => (
      project.tasks.map(task => ( 
        <TaskList
        key={task.id} 
        task={task}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        setCanEditTasks={setCanEditTasks}
        canEditTasks={canEditTasks}
        addTask={addTask}
        deleteTask={deleteTask}
        addUpdatedTask={addUpdatedTask}
        />
      )
      ))
    );
      
    // console.log(tasksList)

  let result
  projects.filter(project => project.id == id).map((project) => {
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
    // console.log('clicked')
  
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
      // console.log(data);
      addTask(data)
    })
    setName('')
  }

  function handleEdit() {
    setIsShown(!isShown)
    setIsEditing(!isEditing)
    // setCanEditTasks(!canEditTasks)
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
                <DropDown deleteProject={deleteProject} handleEdit={handleEdit} />
              )}
            </div>
            <div className="item3">
              {tasksList}
            </div>
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