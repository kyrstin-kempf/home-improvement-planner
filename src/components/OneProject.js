import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams} from "react-router-dom";
import DropDown from "./DropDown";

const OneProject = ({ projects }) => {
  const { id } = useParams();
  const [isChecked, setIsChecked] = useState(false);
  const [isShown, setIsShown] = useState(false)

    const shown = <DropDown/>

    const optionsShown = isShown ? shown : null

    function handleClick() {
        setIsShown(!isShown)
    }

  const handleOnChange = () => {
    setIsChecked(!isChecked)
  };

  const editCard = '⋮'

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
    // return console.log(project.tasks[0]);
  
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
      }
    });

  return (
    <div className="tiles-container">
      {projects
        .filter(project => project.id == id)
        .map(project => (
          <div className="grid-container" key={project.id}>
            <div className="item1">
              <h2>{project.name}{result}</h2>
            </div>
            <div className="item2">
              <div id="edit-icon" onClick={handleClick}>{editCard}</div>
              <div>
              <Link to="/edit">Edit</Link>
              <Link to='/projects'>Delete</Link>
              </div>
            </div>
            <div className="item3">
              {tasksList}
            </div>
          </div>
        ))
      } 
    </div>
  );
}
export default OneProject;