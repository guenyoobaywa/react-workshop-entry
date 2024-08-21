import { InputButton } from "./InputButton";
import { useTodos } from "./use-todos.hooks";

const AddTodo = () => {
  const { addTodo } = useTodos();

  const inputChangeHandler = (inputValue: string) => {
    addTodo(inputValue);
  };

  return (
    <section>
      <h3>Todo hinzufügen</h3>
      <InputButton onClick={inputChangeHandler} />
    </section>
  );
};

export { AddTodo };
