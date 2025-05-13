import { useState } from "react";

const UseStateBasics = () => {
  // const value = useState("hello")[0];
  // const func = useState("hello")[1];
  // console.log(value);
  // console.log(func);

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h4>you click {count} times</h4>
      <button type="button" className="btn" onClick={handleClick}>
        click me
      </button>
    </div>
  );
};

export default UseStateBasics;
