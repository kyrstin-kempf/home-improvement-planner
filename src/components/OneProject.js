import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const OneProject = ({ projects }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const editCard = '⋮'

  let test = projects.filter(project => project.id == id).map(project => (
    project.tasks.map(task => (
      <li key={task.id}>
        <input type="checkbox" id="task" name="task" />
        <label htmlFor="task">{task.name}</label>
      </li>
    )))
  ); 
    // return console.log(project.tasks[0]);
  
  return (
    <div className="tiles-container">
      {projects
        .filter(project => project.id == id)
        .map(project => (
          <div className="grid-container" key={project.id}>
            <div className="item1">
              <h2>{project.name}</h2>
            </div>
            <div className="item2">
              <div id="edit-icon" title="edit project">{editCard}</div>
            </div>
            <div className="item3">
              {test}
            </div>
          </div>
        ))
      } 
    </div>
  );
}
export default OneProject;