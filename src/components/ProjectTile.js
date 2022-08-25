import React from "react";
import { Link } from "react-router-dom"

function ProjectTile({ project }) {

    const a = project.priority
    let result
    if (a === 'high') {
        result = (<span className="priority-high">!!!</span>)
    } else if (a === 'medium') {
        result = (<span className="priority-med">!!</span>)
    } else if (a === 'low') {
        result = (<span className="priority-low">!</span>)
    } else {
        result = (<span></span>)
    }

    return (
        <div className="tile-container">
            <Link to={`/projects/${project.id}`}>
            <div className="tile" key={project.id}> 
                <div>
                    <div className="tile-block">{result}</div>
                    <h2>{project.name}</h2>
                </div>
            </div>
           </Link>
        </div>
    )
}

export default ProjectTile;