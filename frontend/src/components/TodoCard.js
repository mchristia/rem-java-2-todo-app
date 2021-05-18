function TodoCard({ todo, updateTodo }) {
  return (
    <section className="Card">
      <p>{todo.description}</p>

        <button onClick={() => {updateTodo(todo)}}>advance</button>
        <button>delete</button>
    </section>
  );
}

export default TodoCard;
