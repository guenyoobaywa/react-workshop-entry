import { Todo } from "./Todo";
import mockTodos from "../data/todos.mock.json";
import React from "react";

const CompletedTodos = () => {
  return (
    <section>
      <h3>Abgeschlossene Todos</h3>
      <ul>
        {mockTodos.map((mockTodo) => (
          <React.Fragment key={mockTodo.name}>
            <Todo name={mockTodo.name} completed={mockTodo.completed} />
            <button
              type="button"
              onClick={() => (mockTodo.completed = !mockTodo.completed)}
            >
              abschließen
            </button>
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
};

export { CompletedTodos };
