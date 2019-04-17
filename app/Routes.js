import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from './comp/Layout'
import Home from './comp/Home'
import About from './comp/About'
import Playground from './comp/Playground'

// use a class to ensure HMR works properly, this would normally be a stateless component
// eslint-disable-next-line react/prefer-stateless-function
export default class Routes extends React.Component {
  render () {
    return (
      <Router>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/playground" component={Playground} />
        </Layout>
      </Router>
    )
  }
}
