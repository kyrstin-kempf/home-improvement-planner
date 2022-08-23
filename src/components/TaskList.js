function TaskList({task, isEditing, setIsEditing, setCanEditTasks, canEditTasks}) {

    const viewTemplate = (
        <label htmlFor={`checkbox${task.id}`}>{task.name}</label>
    )
  
    const editingTemplate = (
        <>
        <input type="text" className="edit-one-task" defaultValue={task.name}></input>
        <div className="edit-trash-save">
        <i className="icon-ok icon-large" id="save"></i>
        <i className="icon-trash icon-large"></i>
        </div>
        </>
    );

    function handleEditOneTask(e) {
        setCanEditTasks(e.target.id)
    }
      
    return (
        <div>
            <li>
                <input 
                type="checkbox" 
                id={`checkbox${task.id}`} 
                // checked={isChecked[task.id]} 
                // onChange={() => handleOnChange(task.id)}
                />
                {isEditing ? editingTemplate : viewTemplate}
                {canEditTasks && (
                    <i className="icon-pencil" id={task.id} onClick={() => {

                        setCanEditTasks(!canEditTasks)
                        setIsEditing(true)
                    }}></i>
                )}
            </li>
        </div>
    );
  }
  
  export default TaskList;