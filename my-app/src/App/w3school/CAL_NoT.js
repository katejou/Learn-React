import { useState } from "react";
//import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("child render"); //不論是Add Todo，還是 increment 都會觸發到它。
  //明明它只是和 addTodo 有關而已。
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

//export default memo(Todos);  <-- 原本是分開兩個檔案，但我不知道 memo 是什麼？

const CAL_NO = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]); //<--保留原有串列再加一的寫法。
  };

  return (
    <>
      {/* 這次的任務，是為了減少 Todos 的 render 次數！ */}
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default CAL_NO;
