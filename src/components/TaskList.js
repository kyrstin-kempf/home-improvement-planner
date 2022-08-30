import React, { useState } from "react";

function TaskList({
    task, 
    isEditing, 
    setIsEditing, 
    deleteTask,
    addUpdatedTask
}) {
    const [taskName, setTaskName] = useState(task.name)
    const [isChecked, setIsChecked] = useState(task.task_status)
    
    const handleTaskNameChange = (e) => {
        setTaskName(e.target.value)
    }

    const handleCheckbox = (e) => {
        setIsChecked(e.target.checked)
      }

    const viewTemplate = (
        <>
            <label htmlFor={`checkbox${task.id}`} className={isChecked ? "strike" : ""} id={`label-${task.id}`}>{task.name}</label>
            <div className="edit-trash-save">
                <span id="delete-task" onClick={() => handleDeleteTask()}>x</span>
            </div>
        </>
    );
  
    const editingTemplate = (
        <>
            <input type="text" id={task.id} className="edit-one-task" value={taskName} onChange={handleTaskNameChange}></input>
            <div className="edit-trash-save" id={task.id}>
                <i className="icon-ok icon-large" id="save" onClick={() => {
                    handleUpdateTask()
                    setIsEditing(!isEditing)
                    }
                }></i>
            </div>
        </>
    );

    function handleDeleteTask() {    
        fetch(`http://localhost:9292/tasks/${task.id}`, {
            method: "DELETE",
        })
        .then(r => r.json())
        .then(data => (deleteTask(data)))
      }

     function handleUpdateTask() {    
        fetch(`http://localhost:9292/tasks/${task.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: taskName,
                task_status: isChecked,
            })
        })
        .then(r => r.json())
        .then(data => {
            console.log(data);
          addUpdatedTask(data);
        })
      }

     function handleUpdateTaskStatus() {    
        fetch(`http://localhost:9292/tasks/${task.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: taskName,
                task_status: !isChecked,
            })
        })
        .then(r => r.json())
        .then(data => {
            console.log(data);
          addUpdatedTask(data);
        })
      }

    return (
        <div>
            <li>
                <input
                type="checkbox" 
                id={`checkbox${task.id}`} 
                checked={isChecked}
                onChange={handleCheckbox}
                onClick={() => handleUpdateTaskStatus()} 
                />
                {isEditing ? editingTemplate : viewTemplate}
            </li>
        </div>
    );
  }
  
  export default TaskList;