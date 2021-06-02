import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BoardPage from './pages/BoardPage'
import HomePage from './pages/HomePages'
import DetailsPage from './pages/DetailsPage'
import EditPage from './pages/EditPage'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/todos/:status'}>
          <BoardPage />
        </Route>
        <Route path={'/todo/:id'} exact>
          <DetailsPage />
        </Route>
        <Route path={'/todo/:id/edit'} exact>
          <EditPage />
        </Route>
        <Route path={['/', '/home']}>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  )
}
