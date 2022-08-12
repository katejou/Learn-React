import React, { useState } from 'react';
import Baby2 from './Baby2'

// 和 App (Class Component) 生孩子的方法對比，
// 這個是 function component 的 useState的實作

const App2 = () => {
  const [dad, setDad] = useState("Chang"); // 這個就是 Baby2之中的props.dad
  const [born, setBorn] = useState(true);
  // 這個App2方法，被執行過之後，
  // 畫面上，變得有按鈕來操作這個setBorn﹑setDad方法。

  const changeDad = () => {
    if (dad === "Chang") {
      setDad("Wang")
    }
    else {
      setDad("Chang")
    }
  }

  const GenBaby = () => {
    if (born === true) {
      return <Baby2 dad={dad} />; // 這個就是 Baby2之中的props.dad
    }
  }

  return (
    <div>
      <button onClick={changeDad}>在App2中換爸爸!</button>
      <button onClick={() => { setBorn(!born) }}>
        {(born === true) ? "讓「我」消失" : "讓「我」被生出來"}
      </button>
      {GenBaby()}
      <div id="talk"></div>
    </div>
  );



}
export default App2;