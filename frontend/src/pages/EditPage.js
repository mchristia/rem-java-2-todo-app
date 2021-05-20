import {useParams} from "react-router-dom";
import EditTodoForm from "../components/EditTodoForm";

function EditPage({ todos,updateTodo }) {
    const { id } = useParams()

    const todo = todos.find(item => item.id === id)


    return <div>
        {todo && <EditTodoForm todo={todo} updateTodo={updateTodo}/>}
    </div>
}


export default EditPage
