import { useEffect, useState } from "react";

interface HelloWorldProps {
  name: string;
}

const HelloWorld = ({ name }: HelloWorldProps) => {
  const [nrCount, setNrCount] = useState<number>(0);

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <>
      <div className="border border-red">{nrCount}</div>
      <button
        type="button"
        name="increment"
        onClick={() => {
          setNrCount(nrCount + 1);
        }}
      >
        +
      </button>
    </>
  );
};

export { HelloWorld };
