interface ITodo {
  name: string;
  completed: boolean;
  id: string;
}

interface TodoProps {
  className?: string;
  name: ITodo["name"];
  completed: ITodo["completed"];
  id: ITodo["id"];
  completeTodo: (id: string) => void;
}

const Todo = ({ name, className, completed, id, completeTodo }: TodoProps) => {
  return (
    <div className={className}>
      <div>
        {name} {completed ? "✅" : "🔖"}
      </div>
      <button type="button" onClick={() => completeTodo(id)}>
        {completed ? "Eröffnen" : "abschließen"}
      </button>
    </div>
  );
};

export { Todo, type ITodo };
