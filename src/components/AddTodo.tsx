import { InputButton } from "./InputButton";
import {
  setLocalStorageTodos,
  getLocalStorageTodos,
} from "../utils/localStorageHandler";
import { ITodo } from "./Todo";

const AddTodo = () => {
  const inputChangeHandler = (inputValue: string) => {
    // 1. Ein neues Todo erstellen mit name = inputValue
    const myNewTodo: ITodo = {
      name: inputValue,
      completed: false,
      id: window.crypto.randomUUID(),
    };

    // 1.5 Alten Todos "zwischenspeichern"
    const currTodos = getLocalStorageTodos();

    // 2. Erstelle ein Array mit neuem Todo + alten Todos
    const todoArr: ITodo[] = [...currTodos, myNewTodo];

    // 3. Speichere Todos in LocalStorage
    setLocalStorageTodos(todoArr);
  };

  return (
    <section>
      <h3>Todo hinzufügen</h3>
      <InputButton onClick={inputChangeHandler} />
    </section>
  );
};

export { AddTodo };
