/* eslint-disable react/jsx-pascal-case */
import React from "react";
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
import Game11 from "./App/Game/Square_Board_Game11";
import Game12 from "./App/Game/Square_Board_Game12";
import Game13 from "./App/Game/Square_Board_Game13";
import Game14 from "./App/Game/Square_Board_Game14";
import Game15 from "./App/Game/Square_Board_Game15";
import Game16 from "./App/Game/Square_Board_Game16";

import Hook_useState from "./App/HookvsClass/Hooks_useState";
import Class_LikeState from "./App/HookvsClass/Class_likeState";
import ShoppingList from "./App/Game/ShoppingList";

import Hook_useEffect from "./App/HookvsClass/Hooks_useEffect";
import Class_likeEffect from "./App/HookvsClass/Class_likeState";

import HookUseContext from "./App/Context/Hook_Context";
import DynamicUseContext from "./App/Context/DynamicUseContext";
import ExUseContext from "./App/Context/ExUseContext";

import App from "./App/CatAndMice/App";
import App_FCC from "./App/FreeCodeCamp/SimplestSample";
import App_FCC_2 from "./App/FreeCodeCamp/SimplestSample_Compare";
import { Clock, DigitalClock, Hourglass } from "./App/CustomHook/ManyClock";
import CLogger from "./App/CustomHook/CLogger";
import Home from "./App/CustomHook/Home";
import Home_2 from "./App/CustomHook/Home_2";

import FavoriteColor from "./App/w3school/STA_1";
import Car from "./App/w3school/STA_2";
import Timer from "./App/w3school/EFF_Timer";
import Type_2_Timer from "./App/w3school/EFF_Type_2_Timer";
import Type_3_Counter from "./App/w3school/EFF_Type_3";
import Effect_Cleanup_Timer from "./App/w3school/EffectCleanUp";
import Component1 from "./App/w3school/CO_Drill";
import Component1_1 from "./App/w3school/CO_Drill_Not";
import Why_Ref from "./App/w3school/REF_Why";
import REF_Focus from "./App/w3school/REF_Focus";
import REF_PRE from "./App/w3school/REF_PRE";
import Todos from "./App/w3school/RED";
import RED_2 from "./App/w3school/RED_2";
import CAL_NO from "./App/w3school/CAL_NoT";
import CAL_USE from "./App/w3school/CAL_USE";
import CAL_USE_M2 from "./App/w3school/CAL_USE_M2";
import MEM_NO from "./App/w3school/MEM_NO";
import MEM_USE from "./App/w3school/MEM_USE";
import CALL_USE2 from "./App/w3school/CALL_USE2";

import U_Toggle_App from "./App/UseCHook/UseToggle_E";
//import U_Toggle_App_T from "./App/UseCHook/UseToggle_T.ts";



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
//root.render(<Game10 />); // 跳回歷史，還可以不斷重寫！

//好吧，我有點明白React的設計邏輯了。

//官方建議的升級版玩法︰(這些都是我自己作的！官網上沒有答案！但是我全部挑戰成功了！)
//1. Display the location for each move in the format (col, row) in the move history list.
//root.render(<Game11 />);
//2. Bold the currently selected item in the move list.
//root.render(<Game12 />);
//3. Rewrite Board to use two loops to make the squares instead of hardcoding them.
//root.render(<Game13 />);
//4. Add a toggle button that lets you sort the moves in either ascending or descending order.
//root.render(<Game14 />);
//5. When someone wins, highlight the three squares that caused the win.
//root.render(<Game15 />);
//6. When no one wins, display a message about the result being a draw.
//root.render(<Game16 />);

// https://reactjs.org/docs/hooks-intro.html
// 官方建議我們直接跳︰
// https://zh-hant.reactjs.org/docs/hooks-overview.html
// 實作Hook

//root.render(<Hook_useState />); //<--比較省，新，官推
//root.render(<Class_LikeState />);

//root.render(<Hook_useEffect />);
//root.render(<Class_likeEffect />);

//root.render(<HookUseContext />);
//root.render(<DynamicUseContext />);//這個是混合 class 和 function的…

//之後很多筆記都在TxtNotes之中，官網不寫完整的範例，只寫片段來對比。
//我覺得 useContext 的地方，官網寫得太繞，給的例子也很…不到位。
//所以我找

