import React, { useState, useRef } from "react";
import { useParams} from "react-router-dom";

const NewTask = ({ addTask }) => {
    const [name, setName] = useState('');
    const { id } = useParams();
    const nameRef = useRef(null);

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
        setName('')
    })
    }

  return (
    <div className="item4">
        <form id="new-task-form" onSubmit={handleAddTask}>
        <input type="text" id="new-task" value={name} ref={nameRef} onChange={ (e) => setName(e.target.value)} />
        <label htmlFor="new-task"></label>
        <div id="add-task-icon">
            <input type="submit" className="edit-icon-2" value="＋" />
        </div>
        </form>
    </div>
    );
}

export default NewTask;