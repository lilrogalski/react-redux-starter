// @flow
import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux'
import type { Store } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from 'lib/reducers/rootReducer'

// set up redux dev tools
const composeEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store: Store<*, *> = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)),
)

export default store
