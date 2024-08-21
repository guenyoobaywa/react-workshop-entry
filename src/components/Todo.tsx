interface ITodo {
  name: string;
  completed: boolean;
  id: string;
}

interface TodoProps {
  className?: string;
  name: ITodo["name"];
  completed: ITodo["completed"];
}

const Todo = ({ name, className, completed }: TodoProps) => {
  return (
    <li className={className}>
      {name} {completed ? "✅" : "🔖"}
    </li>
  );
};

export { Todo, type ITodo };
