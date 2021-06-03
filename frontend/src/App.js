import { Route, Switch, useHistory } from 'react-router-dom'
import BoardPage from './pages/BoardPage'
import HomePage from './pages/HomePages'
import DetailsPage from './pages/DetailsPage'
import EditPage from './pages/EditPage'
import LoginPage from './pages/LoginPage'
import { useState } from 'react'
import axios from 'axios'

export default function App() {
  const [token, setToken] = useState()
  const history = useHistory()

  const login = credentials => {
    axios
      .post('/auth/login', credentials)
      .then(res => res.data)
      .then(setToken)
      .then(() => history.push('/home'))
      .catch(error => console.error(error.message))
  }

  return (
    <Switch>
      <Route path={'/'} exact>
        <LoginPage login={login} />
      </Route>
      <Route path={'/todos/:status'}>
        <BoardPage token={token} />
      </Route>
      <Route path={'/todo/:id'} exact>
        <DetailsPage token={token} />
      </Route>
      <Route path={'/todo/:id/edit'} exact>
        <EditPage token={token} />
      </Route>
      <Route path={'/home'}>
        <HomePage token={token} />
      </Route>
    </Switch>
  )
}
