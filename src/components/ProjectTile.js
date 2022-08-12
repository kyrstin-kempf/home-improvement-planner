import React from "react";
import { Link } from "react-router-dom"

function ProjectTile({ project }) {
  
    return (
        <div className="tile-container">
            <div className="tile" key={project.id}> 
                <div className="tile-body">
                    <hr className="line"></hr>
                    <h2>{project.name}</h2>
                    {/* <button className="circ" onClick={handleClick}>{starred}</button> */}
                    <Link to={`/projects/${project.id}`}><button className="expand" id={project.id}>+</button></Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectTile;