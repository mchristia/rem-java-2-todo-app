function TodoCard({ todo }) {
  return (
    <section className="Card">
      <p>{todo.description}</p>

        <button>advance</button>
        <button>delete</button>
    </section>
  );
}

export default TodoCard;
