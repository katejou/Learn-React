import React, { memo } from "react";

const Child = memo(({ reset }) => { //用 memo 包起來！
  console.log("re-render child component.");
  return (
    <>
      <p>child component which resets count</p>
      <button onClick={reset}>Reset Count</button>
    </>
  );
});

export default Child;
