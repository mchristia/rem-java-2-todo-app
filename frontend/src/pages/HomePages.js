import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Page from '../components/Page'
import AddATodo from '../components/AddATodo'
import Boards from '../components/Boards'
import useTodos from '../hooks/useTodos'

export default function HomePage() {
  const { todos, addNewTodo, advanceTodo, removeTodo } = useTodos()

  return (
    <Page>
      <Header />
      <Navigation />
      <AddATodo onAddClick={addNewTodo} />
      <Boards todos={todos} onAdvance={advanceTodo} onRemove={removeTodo} />
    </Page>
  )
}
