import React, { useContext } from 'react';
import { FruitContext } from "./GlobalFruitContext.js";

function Amy() {
  //引入全域的值！
  const fruitInfo = useContext(FruitContext);
  // 使用全域的值和方法
  return (
    <div className="Amy">
      Amy看到了 [ {fruitInfo.appleContext} ] 個蘋果
      <button
        onClick={() => { fruitInfo.setAppleByDispatch({ type: "buy", value: 1 }) }}>
        買了一個蘋果
      </button>
    </div>
  );
}

export default Amy;