//外援_1︰https://ithelp.ithome.com.tw/articles/10241780
//root.render(<ExUseContext />);
//太簡單，不是動態的

//外援_2:
//https://mrcodingroom.freesite.host/reacthook-usecontext-%E6%95%99%E5%AD%B8-tutorial/
//root.render(<App />);
//這個例子，只是很極端地分開這三個物件︰Context Provider Content
//是 Provider 將 Context 和 Content 「縫」起來！
//想想，同一個Provider(資料來源)，可以套用不同的Content(表現格式)
//我參考DynamicUseContext，把它改編一下。
//好了，它現在也是一個動態(一點點)的例子了！

//外援_3︰
//https://www.freecodecamp.org/news/react-context-for-beginners/
//root.render(<App_FCC />);
//root.render(<App_FCC_2 />); //這兩個極簡單但有力的例子，我們看清楚了Consumer的兩種用法。

//進入Custom Hook:
//https://zh-hant.reactjs.org/docs/hooks-overview.html#building-your-own-hooks
//看到這裡---
//https://zh-hant.reactjs.org/docs/hooks-rules.html
//https://zh-hant.reactjs.org/docs/hooks-custom.html
//官方的例子，總涉及了個API，
//所以我找了個超簡單的例子(外援一)︰
//https://medium.com/hannah-lin/react-hook-%E7%AD%86%E8%A8%98-custom-hooks-%E4%B9%8B%E6%89%93%E9%80%A0%E8%87%AA%E5%B7%B1%E7%9A%84-hook-b046f6778f33
//root.render(<Clock />);
//root.render(<DigitalClock />);
//root.render(<Hourglass />);
//以上三個都是用同一個Custom出來的Hook
//useEffect 和 Custom Hook 的組合︰
//root.render(<CLogger />);

//外援二︰
//https://www.w3schools.com/react/react_customhooks.asp
//root.render(<Home />); //step1
//root.render(<Home_2 />);//step2 (take out to be useFetch) (combine useEffect 和 useState)

//都經過w3schools，就學好學滿︰

// ----- useState -----

//root.render(<FavoriteColor />);
//root.render(<Car />); //State存入Array，在修改時，維持其他的不變，單單改其中一個值！

// ----- useEffect -----

//root.render(<Timer />); //setTimeout 是延遲執行
//useEffect runs on every render.
//That means that when the count changes, a render happens,
//which then triggers another effect.

//////重要！官網都沒說得那麼清楚︰///////
//第一種:
// useEffect(() => {
//   //Runs on every render!!!!
// });
//第二種︰
// useEffect(() => {
//   //Runs only on the first render!!!!
// }, []);
//第三種︰
// useEffect(() => {
//   //Runs on the first render!!!!
//   //And any time any dependency value changes!!!!
// }, [prop, state]);

//root.render(<Type_2_Timer />);//只有0,1
//root.render(<Type_3_Counter />);
//這個例子不好，是用於清除Effect的︰
//root.render(<Effect_Cleanup_Timer />);

// ----- useContext -----

//prop drilling 的例子！(舉出沒有useContext有多慘！)
//root.render(<Component1 />);
//root.render(<Component1_1 />);

// ----- useRef -----

//1
//The useRef Hook allows you to persist values between renders.
// For Example :
// If we tried to count how many times our application renders using the useState Hook,
// we would be caught in an infinite loop since this Hook itself causes a re - render.
//root.render(<Why_Ref />);

//2
//In React, we can add a ref attribute
//to an element to access it directly in the DOM.
//root.render(<REF_Focus />);

//3
//The useRef Hook can also be used to keep track of previous state values.
//This is because we are able to persist useRef values between renders.
//root.render(<REF_PRE/>);

// ----- useReducer -----

//root.render(<Todos />);
//做完了，但還是不懂，於是找外外援︰
//https://ithelp.ithome.com.tw/articles/10268258
//還是看不太懂(@.@)
//root.render(<RED_2 />);
//但是這個例子有比較清楚，可以當作是進階版的useState。
//我的理解是設同一個State，但設定多個修改的method！

// ----- useCallback ----- https://www.w3schools.com/react/react_usecallback.asp

//Think of memoization as caching a value so that it does not need to be recalculated.
//The useCallback Hook only runs when one of its dependencies update.
//This can improve performance.

