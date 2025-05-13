import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "play tennis",
  });

  const [name, setName] = useState("peter");
  const [age, setAge] = useState(24);
  const [hobby, setHobby] = useState("Play tennis");

  const displayPerson = () => {
    setPerson({ name: "john", age: 55, hobby: "Read Book" });
    // setPerson({ name: "susan" });
    setPerson({ ...person, name: "susan" });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4> Enjoys : {person.hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        Show John
      </button>
    </>
  );
};

export default UseStateObject;
