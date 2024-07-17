import { AddTodo } from "./AddTodo";
import { CompletedTodos } from "./CompletedTodos";
import { OpenTodos } from "./OpenTodos";

const Todos = () => {
  return (
    <>
      <AddTodo />
      <OpenTodos />
      <CompletedTodos />
    </>
  );
};

export { Todos };
