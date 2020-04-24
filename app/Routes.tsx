import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import store from './store'

// use a class to ensure HMR works properly, this would normally be a stateless component
// eslint-disable-next-line react/prefer-stateless-function
export default class Routes extends React.Component<
  {},
  {}
> {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Layout>
        </BrowserRouter>
      </Provider>
    )
  }
}
