import { useState, useCallback } from "react";
import Todos from "./CAL_USE_M1";


const CAL_USE_M2 = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {    //<--這個是重點！
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]); //這個 [todos] 的參數，是有監控作用的！

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default CAL_USE_M2;
