import React from 'react'
import Footer from '../Footer'
import AddTodo from '../../containers/AddTodo.js'
import VisibleTodoList from '../../containers/VisibleTodoList.js'

const App = ({ match }) => (
  <div>
    <AddTodo />
    <VisibleTodoList
      filter={match.params.filter || 'all'}
    />
    <Footer />
  </div>
)

export default App