//root.render(<CAL_NO />); //不使用Callback時，詳見內文。
//root.render(<CAL_USE />); //還是一樣？不懂，試加上memo來試，雖然還不知道原因。
//root.render(<CAL_USE_M2 />); //終於成功了！互不干擾！(但我想原因要配合memo來理解。)

//The useCallback and useMemo Hooks are similar.
//The main difference is that useMemo returns a memoized value and
//useCallback returns a memoized function.  ???

// ----- useMemo -----

//root.render(<MEM_NO />); //未使用前！
//root.render(<MEM_USE />); //使用之後。

//use Memo 的例子，就沒有和 useCallback 掛勾。
//所以CAL_USE_M1之中的 memo 是幹什麼用的，是否專用和 useCallback 配合的？
//不得而知。

//----- 外外援1︰

//https://medium.com/ichef/%E4%BB%80%E9%BA%BC%E6%99%82%E5%80%99%E8%A9%B2%E4%BD%BF%E7%94%A8-usememo-%E8%B7%9F-usecallback-a3c1cd0eb520

//useMemo → 遇到複雜耗時計算時使用
//useCallback → 大部分不用，僅在搭配 PureComponent 等、或是提供多個 useEffect 時使用

//#region ----- 解說 -----
//如果只是簡單的計算的話，useMemo 所花費的成本可能還比較高，反而一點都沒有加速到。
//useCallback 是 useMemo 的一種變體，用來記住一個 function instance。

//useCallback 的主要目的是避免在 component 內部宣告的 function，
//因為隨著每次 render 不斷重新被宣告跟建立，每次拿到的都是不同的 instance。
//這樣的 function 如果被當成 prop 往下傳給其他 component時，  <<<<<<<<<<<<<<<<<<<<<<-------
//就可能導致下面的 component 無意義地被重新 render。

//但是除非你的 component 有實作比對 prop 做選擇性 render 的檢查，
//不然就算傳了 useCallback 記下來的 function 進去也毫無意義——
//他的 render function 還不是會被跑一次。

//(我心想，這就是 memo 的作用？)

//上面說的是用 React.memo 包起來的 component、
//繼承了 React.PureComponent 的 component、或是有實作 shouldComponentUpdate() 方法的 component。
//這些才會在每次 render 前去檢查 props 跟 state，來決定要不要跑自己的 render。

//(我心想，所以 useCallback 和 memo 是綁在一起的了！)

//這不代表所以我們每個 component 都應該改用上述的作法來「加速」
//如同前面提到的，為了「加速」你會需要花額外的資源跟計算來做檢查、不見得有那麼划算、
//而且可能會讓你的 code 變複雜。這些都要看你的專案情況而定。

//建議使用 useCallback 的時機
//如果你的 function 因為需要用到 props 或 state
//而必須在 component scope 裡面宣告、但又同時會被超過一個 useEffect 使用時，
//就建議以 useCallback 包起來。

//(不太懂？)

// When your callback are used in multiple useEffect()
// function SearchResults({ query }) {

//     const getFetchUrl = useCallback(() => {
//     return 'https://hn.algolia.com/api/v1/search?query=' + query;
//     }, [query]);

//     useEffect(() => {
//     const url = getFetchUrl('react');  //<--用一次(但是這個方法沒有接收參數呀？query 是從 props 來的？)
//     // ... Fetch data and do something ...
//     }, [getFetchUrl]);

//     useEffect(() => {
//     const url = getFetchUrl('redux'); //<--用兩次
//     // ... Fetch data and do something ...
//     }, [getFetchUrl]);
//     // ...

// }

// (不懂，後方有些和正題不太關係，於是省略了……)

//#endregion

// 總結︰所以 useCallback 和 memo 是綁在一起的！

//----- 外外援2︰

//https://ithelp.ithome.com.tw/m/articles/10270317

//useCallback: 記憶的是函式;
//useMemo: 記憶的是函式執行後的回傳值;

//useCallback 也可以彌補 React.memo 的缺點...?
//透過 useCallback 可以記住 function 的記憶體位置，
//就可以避免 React.memo 在比較 props 值時因為"物件型別記憶體位置不同但值相同"而重新渲染的狀況。

//重點︰
//useCallback(function): 如果沒有加上這個陣列，「每次」都會重新執行函式去產生新的函式(和沒做一樣？)
//useCallback(function, []): 空陣列的話，回傳的函式(永遠？)不會改變
//useCallback(function, [...someValues]): 有加上一些元素值的話，當元素值改變時會重新更新回傳的函式

