import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BoardPage from './pages/BoardPage'
import HomePage from './pages/HomePages'
import DetailsPage from './pages/DetailsPage'
import EditPage from './pages/EditPage'
import LoginPage from './pages/LoginPage'
import { useState } from 'react'
import axios from 'axios'

export default function App() {
  const [token, setToken] = useState()

  const login = credentials => {
    axios
      .post('/auth/login', credentials)
      .then(res => res.data)
      .then(setToken)
      .catch(error => console.error(error.message))
  }

  return (
    <Router>
      <Switch>
        <Route path={'/'} exact>
          <LoginPage login={login} />
        </Route>
        <Route path={'/todos/:status'}>
          <BoardPage />
        </Route>
        <Route path={'/todo/:id'} exact>
          <DetailsPage />
        </Route>
        <Route path={'/todo/:id/edit'} exact>
          <EditPage />
        </Route>
        <Route path={'/home'}>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  )
}
