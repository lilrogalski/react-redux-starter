import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from './comp/Layout'
import Home from './comp/Home'
import About from './comp/About'
import './comp/variables.css'

export default class Routes extends React.Component {
  render () {
    return (
      <Router>
        <Layout>
          <Route exact path="/" render={ () => <Home title="Home" /> } />
          <Route path="/about" render={ () => <About title="About" /> } />
        </Layout>
      </Router>
    )
  }
}