//語法︰
// const memoizedCallback = useCallback(() => {
//   doSomething(a, b);
// }, [a, b]);

//例子︰ useCallback(function, [])
//root.render(<CALL_USE2 />);
//這個例子超級清楚的，記得開F12看 console log ....

// 要不要做個挑戰呢?
//https://www.w3schools.com/react/react_quiz.asp

//做了之後，學到了一些眉眉角角︰

//#region -- 普通變數的設定，也可以用Arrow Function(可以說它已經打破了 變數和方法 之間的界線了嗎？)
//hello = () => "Hello World!";
//#endregion

//#region -- 取串列元素，作為變數的一個簡單辦法
// const vehicles = ["mustang", "f-150", "expedition"];
// const [, , suv] = vehicles;
// (結果 suv = "expedition" ，這就是一種便利的方法！)
//#endregion

//#region -- 預先解構傳入值的辦法 --

// const person = {
//   name: "Jesse",
//   age: 30,
//   address: {
//     city: "Houston",
//     state: "Texas",
//     country: "USA",
//   },
// };

// displayMessage(person);

// function displayMessage({ address: { state } }) {
//   const message = "I live in " + state + ".";
// }

//#endregion

//#region -- 以...簡單地結合兩個array！ --
//const arrayOne = ["a", "b", "c"];
//const arrayTwo = [1, 2, 3];
//const arraysCombined = [...arrayOne, ...arrayTwo];
//#endregion

//三元運算子的英文︰ternary operator statement

//#region ES5和ES6的不同！
//https://ithelp.ithome.com.tw/articles/10200539
//ES5: 語法
//React.createElement(type, [props], [...children]);
//ES5: 例子
// const paragraph = React.createElement(
//   "p",
//   {},
//   "This is a paragraph without using JSX!"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(paragraph);
//ES6: 對應例子
//const paragraph = <p>This is a paragraph using JSX!</p>;

//ES6可以用JSX : (將 元素 和 公式 混在一起！)
//const myelement = <h1> React is {10 * 10} times better with JSX! </h1>;
//記得設定class的時候，用className︰
//const title = <h1 className="primary">Hello World!</h1>;

//#endregion

// React 的 function 和 class 名稱都要記得大寫作開頭！(因為function就是class，而class要被Render就…)

//#region 多用 && 來判斷是否顯示什麼！有了JSX之後的大優點！
// function App({ isLoggedIn }) {
//   return (
//     <>
//       <h1>My Application</h1>
//       {isLoggedIn && <Profile />}
//     </>
//   );
// }
//#endregion

//#region 如果要用迴圈生成ele，記得要用 key (allows React to keep track of elements in lists.)
//   return (
//     <>
//       <h1>Grocery List</h1>
//       <ul>
//         {items.map((item) => <li key={item.id}>{item.name}</li>)}
//       </ul>
//     </>
//#endregion

//#region style 追設定時，有特別的要求

//在Css時這樣寫︰
//background-color : "yellow"

//在JSX之中，用駝峰字︰
// const Header = () => {
//   return (
//     <>
//       <h1 style={{ backgroundColor: "yellow" }}>Hello Style!</h1>
//       <p>Add a little style!</p>
//     </>
//   );
// };

//#endregion

//#region import Css 檔案，而不是引用 js檔 來要一個React相關的東東…
//import "./App.css";
//#endregion

//Name this CSS file so that it can be imported as a Module.?
//header.module.css:
//這個是用來做什麼的？我真不知道，只是記錄有這個題目？



// 超多實用例子！︰
// https://usehooks.com/
root.render(<U_Toggle_App />);//Javascript版本
//root.render(<U_Toggle_App_T />);//Typescript版本(我下一個目標是這個，所以先預習)
//Typescript版本 出現Error，而我無法理解，只能先放下了…

//做到這裡，暫停！
//我要去學Angular和Typescript了，我有點後悔沒有將React和Typescript順便合在一起去學會…

//其他Hook︰
//https://medium.com/hannah-lin/react-hook-%E7%AD%86%E8%A8%98-memorized-hook-usememo-usecallback-e08a5e1bc9a2
//https://reactjs.org/docs/hooks-faq.html

//幼幼班︰
//https://reactfordesigners.com/
//免/付費班︰
//https://reactjs.org/community/courses.html
//JavaScript的溫習︰
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript
