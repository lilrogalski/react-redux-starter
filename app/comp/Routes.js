import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Layout from './Layout'
import Home from './Home'
import About from './About'
import style from './variables.css'

const Routes = () => (
  <Router history={ browserHistory }>
    <Route path="/" component={ Layout }>
      <IndexRoute component={ Home } />
      <Route path="/about" component={ About } />
    </Route>
  </Router>
)

export default Routes

