import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useTodo(id, token) {
  const [todo, setTodo] = useState()

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  useEffect(() => {
    axios
      .get('/api/todo/' + id, config)
      .then(res => res.data)
      .then(setTodo)
  }, [id])

  const updateTodo = todo => {
    axios
      .put('/api/todo/' + todo.id, todo, config)
      .then(response => response.data)
      .then(setTodo)
      .catch(error => console.error(error))
  }

  return { todo, updateTodo }
}
