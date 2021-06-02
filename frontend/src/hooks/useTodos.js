import axios from 'axios'
import { getNextStatus } from '../services/todoStatusService'
import { useEffect, useState } from 'react'

export default function useTodos() {
  const [todos, setTodos] = useState([])

  const addNewTodo = description => {
    axios
      .post('/api/todo', { description, status: 'OPEN' })
      .then(response => response.data)
      .then(newTodoItem => setTodos([...todos, newTodoItem]))
      .catch(error => console.error(error))
  }

  const advanceTodo = todo => {
    axios
      .put('/api/todo/' + todo.id, {
        ...todo,
        status: getNextStatus(todo.status),
      })
      .then(response => response.data)
      .then(updatedTodo => {
        setTodos(todos.map(item => (item.id === todo.id ? updatedTodo : item)))
      })
      .catch(error => console.error(error))
  }

  const removeTodo = id => {
    axios.delete('/api/todo/' + id).then(() => {
      setTodos(todos.filter(todo => todo.id !== id))
    })
  }

  useEffect(() => {
    axios
      .get('/api/todo')
      .then(response => response.data)
      .then(todos => setTodos(todos))
      .catch(error => console.error(error))
  }, [])

  const getTodosByStatus = status => {
    return todos.filter(item => item.status === status)
  }

  return {
    todos,
    advanceTodo,
    addNewTodo,
    removeTodo,
    getTodosByStatus,
  }
}
