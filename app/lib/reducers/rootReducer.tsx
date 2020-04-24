import { combineReducers } from 'redux'
import { count } from './count'

export interface State {
  count: number
}

const rootReducer = combineReducers({
  count,
})

export default rootReducer
