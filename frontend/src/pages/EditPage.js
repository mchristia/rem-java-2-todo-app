import { useParams } from 'react-router-dom'
import EditTodoForm from '../components/EditTodoForm'
import useTodo from '../hooks/useTodo'

function EditPage() {
  const { id } = useParams()

  const { todo, updateTodo } = useTodo(id)

  if (!todo) {
    return null
  }

  return (
    <div>{todo && <EditTodoForm todo={todo} updateTodo={updateTodo} />}</div>
  )
}

export default EditPage
