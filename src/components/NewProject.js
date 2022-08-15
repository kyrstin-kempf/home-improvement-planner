import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

function NewProject() {
  const [name, setName] = useState('');
  const [priority, setPriority] = useState('');

  const navigate = useNavigate();

  handleSubmit = e => {
    e.preventDefault();
    console.log('clicked')
  }

  const projectData = {
    name: name,
    priority: priority,
  }

    return(
    <div className="body">
      <h1>Project Form Page</h1>
      <form>
        <div className="row">
          <div className="col-25">
            <label htmlFor='name'>Name</label>
          </div>
          <div className="col-75">
            <input type="text" id='name'/>
          </div>
          <div className="col-25">
            <label htmlFor='priority'>Priority</label>
          </div>
          <div className="col-75">
            <div className="radio-options">
                <label className="radio-label">
                    <input type="radio" name="priority_level" value="High" className="radio-circle"/>
                    <span className="new-radio"></span>High
                </label>
                <label className="radio-label">
                    <input type="radio" name="priority_level" value="Medium" className="radio-circle"/>
                    <span className="new-radio"></span>Medium
                </label>
                <label className="radio-label">
                    <input type="radio" name="priority_level" value="Low" className="radio-circle"/>
                    <span className="new-radio"></span>Low
                </label>
            </div>
            </div>
          </div>
        <div className="button-container">
        <input type="submit" value="Add Project" className="new-project-button"/>
        </div>
      </form>
    </div>
    );
}

export default NewProject;

      {/* <div className="col-25">
            <label htmlFor='total-cost'>Total Estimated Cost</label>
          </div>
          <div className="col-75">
            <input type="text" id='total-cost'/>
          </div>
        </div> */}