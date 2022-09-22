import React, { useState, useCallback } from "react";
import Child from "./Child";

const CALL_USE2 = () => {
  const [count, setCount] = useState(0);
  console.log("re-render parent component");

  const resetCount = useCallback(() => {
    setCount(0);
  }, []);
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <Child reset={resetCount} />
      {/* Child 已被 memo 包起來，再加上 resetCount 也被 useCallback 包起來。
          所以它不會受 button 的影響！
          
          但是 resetCount 會影響 parent，
          所以是 child 會影響 parent，
          parent 會一直重覆 render ，但 child 只有開頭的那麼一次！ 
        */}
    </>
  );
};

export default CALL_USE2;
