import { useState } from "react";

interface InputButtonProps {
  onClick: (inputValue: string) => void;
}

const InputButton = ({ onClick }: InputButtonProps) => {
  const [inputValue, setInputValue] = useState("");

  const clickHandler = () => {
    onClick(inputValue);
  };
  return (
    <>
      <input
        type="text"
        name="add-todo"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="button" onClick={clickHandler}>
        add Todo
      </button>
    </>
  );
};

export { InputButton };
