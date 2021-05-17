function TodoCard({ todo }) {
  return(
          <section>
              <p>{todo.description}</p>
              <p>{todo.status}</p>
              <p>{todo.id}</p>
          </section>
      );

}

export default TodoCard;
