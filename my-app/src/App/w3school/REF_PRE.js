import { useState, useEffect, useRef } from "react";

function REF_PRE() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue; //注意這微妙的時間差
  }, [inputValue]); //useEffect是在render後才被觸動的！
  //所以它後知後覺，總是慢人一步。

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
      {/* 因為 useEffect 慢人一步，而 ref 不引起 render ，所以總是顯示上次的值！ */}
    </>
  );
}

export default REF_PRE;
