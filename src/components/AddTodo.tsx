import { InputButton } from "./InputButton";

interface AddTodoProps {
  addTodo: (input: string) => void;
}

const AddTodo = ({ addTodo }: AddTodoProps) => {
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
