import { useState, useEffect, useRef } from "react";

function Why_Ref() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
    //state -> effect -> ref 
    //(Ref 就不會再引發 effect了，不然(如果又用 state 的話)會沒完沒了！)
  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
          <h1>Render Count: {count.current}</h1> 
          {/* 注意 count 使用出來時，是用 .current 的*/}
    </>
  );
}

// useRef() only returns one item. It returns an Object called current.
// When we initialize useRef we set the initial value: useRef(0).

export default Why_Ref;
