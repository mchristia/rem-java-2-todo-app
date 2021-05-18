import "./App.css";
import styled from "styled-components/macro";
import axios from "axios";
import TodoCard from "./components/TodoCard";
import { useEffect, useState } from "react";

function App() {
  // const Headline = styled.h1`
  //   background-color: antiquewhite;
  // `;

  const Gallery = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; 
    grid-column-gap: 10px;
    background-color: antiquewhite;
  `;

  const [todoList, setTodoList] = useState([]);
  const [todoDescription, setTodoDescription] = useState("");
  const [todoStatus, setTodoStatus] = useState("");
  const openTodos = todoList.filter((todo) => todo.status === "OPEN");
  const doingTodos = todoList.filter((todo) => todo.status === "IN_PROGRESS");
  const doneTodos = todoList.filter((todo) => todo.status === "DONE");


  function addTodo() {
    axios
      .post("/api/todo", { description: todoDescription, status: "OPEN" })
      .then((response) => response.data)
      .then((todoItem) => setTodoList([...todoList, todoItem]));
  }

  function listTodos() {
    axios
      .get("/api/todo")
      .then((response) => response.data)
      .then((todos) => setTodoList(todos));
  }

  const advanceTodo = (id) => {
      const oldTodo = todo.find(todo => todo.id === id)

      axios.put('/api/todo/' +id, {... oldTodo,
          status: getNextStatus(oldTodo.status)})
          .then(response => response.data)
          .then(updateTodo => {
              setTodos(todos.map(todo => (todo.id ===id ? updateedTodo : todo)))
          })
  }
    https://github.com/fabianschmauder/rem-java-2-todo-app.git
  //Auslagern
    const nextStatus = {
        OPEN: "IN_PROGRESS",
        IN_PROGRESS: "DONE",
        DONE: "DONE"

    }

    const removeTodo = id => {

    }

  function updateTodo(todoItem) {

      if (todoItem.status === "OPEN") {
          setTodoStatus("IN_PROGRESS")
      } else if (todoItem.status === "IN_PROGRESS")
      axios
          .put("/api/todo/" + todoItem.id)
          .then((response) => response.data)
          .then((todo) => setTodoList([...todoList, todo]));
  }

  // @PutMapping("{id}")
    //     public TodoItem updateTodoItem(@RequestBody TodoItem item) {
    //         try {
    //             return service.updateTodoItem(item);
    //         } catch (IllegalArgumentException e) {
    //             throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
    //         }
    //     }

  useEffect(() => {
    listTodos();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Kanban Board</p>
      </header>
      <input
        type="text"
        value={todoDescription}
        onChange={(event) => {
          setTodoDescription(event.target.value);
        }}
      />
      <button onClick={() => {addTodo(); setTodoDescription("");}}>add</button>

      <Gallery>
        <div>
          <p className="Open">Open</p>
          {openTodos.map((todo) => (
            <TodoCard key={todo.id} todo={todo} updateTodo={updateTodo} />
          ))}
        </div>
        <div>
          <p className="InProgress">In Progress</p>
          {doingTodos.map((todo) => (
            <TodoCard key={todo.id} todo={todo} updateTodo={updateTodo}/>
          ))}
        </div>
        <div>
          <p className="Done">Done</p>
          {doneTodos.map((todo) => (
            <TodoCard key={todo.id} todo={todo} updateTodo={updateTodo}/>
          ))}
        </div>
      </Gallery>
    </div>
  );
}

export default App;
