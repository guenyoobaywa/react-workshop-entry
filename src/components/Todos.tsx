import { AddTodo } from "./AddTodo";
import { TodoBlock } from "./TodoBlock";
import { useTodos } from "./use-todos.hooks";

const Todos = () => {
  const { myTodos, addTodo, completeTodo } = useTodos();
  return (
    <>
      <AddTodo addTodo={addTodo} />
      <h3>Abgeschlossene Todos</h3>
      <TodoBlock
        status="abgeschlossen"
        todos={myTodos}
        completeTodo={completeTodo}
      />

      <h3>Offene Todos</h3>
      <TodoBlock status="offen" todos={myTodos} completeTodo={completeTodo} />
    </>
  );
};

export { Todos };
