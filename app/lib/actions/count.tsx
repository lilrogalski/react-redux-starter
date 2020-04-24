export const ADD_COUNT = 'ADD_COUNT'
export const SUBTRACT_COUNT = 'SUBTRACT_COUNT'

interface Action {
  type: string
}

export const addCount = (): Action => ({
  type: ADD_COUNT,
})

export const subtractCount = (): Action => ({
  type: SUBTRACT_COUNT,
})
