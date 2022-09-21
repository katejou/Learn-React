import { useState, useEffect } from "react";

function Effect_Cleanup_Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer); //做完之後，把這個timer的方法取消？
    //其實做不做這一行的效果，看不出來，所以這不是一個好例子。
    //clearTimeout和 clearinterval 是預設好的方法︰
    //https://stackoverflow.com/questions/53090432/react-hooks-right-way-to-clear-timeouts-and-intervals
  }, []); //只做開頭那一次的Type

  return <h1>I've rendered {count} times!</h1>;
}

export default Effect_Cleanup_Timer;
