import React, { useContext } from 'react';
import { FruitContext } from "./GlobalFruitContext.js";

function Peter() {
  const fruitInfo = useContext(FruitContext);
  return (
    <div className="Peter">
      Peter看到了 [ {fruitInfo.appleContext} ] 個蘋果
      <button
        onClick={() => { fruitInfo.setAppleByDispatch({ type: "sell", value: 1 }) }}>
        賣了一個蘋果
      </button>
    </div>
  );
}

export default Peter;