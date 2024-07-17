import { InputButton } from "./InputButton";

const AddTodo = () => {
  const inputChangeHandler = (inputValue: string) => {
    console.log(inputValue);
  };

  return (
    <section>
      <h3>Todo hinzufügen</h3>
      <InputButton onClick={inputChangeHandler} />
    </section>
  );
};

export { AddTodo };
