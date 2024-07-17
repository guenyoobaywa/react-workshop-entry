import { Todo } from "./Todo";
import mockTodos from "../data/todos.mock.json";

const OpenTodos = () => {
  return (
    <section>
      <h3>Offene Todos</h3>
      <ul>
        {mockTodos.map((mockTodo) => (
          <Todo
            name={mockTodo.name}
            key={mockTodo.name}
            completed={mockTodo.completed}
          />
        ))}
      </ul>
    </section>
  );
};

export { OpenTodos };
