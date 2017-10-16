import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from './comp/Layout'
import App from './comp/App'
import About from './comp/About'
import './comp/variables.css'

export default class Routes extends React.Component {
  render () {
    return (
      <Router>
        <Layout>
          <Route exact path="/" component={ App } />
          <Route path="/about" component={ About } />
        </Layout>
      </Router>
    )
  }
}
