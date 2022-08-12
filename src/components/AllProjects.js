import ProjectTile from "./ProjectTile";

function AllProjects( {projects} ) {
  
    const projectList = projects.map((project) => <ProjectTile key={ project.id } project={ project } />)

    return (
        <div className="body"> 
        <h1>Home Improvement Projects</h1>
        <p className="center-text">Click the + to reveal more details</p>
        {projectList}
        </div>
    );
}
export default AllProjects;