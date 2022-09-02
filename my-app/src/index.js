/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Game0 from "./App/Game/Square_Board_Game0";
import Game1 from "./App/Game/Square_Board_Game1";
import Game2 from "./App/Game/Square_Board_Game2";
import Game3 from "./App/Game/Square_Board_Game3";
import Game4 from "./App/Game/Square_Board_Game4";
import Game5 from "./App/Game/Square_Board_Game5";
import Game6 from "./App/Game/Square_Board_Game6";
import Game7 from "./App/Game/Square_Board_Game7";
import Game8 from "./App/Game/Square_Board_Game8";
import Game9 from "./App/Game/Square_Board_Game9";
import Game10 from "./App/Game/Square_Board_Game10";

import Hook_useState from "./App/HookvsClass/Hooks_useState";
import Class_LikeState from "./App/HookvsClass/Class_likeState";
import ShoppingList from "./App/Game/ShoppingList";

import Hook_useEffect from "./App/HookvsClass/Hooks_useEffect";
import Class_likeEffect from "./App/HookvsClass/Class_likeState";

import HookUseContext from "./App/Context/Hook_Context";
import DynamicUseContext from "./App/Context/DynamicUseContext";
import ExUseContext from "./App/Context/ExUseContext";
// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
//https://reactjs.org/tutorial/tutorial.html
// 做一個 OOXX 井字的遊戲 tic-tac-toe game
//root.render(<ShoppingList name="Mark" />); //簡單的 props傳值
//root.render(<Game0 />);
//root.render(<Game1 />); // 簡單的 props傳值
//root.render(<Game2 />); // 加入 onclick //按下的都log
//root.render(<Game3 />); // setState + onclick //按下的都 X
// you inspect a React component tree with your browser’s developer tools.
//#region 摘要

//要輪流輸入 O X 的話︰
//To collect data from multiple children, or to have two child components communicate with each other,
//you need to declare the shared state in their parent component instead.
//要由上層給方法下層︰
//Since state is considered to be private to a component that defines it,
//we cannot update the Board’s state directly from Square.(的onclick)
//Instead, we’ll pass down a function from the Board to the Square
//當下層呼叫上層，上層改了，下層也連動被改
//When the Board’s state changes, the Square components re-render automatically.

//#endregion
//root.render(<Game4 />); // 現在還都只是 X
//We’ll now change the Square to be a function component !! <--Yeah 重點！
//root.render(<Game5 />); // 小部份化作 function Component
//root.render(<Game6 />); // 有XO輪流
//root.render(<Game7 />); // 顯示Winner和終止遊戲。
//root.render(<Game8 />); // 紀錄之前的步數，將Broad的記憶交給Game。
//root.render(<Game9 />);  // 顯示歷史Showing the Past Moves
root.render(<Game10 />); // 跳回歷史，還可以不斷重寫！

//好吧，我有點明白React的設計邏輯了。

//官方建議的升級版玩法︰
//1. Display the location for each move in the format (col, row) in the move history list.
//2. Bold the currently selected item in the move list.
//3. Rewrite Board to use two loops to make the squares instead of hardcoding them.
//4. Add a toggle button that lets you sort the moves in either ascending or descending order.
//5. When someone wins, highlight the three squares that caused the win.
//6. When no one wins, display a message about the result being a draw.

//嗯…看起來很好玩…有空寫寫…





//實作Hook https://zh-hant.reactjs.org/docs/hooks-overview.html

//root.render(<Hook_useState />); //<--比較省，新，官推
//root.render(<Class_LikeState />);

//root.render(<Hook_useEffect />);
//root.render(<Class_likeEffect />);

//root.render(<HookUseContext />);
//root.render(<DynamicUseContext />);//這個是混合 class 和 function的…

//我覺得 useContext 的地方，官網寫得太繞，給的例子也很…不到位。
//所以我找外援︰https://ithelp.ithome.com.tw/articles/10241780
//root.render(<ExUseContext />);//太簡單，不是動態的
//
//https://mrcodingroom.freesite.host/reacthook-usecontext-%E6%95%99%E5%AD%B8-tutorial/

//https://penueling.com/%E7%B7%9A%E4%B8%8A%E5%AD%B8%E7%BF%92/react-%E4%BD%BF%E7%94%A8-usecontext-%E5%AF%A6%E7%8F%BE%E8%B7%A8%E7%B5%84%E4%BB%B6%E5%AD%98%E5%8F%96%E7%8B%80%E6%85%8B/


//之後很多筆記都在TxtNotes之中，官網不寫完整的範例，只寫片段來對比。

//看到這裡︰
//https://zh-hant.reactjs.org/docs/hooks-overview.html#building-your-own-hooks
//https://zh-hant.reactjs.org/docs/hooks-rules.html






