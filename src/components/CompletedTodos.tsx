import { Todo } from "./Todo";
import { useTodos } from "./use-todos.hooks";

const CompletedTodos = () => {
  const { myTodos, completeTodo } = useTodos();

  return (
    <section>
      <h3>Abgeschlossene Todos</h3>
      <ul>
        {myTodos.map((todo) => (
          <li key={todo.id}>
            <Todo
              name={todo.name}
              completed={todo.completed}
              id={todo.id}
              completeTodo={completeTodo}
            />
            <button type="button" onClick={() => completeTodo(todo.id)}>
              abschließen
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export { CompletedTodos };
