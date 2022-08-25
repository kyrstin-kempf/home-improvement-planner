import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

function NewProject({ addProject }) {
  const [name, setName] = useState('');
  const [priority, setPriority] = useState('');

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    console.log('clicked')

    const projectData = {
      name: name,
      priority: priority,
    }

    fetch(`http://localhost:9292/projects`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectData)
    })
    .then(r => r.json())
    .then(data => { 
      addProject(data)
    })
    // add to state array
    .then(newProject => navigate('/'))
}

    return (
    <div className="body">
      <h1>Project Form Page</h1>
      <form onSubmit={ handleSubmit }>
        <div className="row">
          <div className="col-25">
            <label htmlFor='name'>Name</label>
          </div>
          <div className="col-75">
            <input type="text" id='name' value={name} onChange={ (e) => setName(e.target.value) }/>
          </div>
          <div className="col-25">
            <label htmlFor='priority'>Priority</label>
          </div>
          <div className="col-75">
            <div className="radio-options">
                <label className="radio-label">
                    <input type="radio" name="priority_level" className="radio-circle" value={priority} onClick={ () => setPriority('high') }/>
                    <span className="new-radio"></span>High
                </label>
                <label className="radio-label">
                    <input type="radio" name="priority_level" className="radio-circle" value={priority} onClick={ () => setPriority('medium') }/>
                    <span className="new-radio"></span>Medium
                </label>
                <label className="radio-label">
                    <input type="radio" name="priority_level" className="radio-circle" value={priority} onClick={ (e) => setPriority('low') }/>
                    <span className="new-radio"></span>Low
                </label>
            </div>
            </div>
          </div>
        <input type="submit" className="new-project-button" value="Add Project" />
      </form>
    </div>
    );
}

export default NewProject;
