import useTodos from './hooks/useTodos'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BoardPage from './pages/BoardPage'
import HomePage from './pages/HomePages'
import DetailsPage from './pages/DetailsPage'
import EditPage from "./pages/EditPage";

export default function App() {
  const { todos, advanceTodo, addNewTodo, removeTodo , updateTodo} = useTodos()

  return (
    <Router>
      <Switch>
        <Route path={'/todos/:status'}>
          <BoardPage
            todos={todos}
            onAdvance={advanceTodo}
            onRemove={removeTodo}
          />
        </Route>
        <Route path={'/todo/:id'} exact>
          <DetailsPage todos={todos} />
        </Route>
        <Route path={'/todo/:id/edit'} exact>
          <EditPage todos={todos} updateTodo={updateTodo}/>
        </Route>
        <Route path={['/', '/home']}>
          <HomePage
              todos={todos}
              addNewTodo={addNewTodo}
              removeTodo={removeTodo}
              advanceTodo={advanceTodo}
          />
        </Route>
      </Switch>
    </Router>
  )
}
