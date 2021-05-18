function TodoCard({ todo, updateTodo, deleteTodo }) {
  return (
    <section className="Card">
      <p>{todo.description}</p>

      <button disabled = {todo.status === 'DONE'} onClick={() => updateTodo(todo)}>advance</button>
        <button onClick={() => deleteTodo(todo)}>delete</button>
    </section>
  );
}

export default TodoCard;
