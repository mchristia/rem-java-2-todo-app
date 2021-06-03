import { Route, Switch } from 'react-router-dom'
import BoardPage from './pages/BoardPage'
import HomePage from './pages/HomePages'
import DetailsPage from './pages/DetailsPage'
import EditPage from './pages/EditPage'
import LoginPage from './pages/LoginPage'
import AuthProvider from './context/AuthProvider'
import PrivateRoute from './routing/PrivateRoute'

export default function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route path={'/'} exact>
          <LoginPage />
        </Route>
        <PrivateRoute path={'/todos/:status'}>
          <BoardPage />
        </PrivateRoute>
        <PrivateRoute path={'/todo/:id'} exact>
          <DetailsPage />
        </PrivateRoute>
        <PrivateRoute path={'/todo/:id/edit'} exact>
          <EditPage />
        </PrivateRoute>
        <PrivateRoute path={'/home'}>
          <HomePage />
        </PrivateRoute>
      </Switch>
    </AuthProvider>
  )
}
