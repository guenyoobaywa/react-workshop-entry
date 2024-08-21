import { Todo } from "./Todo";
import React, { useEffect } from "react";
import { useTodos } from "./use-todos.hooks";

const CompletedTodos = () => {
  const { myTodos, completeTodo } = useTodos();

  useEffect(() => {
    console.log(myTodos);
  }, [myTodos]);

  return (
    <section>
      <h3>Abgeschlossene Todos</h3>
      <ul>
        {myTodos.map((todo) => (
          <React.Fragment key={todo.id}>
            <Todo name={todo.name} completed={todo.completed} />
            <button type="button" onClick={() => completeTodo(todo.id)}>
              abschließen
            </button>
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
};

export { CompletedTodos };
