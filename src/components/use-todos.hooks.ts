import { useEffect, useState } from "react";
import {
  getLocalStorageTodos,
  setLocalStorageTodos,
} from "../utils/localStorageHandler";
import { ITodo } from "./Todo";

const useTodos = () => {
  const [myTodos, setMyTodos] = useState<ITodo[]>(getLocalStorageTodos());

  useEffect(() => {
    setLocalStorageTodos(myTodos);
  }, [myTodos, setMyTodos]);

  // 1. funktion um neues Todo zu erstellen
  const addTodo = (inputValue: string) => {
    // 1. Ein neues Todo erstellen mit name = inputValue
    const myNewTodo: ITodo = {
      name: inputValue,
      completed: false,
      id: window.crypto.randomUUID(),
    };

    // 2. Erstelle ein Array mit neuem Todo + alten Todos
    const todoArr: ITodo[] = [...myTodos, myNewTodo];
    setMyTodos(todoArr);
  };

  // 2. funktion um Todo abzuhaken
  const completeTodo = (id: ITodo["id"]) => {
    // Suche in den Todos nach Todo mit der id
    const todoToChange = myTodos.find((todo: ITodo) => todo.id === id);

    if (!todoToChange) return;

    // Verändere den Wert von completed des Todos
    todoToChange.completed = !todoToChange.completed;

    // Speichere neues Array mit neuen Values
    const todosWithoutTodoToComplete = myTodos.filter(
      (todo: ITodo) => todo.id !== id
    );
    const updatedTodos = [...todosWithoutTodoToComplete, todoToChange];
    setMyTodos(updatedTodos);
  };

  // 3. funktionen returnen
  return { myTodos, addTodo, completeTodo };
};

export { useTodos };
