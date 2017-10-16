import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './comp/reducers'

import Layout from './comp/Layout'
import App from './comp/App'

let store = createStore(todoApp)

export default class Routes extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Layout>
            <Route exact path="/" component={ App } />
          </Layout>
        </Router>
      </Provider>
    )
  }
}
