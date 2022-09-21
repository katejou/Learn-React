//content.js


// 我覺得content 是將資料利用出來的編排方法。

import React, { useContext } from "react";
import { CatStateContext } from "./Context_1";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const state = useContext(CatStateContext);
  //const state2 = useContext(props.context); //<--作者(不是我，是原文)不建議使用這個方法來拿context

  const table = state.character.map((value) => {
    return (
      <div key={value.id} style={{ border: "1px solid green" }}>
        <p>編號 {value.id}</p>
        <h3>名字 {value.name}!</h3>
        <h3>特徵 {value.feature}</h3>
      </div>
    );
  });

  return (
    <div>
      <p>
        動態的context : 
        <button onClick={state.toggle}>
          {state.startCatchMouse
            ? "toggle的按鈕︰休息"
            : "toggle的按鈕︰開始抓貓"}
        </button>
      </p>
      {table}
    </div>
  );
};
