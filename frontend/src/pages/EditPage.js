import { useParams } from 'react-router-dom'
import EditTodoForm from '../components/EditTodoForm'
import useTodo from '../hooks/useTodo'
import Navigation from '../components/Navigation'
import Page from '../components/Page'

function EditPage({ token }) {
  const { id } = useParams()
  const { todo, updateTodo } = useTodo(id, token)

  if (!todo) {
    return null
  }

  return (
    <Page>
      <Navigation />
      {todo && <EditTodoForm todo={todo} updateTodo={updateTodo} />}
    </Page>
  )
}

export default EditPage
