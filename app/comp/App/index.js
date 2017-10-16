import React from 'react'
import Footer from '../Footer'
import AddTodo from '../containers/AddTodo.js'
import VisibleTodoList from '../containers/VisibleTodoList.js'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
