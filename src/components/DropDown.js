import { useParams, useNavigate } from "react-router-dom";

function DropDown( { deleteProject, handleEdit } ) {
  const { id } = useParams();
  const navigate = useNavigate();

  function handleDelete() {
    fetch(`http://localhost:9292/projects/${id}`, {
      method: "DELETE",
    })
    .then(r => r.json())
    .then(data => deleteProject(id))
    .then(newProject => navigate('/'))
  }

  return (
    <div id="dropdown">
      <div className="links" id="ed" onClick={handleEdit}>Edit</div>
      <div className="links" onClick={handleDelete}>Delete</div>
    </div>
  );
}

export default DropDown;