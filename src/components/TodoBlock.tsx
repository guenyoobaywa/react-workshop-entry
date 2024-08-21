import { ITodo, Todo } from "./Todo";
import "./TodoBlock.css";

interface TodoBlockProps {
  status: "abgeschlossen" | "offen";
  todos: ITodo[];
  completeTodo: (id: string) => void;
}

const TodoBlock = ({ status, todos, completeTodo }: TodoBlockProps) => {
  const isComplete = status === "abgeschlossen" ? true : false;

  return (
    <section key={status}>
      <ul className="todo-block">
        {todos
          .filter((todo) => (isComplete ? todo.completed : !todo.completed))
          .map((todo) => (
            <li key={`${todo.id}-${todo.completed}`}>
              <Todo
                name={todo.name}
                completed={todo.completed}
                id={todo.id}
                completeTodo={completeTodo}
              />
            </li>
          ))}
      </ul>
    </section>
  );
};

export { TodoBlock };
