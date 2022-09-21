import React, { useState, useEffect } from "react";

function Hook_useEffect() {
  const [count, setCount] = useState(0);

  // 相似於 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // <-- 我記它作連帶關係，如同 Vue 的compute (就是不直接使用這個變數，但是會被間接影響的東東。)
    // 使用瀏覽器 API 更新文件標題(小頁簽)
    document.title = `You clicked ${count} times`;
    //使用useEffect，記得要放在相應的useState下方！

    //#region 它們的順序是有影響的！
    //https://zh-hant.reactjs.org/docs/hooks-rules.html
    // ------------
    // 第一次 render
    // ------------
    // useState("Mary"); // 1. 用 'Mary' 來初始化 name state 變數
    // useEffect(persistForm); // 2. 增加一個 effect 來保存表單
    // useState("Poppins"); // 3. 用 'Poppins' 來初始化 surname state 變數
    // useEffect(updateTitle); // 4. 增加一個 effect 來更新標題

    // // -------------
    // // 第二次 render
    // // -------------
    // useState("Mary"); // 1. 讀取 name state 變數 (參數被忽略了)
    // useEffect(persistForm); // 2. 替換了用來保存表單的 effect
    // useState("Poppins"); // 3. 讀取 surname state 變數 (參數被忽略了)
    // useEffect(updateTitle); // 4. 替換了用來更新標題的 effect
    //#endregion

    //#region 還有，不能在條件式之中使用HOOK！
    //Step1:
    // 🔴 我們違反了第一個規則，在條件式中使用 Hook
    // if (name !== "") {
    //   useEffect(function persistForm() {
    //     localStorage.setItem("formData", name);
    //   });
    // }
    //Step2:
    //這個 name !== '' 條件式在初次 render 時為 true，所以我們執行了此 Hook。
    //然而，在下一次 render 時
    //使用者可能清除了表單，使得條件式變為 false。
    //而現在我們在 render 期間跳過了這一個 Hook，
    //Hook 的呼叫順序有所不同： (大約像這樣︰)
    //useState("Mary"); // 1. 讀取 name state 變數 (參數被忽略了)
    //// useEffect(persistForm)  // 🔴 這個 Hook 被跳過了！
    //useState("Poppins"); // 🔴 2 (但之前是 3). 未能讀取 surname state 變數
    //useEffect(updateTitle); // 🔴 3 (但之前是 4). 未能取代 effect
    //React 不會知道第二個 useState Hook 呼叫回傳什麼。
    //React 預期在這個 component 中的第二個 Hook 呼叫和 persistForm effect 是相對應的，
    //就如同在前一次的 render 一樣，但它不再一樣了。
    //從那時起，在我們跳過的那個 Hook 後面，每下一個 Hook 呼叫都會 shift 一個，
    //導致 bug 的發生。
    //改正︰
    // useEffect(function persistForm() {
    //   // 👍 我們不再違反第一個規則
    //   if (name !== "") {
    //     localStorage.setItem("formData", name);
    //   }
    // });

    //#endregion
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Hook_useEffect;
