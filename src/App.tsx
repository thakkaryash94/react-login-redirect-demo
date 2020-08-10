import React from 'react'
import { Router } from "@reach/router"
import GuardedRoutes from './components/GuardedRoutes'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'
import Logout from './pages/Logout'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Login path="login" />
      <Home path='/' />
      <GuardedRoutes path='/'>
        <Dashboard path="dashboard" />
        <Settings path="settings" />
        <NotFound default />
      </GuardedRoutes>
      <Logout path="logout" />
    </Router>
  )
}

export default App
