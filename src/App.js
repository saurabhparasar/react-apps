import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [car, setCar] = useState({
    name: "",
    model: "",
    quantity: "",
  });
  const [list, setList] = useState([]);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setCar((prevCar) => {
      return {
        ...prevCar,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const exist = list.find((x) => x.model === car.model);
    if (exist) {
      setList(
        list.map(
          (x) =>
            (x.model = car.model
              ? { ...exist, quantity: exist.quantity + 1 }
              : x)
        )
      );
    }
    setList((prevList) => {
      return [...prevList, car];
    });
  };

  console.log(list);
  return (
    <div>
      <form>
        name
        <input
          type="text"
          name="name"
          value={car.name}
          onChange={handleChange}
        />
        model
        <input
          type="text"
          name="model"
          value={car.model}
          onChange={handleChange}
        />
        quantity
        <input
          type="number"
          name="quantity"
          value={car.quantity}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <TodoList list={list} />
    </div>
  );
};

export default App;
