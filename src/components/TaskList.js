import React, { useState } from "react";

function TaskList({
    task, 
    isEditing, 
    setIsEditing, 
    setCanEditTasks, 
    canEditTasks,
    deleteTask,
    addUpdatedTask
}) {
    const [taskName, setTaskName] = useState(task.name)
    const [isChecked, setIsChecked] = useState(task.task_status)
    
    const handleTaskNameChange = (e) => {
        setTaskName(e.target.value)
    }

    const handlePencilClick = (e) => {
        // console.log(e.target.id)
        setCanEditTasks(!canEditTasks)
        setIsEditing(!isEditing)
      };

    const viewTemplate = (
        <>
            <label htmlFor={`checkbox${task.id}`} className={isChecked ? "strike" : ""} id={`label-${task.id}`}>{task.name}</label>
            <div className="edit-trash-save">
                <span id="delete-task" onClick={() => handleDeleteTask()}>x</span>
            </div>
            {canEditTasks && (
                <i className="icon-pencil" id={task.id} onClick={handlePencilClick}></i>
            )}
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

    // function handleCheck(e) {
    //     console.log(e.target.checked);
    //     setIsChecked(e.target.checked);
    //     handleUpdateTask()
    // }

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
        // setIsEditing(!isEditing);
      }
      
    return (
        <div>
            <li>
                <input 
                type="checkbox" 
                id={`checkbox${task.id}`} 
                checked={isChecked} 
                onChange={(e) => {
                
                    setIsChecked(current => !current)
                }}
                onClick={() => handleUpdateTask()}
                />
                {isEditing ? editingTemplate : viewTemplate}
            </li>
        </div>
    );
  }
  
  export default TaskList;