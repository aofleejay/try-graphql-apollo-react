import React from 'react'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import Home from './Home'

const Routes = () => (
  <BrowserRouter>
    <Route exect path="/" component={Home} />
  </BrowserRouter>
)

export default Routes
