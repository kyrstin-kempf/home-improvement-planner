import React from "react";
import { Link } from "react-router-dom"

function ProjectTile({ project }) {

    const a = project.priority
    let result
    if (a === 'high') {
        result = '!!!'
    } else if (a === 'medium') {
        result = '!!'
    } else if (a === 'low') {
        result = '!'
    } else {
        result = ''
    }

    // console.log(result)

    return (
        <div className="tile-container">
            <Link to={`/projects/${project.id}`}>
            <div className="tile" key={project.id}> 
                <div className="tile-body">
                    {result}
                    <h2>{project.name}</h2>
                    {project.priority}
                </div>
            </div>
           </Link>
        </div>
    )
}

export default ProjectTile;