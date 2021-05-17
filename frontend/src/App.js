import "./App.css";
import styled from "styled-components/macro";
import axios from "axios";
import TodoCard from "./components/TodoCard";
import {useEffect, useState} from "react";

function App() {
  // const Headline = styled.h1`
  //   background-color: antiquewhite;
  // `;

  const Gallery = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: fit-content();
    background-color: antiquewhite;
  `;

  const [todoList, setTodoList] = useState([]);
  const [todoDescription, setTodoDescription] = useState("");

  function addTodo () {
      axios.post("/api/todo", {description: todoDescription, status: "OPEN"})
          .then((response) => response.data)
          .then((todoItem) => setTodoList([...todoList, todoItem]))
    }

    function listTodos () {
     axios
         .get("/api/todo")
         .then(response => response.data)
         .then(todos => setTodoList(todos));

    }

    useEffect(() => {
        listTodos();
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Kanban Board</p>
      </header>
      <input type="text"
             value={todoDescription}
             onChange={
                 (event) => {setTodoDescription(event.target.value)}}/>
      <button onClick={() => addTodo()}>add</button>

      <Gallery>
        <p className="Frame">ToDo</p>
        <p className="Frame">In Progress</p>
        <p className="Frame">Done</p>
          {todoList.map((todo) => (<TodoCard key={todo.id} todo={todo} />))}
      </Gallery>
    </div>
  );
}

export default App;
