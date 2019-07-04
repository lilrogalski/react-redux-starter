// @flow
import { ADD_COUNT, SUBTRACT_COUNT } from '../actions/count'

export function count(
  state: number = 0,
  action: {
    type: string,
  },
) {
  switch (action.type) {
    case ADD_COUNT:
      return state + 1
    case SUBTRACT_COUNT:
      return state - 1
    default:
      return state
  }
}
