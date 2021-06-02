import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useTodo(id) {
  const [todo, setTodo] = useState()

  useEffect(() => {
    axios
      .get('/api/todo/' + id)
      .then(res => res.data)
      .then(setTodo)
  }, [id])

  const updateTodo = todo => {
    axios
      .put('/api/todo/' + todo.id, todo)
      .then(response => response.data)
      .then(setTodo)
      .catch(error => console.error(error))
  }

  return { todo, updateTodo }
}
