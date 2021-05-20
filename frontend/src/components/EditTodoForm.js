import {useState} from "react";

function EditTodoForm({todo, updateTodo}) {

    const [description, setDescription] = useState(todo.description);
    const [status, setStatus] = useState(todo.status);

    function onSubmit(event) {
        event.preventDefault();
        updateTodo({...todo,description, status })
    }


    return <div>

        <h2>Edit Todo Item</h2>

        <form onSubmit={onSubmit}>
            <div>
                <label>
                    Description:
                    <input type="text"
                           value={description}
                           onChange={(event) => setDescription(event.target.value)}/>
                </label>
            </div>
            <div>
                <label>
                    Status:
                    <select value={status} onChange={event => setStatus(event.target.value)}>
                        <option value="">--Please choose status--</option>
                        <option value="OPEN">Open</option>
                        <option value="IN_PROGRESS">In Progress</option>
                        <option value="DONE">Done</option>
                    </select>
                </label>
            </div>
            <button>Save</button>
        </form>
    </div>
}


export default EditTodoForm
