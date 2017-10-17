// action types
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

// action creators
let nextTodoId = 0
export function addTodo (text) {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export function toggleTodo (index) {
  return { type: TOGGLE_TODO, index }
}
