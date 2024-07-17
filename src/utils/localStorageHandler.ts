import { type ITodo } from "../components/Todo";

const getLocalStorageTodos = () => {
  const localStorageTodos = localStorage.getItem('todos') || JSON.stringify([]);
  return JSON.parse(localStorageTodos);
}

const setLocalStorageTodos = (todos: ITodo[]) => {
  localStorage.setItem('todos', JSON.stringify(todos));
}

export {setLocalStorageTodos, getLocalStorageTodos};