/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import ReactDOM from 'react-dom/client';

import { scryRenderedDOMComponentsWithClass } from 'react-dom/test-utils';
import reportWebVitals from './reportWebVitals';

import './index.css';

import App from './App';
import App2 from './PassValueAcrossGen/App2';

import Rich_Parent from './PassValueAcrossGen/Rich_Parent';
import Poor_Parent from './PassValueAcrossGen/Poor_Parent';

//import {GrandPa,Son,GrandSon} from './PassValueAcrossGen/GrandPa';
import GrandPa from './PassValueAcrossGen/GrandPa';
import GrandPaPa from './PassValueAcrossGen/GrandPaPa';

import BeforeStore from './GlobalState/BeforeStore';
import FruitStore from './GlobalState/FruitStore';

import Agent from './intergratePractice/Agent';
import Agent_alt from './intergratePractice/Agent_alt';
import Agent_func from './intergratePractice/Agent_func';
import Agent_cus from './CustomHook/Agent_cus';
import Agent_share from './CustomHook/Agent_share';
import AppRWD from './Resize25/AgentRWD';
import ComForm from './InputsPractice/ComForm';
import AgentRoute from './FrontEndRoute/AgentRoute';
import AgentR2 from './FrontEndRoute/AgentR2';

// 這個是Routing 學習不順利後，到官網的實作︰
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RApp from './Routing/RApp';
import Expenses from './Routing/Expenses';
import Invoices from './Routing/Invoices';
import Invoice from './Routing/Invoice';
import Cat from "./cat_image.jpg";


// Debug 用的? 但是 import 了會出錯，說找不到檔案。
//import * as serviceWorker from './serviceWorker'; 

// 這個是教材沒寫到的，新(2022?)的指(綁)定 index.html 元素的方法︰
const root = ReactDOM.createRoot(
  document.getElementById('root') // index.html的DOM
); // 或 createElement ？這個還沒有教到。

// 檔案原生的示範︰
root.render(<App/>);

// #region  JSX 語法

// #region  1. Hello world! 將 DOM 元素，render 進 index.html

// const element = <h1>Hello world!!!!!</h1>;
// root.render(element);

// #endregion 1

// #region  2. 同上

// const element = <button>大家好</button>
// root.render(element);

// #endregion 2

// #region  3. 傳入方法 ()=>

// const element =()=>{
//   return( <button>大家好</button> );
// }

// #endregion 3

// root.render(element()); // 1.2.3 共用

// #region  4. 傳入方法 ()=> 只能 return 一個元素

// const testFunction =()=> {
//   return( 
//       <div> 
//           <button> 大家好 </button>
//           <h1> 我很好 </h1>
//       </div>
//   );
// }
// // 一定要加 div 將兩個 DOM 包成一個。
// root.render(testFunction());

// #endregion

// #region  5. 在JSX中需要用到javascript的變數/函式...時，就要用{}包起來

// const showOne = true;
// root.render(
//     <h1> { (showOne === true) ? 1 : 0 } </h1>
// );

//#endregion 5

// #region  6. 設定字串 > 字串中，放入字串{}

// 字串中，放入字串{}
// const styleArgument = { fontSize: '100px', color: 'red' };
// root.render(
//   <h1 style = { styleArgument } > Hello, world! </h1>
// );

//  #endregion  6

// #region  6.5. 反正記得 style = {{}}

// HTML之中放入字串？
// const styleArgument = { fontSize: '100px', color: 'red' };
// const element = <h1 style = { styleArgument } > Hello, world! </h1>;
// root.render(element);

// {{}} : 在HTML之中，表示""指定屬性的字串？ X 下方用來指定class的也不是這樣…
// 外面那層括號代表裡面是javascript語法，裡面的括號表示物件型態 <- 還是看不懂
// 反正記得 style = {{}}
// const element = <h1 style = { { fontSize: '100px', color: 'red' } } > Hello, world! </h1>;
// root.render(element);

// #endregion 6.5

// #region  7. 設定 DOM 屬性時 「class」屬性變成「className」

// const element = <h1 className = "title" > Hello, world! </h1>
// root.render(element);

// #endregion 7

// #region  8. 透過JSX結合javascript運算式

// 例子︰迴圈

// const multiButton=()=>{
//   var output=[];

//   for(let i=0;i<4;++i)
//       output.push(<button>我是第{i+1}個按鍵</button>)

//   return output;
// }

// root.render(multiButton());

// #endregion 8

// #region  9. 屬性給布林值，true的話，可直接省略。(最終都會render成true)

// 死記 value 是 {}，style 是 {{}} ???
// const element = () =>
// {
//   return(
//     <div>
//           <button value={true} > 是 </button>
//           <br/>
//           <button value > 是 </button>
//     </div>
//   );
// }
// root.render(element());

// #endregion 9

// #region  10. onClick , C要大寫。和value一樣要 = {}

// onChange 同理，因為JSX都是駝峰字。
// 方法所收的都是event，event.target就是該呼叫的元素…

// const getValue=(event)=>{
//   console.log(event.target.value)
//   alert(event.target.value);
// }

// const element = () =>
// {
//   return(
//     <div>
//           <button value onClick={getValue}> 是(value=true) </button>
//     </div>
//   );
// }

// root.render(element());

// #endregion 10

// #region  11. 箭頭函式 包入多個 function

// const myFunction1=(event)=>{ // event可略
//   console.log("F1");
//   alert("F1");
// }

// const myFunction2=(event)=>{
//   //alert(event.target.value); // 小心，(e)=> 根本沒有event的傳入
//   console.log("F2");
//   alert("F2");

// }

// const element = () =>
// {
//   return(
//     <div>
//           <button value onClick={(e)=>{ myFunction1();myFunction2()}}> 是 </button>
//     </div>
//   );
// }

// root.render(element());

// 在瀏覽器的F12看不到元素上依附的onclick方法，但做還是會做…
// React這樣做，比較沒有那麼容易給「使用者」看穿﹑亂改﹑找漏洞?
// 還比較好去編輯？(我想是優點吧。)

// 箭頭函式 : 想傳什麼參數、使用幾個函式、做什麼運算都可以。缺點是很容易讓版面看起來很亂。

// #endregion  11

// #region  11.5  另一個傳入值，而不是傳入 event 的方法

// const myFunction1=(val)=>{
//   console.log(val);
//   alert(val);
// }

// const element = () =>
// {
//   return(
//     <div>
//           <button value onClick={(e)=>{ myFunction1(e.target.value);}}> 是 </button>
//     </div>
//   );
// }

// root.render(element());

// 在JSX綁定js資料、函式時，一定要加上{}
// 剛開始很容易照以前的習慣直接用屬性="綁上去的東西"
// 這樣的話等同於在傳字串。

// #endregion 11.5


// #endregion  JSX 語法

// #region  React Component (自訂元素) 簡介

// 這個語法讓我們可以把程式碼以函式(或是class，後面會提到)包成模組，
// 變成一個自己訂作的元素，
// 然後用跟使用button、div這些元素一樣的語法在JSX中使用

// 元素名稱第一個字母必須要是大寫、和函式(或class)名稱相同

// #endregion

// #region  Funtion Component 基本

//    #region  1. (Funtion Component)簡單例子

// function App(){
//   return(
//     <button>大家好</button>
//   );
// }

// root.render( <div> <App/> </div> );

// #endregion 1

//    #region  2. 於 render 可重覆使用

// function Progress(){
//   const barWidth="50%";
//   return(
//       <div>
//           <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
//           <div className="progress-bar" style={{backgroundColor:"#fe5196",width:barWidth,height:"100%",borderRadius:"10px"}}></div>
//       </div>
//     </div>
//   );
// }

// root.render(
//       <Progress/>
//       <Progress/>
// );

// #endregion 2.

//    #region  3. 從鄰檔引用自訂元素

// 上方要︰import App from './App';
// 意思是指將隔壁 App.js 的 App 方法引用進來。供下方使用
//root.render(<App/>);

// #endregion 3

//    props = 自訂元素 中的 自訂Attribute
// 「也」要去改 App.js 這個檔案

//    #region  1. 主檔(index.js)和附檔(App.js)之間的傳值 

// root.render(<div><App name='大家好'/></div>);

// #endregion 1

//    #region  傳接資料的型別問題
// 文字''/""
//root.render(<div><App number="87" getData="true"/></div>);
// 其他型別 {}
//root.render(<div><App number={87} getData={true}/></div>);

// 使用變數? props是唯讀
// 他說︰有的時候我們就是想要在元件自己這更改props，這個時候就要用比較迂迴的做法。在後面講...

// #endregion

//    #region  2. 將onClick會做的事，傳到寫好的自訂元件

// const printMessage=()=>{
//   document.getElementById('show-area').innerHTML="我被按到了";
// }

// root.render(
//     <div>
//         <App name="我的名字" handleClick={printMessage}/> 
//         <div id="show-area"></div>
//     </div> 
// );

// #endregion

//    #region  3. 在react component中，我們把包在標籤中間的東西，稱為children。

// <元素名稱> (其他的東西) </元素名稱>
//  (其他的東西) = children

// root.render(<div><App> children </App></div>);

// 不同的children間能互相影響，和一個叫state的東東有關係，但作者還是說之後再……

// #endregion

// #endregion

// ------------------
// component = 自訂元素
// Function component 為上述 (直接在這個檔)
// class component 為下述 (從外檔引入)
// https://zh-hant.reactjs.org/docs/components-and-props.html
// ------------------

// #region  Class Component 基本

// #region   1. 使用render方法

// root.render(<App/>);

// #endregion 1

// #region   2. 傳 props 值
// const printMessage=()=>{
//   document.getElementById('show-area').innerHTML="我被按到了";
// }

// root.render(
//     <div>
//         <App name="我的名字" handleClick={printMessage}/> 
//         <div id="show-area"></div>
//     </div>
// );

//#endregion 2

// #region   3. 失敗例子︰會跑，但是不會有改變，只會看到 log 中的 hey

// const changeName=(newName)=>{ 
//   name=newName;
//   console.log("hey")//加入此行
// }

// var name="舊的名字";

// root.render(
//     <div>
//         <App name={name} handleClick={changeName}/> 
//         {/* 就算是 changeName("新的名字") 也傳不入參數，程式會死，連log都不寫 */}
//         <div id="show-area"></div>
//     </div>
// );

// #endregion 3

// #region   4. 用 class 自己本身的方法去改值，而不是用index.jx傳入的參數來改值

// 詳見 App.js
// root.render(
//     <div>
//         <App/> 
//     </div>
// );

//  #endregion 4

// #region   5. 多一個進度條的練習

// root.render(
//     <div>
//       <br/>
//       <br/>
//         <App/> 
//     </div>
// );

//#endregion 5

// #region   6. state 的特性

// 詳見App.js

// root.render(
//     <div>
//       <br/>
//       <br/>
//         <App/> 
//     </div>
// );

//#endregion  6

// #endregion Class Component 基本

// #region  Function Component  (可代替 Class Component 的方法︰)

// #region   1. useState   

// React hook出現了，
// 它提供一系列讓你能在function component中使用「在class component常用的功能」的方法，
// useState就是其中之一。

// const [percent, changePercent] = useState("20%");

// 我們宣告了一個變數和一個函式，第一個percent是變數
// 而第二個 changePercent 變成了等同於 (值)=>{this.setState({percent:值})}
// 函式在語法上沒有限定命名原則，但一般會以 set 做為開頭 ( changePercent 該為 setPercent )

// const [percent, changePercent] = ....，是利用javascript的解構賦值
// useState只是一個函式，它會接收一作為初始值的參數 並回傳一個包含兩個值的array，
// 回傳︰第一個值是 state 、 第二個值是用來對剛那個 state 做 setState 的函式

// 實作詳見︰ App.js

//root.render(<div><br/><br/><App/></div>);

// #endregion 1 

// #region useState(和其他的React hook) 的特質

// useState
// 不能在function component中的迴圈、if-else、nest function
// 被定義使用

// 對 useState 而言，它是依照(render的)順序去分辨每一個hook，
// 而不是用我們的定義內容/來接的變數的名字去分辨

// 所以 re-render 的時候…如果有迴圈什麼的，就會全亂了。

//  總結︰ function component 的 useState 是比較簡潔
//         但功能是真的不多，和 class component 對比。

// #endregion

// #endregion Function Component-----------

// #region   2. debug : React-Developer-Tools

// 當專案規模到一定程度的時候，
// state、props和函式會變的很多，debug上越來越困難。
// 這時我們就會用到一款在chrome上協助開發者debug的插件:React-Developer-Tools。

// 引入︰import * as serviceWorker from './serviceWorker'；

// root.render
// (    
// <div>
//   <br/>
//   <br/>
//   <App name="我是進度條">在index.js中轉換百分比</App>
// </div>
// );

// 在 chrome 線上應用程式商店，安裝 React-Developer-Tools
// 可以在 More 之中，看出有什麼 Component ，還可以自由輸入 attribute 的值，即時看到效果。
// 眼睛可以顯示位置
// 當你在component點擊該元件後，回到console，輸入$r，就會跳出和此元件相關屬性，
// 讓你可以選擇並搭配console做一些監控、模擬事件等等常見的debug方式。

// #endregion

// #region  使用 Http request - Fetch Api

// 因為jQuery運作模式/渲染DOM的方式和React不太一樣，
// 為避免發生衝突，一般「不會希望」在React中使用jQuery

// Fetch Api是內建於JavaScript web api的一部份。使用時，不需要額外下載或嵌入CDN。
// Fetch是一個Promise(一個ES6的東東？)

//    #region 基本架構︰

// fetch( request的url, { /*設定request內容*/})
//     .then(res => res.json()) /*把request json化*/
//     .then(data => {
//           /*接到request data後要做的事情*/
//     })
//     .catch(e => {
//         /*發生錯誤時要做的事情*/
//     })

//    #endregion 

//    #region 使用GET︰

// fetch( request的url, {method: "GET"}) /*設定使用GET*/
//     .then(res => res.json()) 
//     .then(data => {
//           /*接到request data後要做的事情*/
//     })
//     .catch(e => {
//         /*發生錯誤時要做的事情*/
//     })

//    #endregion

//    #region 加上headers (Content Type)

// fetch( request的url, {  method: "GET", headers: new Headers({ 'Content-Type': 'application/json',})   }
// )
// .then(res => res.json())
// .then(data => {
//     /*接到request data後要做的事情*/
// })
// .catch(e => {
//   /*發生錯誤時要做的事情*/
// })

//    #endregion

//    #region 加上headers (token)

// const token = "Bearer "+ 我存好的token ;

// fetch( request的url, {
//         method: "GET",
//         headers: new Headers({
//             'Content-Type': 'application/json',
//             'Authorization': token, /* 把token放在這 */
//         })
//     })
//     .then(res => res.json())
//     .then(data => {
//           /*接到request data後要做的事情*/
//     })
//     .catch(e => {
//         /*發生錯誤時要做的事情*/
//     })
// )

//    #endregion 

//    #region 加上body (JSON type)

// const data= { A:"資料A", B:"資料B" }

// fetch( request的url, {
//         method: "GET",
//         body: JSON.stringify(data),   /*<<<<<把json資料字串化*/
//         headers: new Headers({
//             'Content-Type': 'application/json'
//         })
//     })
//     .then(res => res.json())
//     .then(data => {
//           /*接到request data後要做的事情*/
//     })
//     .catch(e => {
//         /*發生錯誤時要做的事情*/
//     })

//    #endregion

//    #region 加上body (x-www-form-urlencoded type) 沒有用過…？

// 資料處理
// const data= { A:"資料A", B:"資料B" };
// const formData = Object.keys(data).map(
//     function (keyName) {
//         return encodeURIComponent(keyName) + '=' + encodeURIComponent(data[keyName])
//     }
// ).join('&');

// 使用
// fetch( request的url, {
//   method: "GET",
//   body: formData,   /* <<<<< 使用處理後的資料*/
//   headers: new Headers({
//       "Content-type": "application/x-www-form-urlencoded"
//   })
// })
// .then(res => res.json())
// .then(data => {
//     /*接到request data後要做的事情*/
// })
// .catch(e => {
//   /*發生錯誤時要做的事情*/
// })

//    #endregion 

//    #region   1. 實作 Fetch

// 詳見 App.js
//root.render(<App/>)

//    #endregion 1

// #endregion Fetch 理論 和 實作

// #region  Class Component 生命週期 ----------

//    #region   class component 生命週期 理論

//元件被安裝時(Mount)、元件被更新時(Update)、元件被移除時(Unmount)

//元件被安裝時(Mount) :
//constructor() -> componentWillMount() -> render() -> 渲染DOM ->......(渲染後的生命週期)

// version 17後，componentWillMount()將會被改為UNSAFE_componentWillMount()
// 我自己CMD :　npm view react version  結果︰ 18.2.0 ，以Ver.16.3誕生的新週期函數static getDerivedStateFromProps()來代替。

//constructor() -> static getDerivedStateFromProps() -> render() -> 渲染DOM -> ......(渲染後的生命週期)

// 中間的這一步長這樣︰
// static getDerivedStateFromProps(props,state){
//   if(props.dad!=="Chang")
//     return {isRightDad:false}
// }

// 這個函數最常使用的狀況是「用初始接收到的props」
// 去設定第一次render時的state或是做其他的事情。

// 這個函數是static，也就是this不能在這裡使用
//(static指的是這函式不屬於以這個class被宣告出來的(單一個)物件，而是泛屬於此class類別的所有物件)。

// 所以我們不能在getDerivedStateFromProps呼叫 「this」.setState !!! 
// 更改state的方法是用預寫好的規則 : 以這個函式的return值來設定

// #endregion 1

//    #region   1. 生命週期實作 getDerivedStateFromProps

// 詳見 App.js

//root.render(<App dad="Chang"/>);

// #endregion 1

//    #region   補上，承下 的理論

// 要注意的是，我們不希望在getDerivedStateFromProps()中做宣告/初始化的動作，
// 如果可以的話就在constructor中做，

// 其他如fetch或是動畫等，應該移到下一篇要講的componentDidMount()中來做。

// #endregion  

//    #region   componentWillMount -> componentDidMount

// componentWillMount(){
//   if(this.props.dad!=="Chang")
//     this.setState({isRightDad:false})
// }

//過去除了getDerivedStateFromProps()的功能外，
//很多人會在這裡執行fetch以取得想在render()中使用的資料。<<<---這個是生命週期的重點。
//例如token的檢查等等。(?)
//然而官方表示，
//如果在componentWillMount()這執行fetch，並不會等response進來才執行render。
//又因為這是唯一會在 *server side (見註解)執行的生命週期函數，
//導致它在server side和client side都會執行一次，

//「重複執行」這件事並不符合我們對Mount週期函數的期待。
// (所以它是在 server side 回應 request 時，已經會執行一次。去到了client side 又再做一次？)
// ===> version 17後，componentWillMount()將會被改為UNSAFE_componentWillMount()。

//一般我們對Mount系列函數的期待是「只執行一次」，不想重複執行的動作都會在這系列呼叫。
// 所以我們改用 componentDidMount

// 生命週期︰

//constructor() -> static getDerivedStateFromProps() -> render() -> 渲染DOM -> componentDidMount()

// #endregion 

//    ****** class component 生命週期 ******︰
//    constructor() -> static getDerivedStateFromProps() -> render() -> 渲染DOM -> componentDidMount()

//    #region   2. 生命週期實作 componentDidMount

// 詳見 App.js
//root.render(<App dad="Chang"/>);

// #endregion   2

//    #region   3. fetch loading (在 fetch 拿到資料之前，不想元素的「空白」狀態被看見)

// 以一個 state 來控制 「顯示」的狀態，如果沒有fetch到資料時，就掛個「Loading...」的牌

// 詳見 App.js
//root.render(<App dad="Chang"/>);

// 會等三秒才顯示小朋友的媽媽是誰。

// #endregion 3

//    #region   4. (利用Js觸發)開場動畫

//例如: 開場透過修改scrollTop做出scrollTo特效、使用別人提供的插件，而此插件只提供js上的api時
//下面這個範例就是在componentDidMount呼叫自己寫的scrollTo函式，並透過setTimeout進行呼叫自己的recursive，以達成捲動動畫的效果

// 詳見 App.js
// root.render(<App dad="Chang"/>);

// Loading 期間，會慢慢滑到右邊

// #endregion  4

//    #region   生命週期函數componentWill「Un」mount(移除)

// Mount系列的函數就只會(在第一次render?)被執行一次，
// 其中componentDidMount是所有生命週期函數中最常被使用到的。

// 因為元件移除的生命週期函數componentWillUnmount(移除)很常跟componentDidMount(出生)一起使用，
// 所以我們會先跳過「更新」的週期，直接來講(移除)。

// #endregion 

//    #region   5. componentWill「Un」mount的範例

//root.render(<div><App/><div id='talk'></div></div>)

// App 載入了 Baby，所以我開了個新檔
// App 有個 State︰ isBorn
//       兩個方法︰handleClick 和 sendBaby
// handleClick 用來改 isBorn (bool)
// sendBaby 在 isBorn=true 之下，用來回傳 baby

// App render 了 一個 button ，一個 方法 sendBaby
// 方法「可能不會回傳」這個 baby，要看 handleClick 改的 isBorn 是不是 true

// Baby 有二個屬性，一個方法。
// 屬性︰isGetData﹑Mom
// 方法︰ajaxSimulator (取Mom的名字，延遲幾秒)

// 當 App 的 sendBaby 要「生」的時候，
// Baby 的 componentDidMount，會去抓媽媽，和叫一聲「爸」，顯示在 talk 的 div 中。
// 抓到媽媽的值後，又render一次，於是又叫一聲「爸」。 <<<<--- 不，componentDidMount 的用意，就是為了避免這個。
// componentDidMount 只有第一次 Render (出生的時候) ，才會做一次。之後修改 state 的 Render 都不會動到它。

//  所以
//  每次 Baby 生成的時候都做一次「Baby的componentDidMount，會去抓媽媽，和叫一聲「爸」」

//  但是，如果沒有 Baby 的 componentWillUnmount 方法
//  talk 的 div 是不停累加「爸」…

//  證明 Baby 的 componentWillUnmount 是在 App 的 Render 時，
//  決定了「收回」這個 baby 時，才進行一次

// #endregion

//    生命週期的官方解釋，非常清楚︰
//https://zh-hant.reactjs.org/docs/react-component.html

// Mounting : constructor() > static getDerivedStateFromProps() > render() > componentDidMount()
// 更新State : static getDerivedStateFromProps() > shouldComponentUpdate() > render() > getSnapshotBeforeUpdate() > componentDidUpdate()
// Unmounting : (該個別元素的) componentWillUnmount()

// 更多相關請往官網上面看
// 生命週期的流程圖︰
//https://ithelp.ithome.com.tw/articles/10222857

//    #region   6. componentWill「Un」mount的補充︰ 移除監聽事件 及 setInterval

// 移除監聽事件︰沿用上面 5 的例子，我加在 Baby 裡

// setInterval 是什麼︰
// https://kuro.tw/posts/2019/02/23/%E8%AB%87%E8%AB%87-JavaScript-%E7%9A%84-setTimeout-%E8%88%87-setInterval/

// 反正就都是一堆在 componentDidMount 做出的，都可在 componentWillUnmount 之中收回，當這個元素「消失」時。

// #endregion 6

//    #region   7. 在state或props被改變時會觸發 : Update 的 生命流程

// Update生命流程
//1.static getDerivedStateFromProps()
//2.shouldComponentUpdate()
//3.render()
//4.getSnapshotBeforeUpdate()
//< -- 教材補充這裡是︰渲染畫面
//5.componentDidUpdate()

//    1.static getDerivedStateFromProps(props, state)
//    跟mount中的那一個是一樣、共用的 (+ 注意是 static)
//    「從props中取得state要設定的值」
//    在這裡，參數的props和state是新入的。

//    2.shouldComponentUpdate(nextProps, nextState)
//    守門員，用來做確認是不是真的要update。
//    這個函數要return一個 ++++ 布林值 +++++ !
//    false時，元件就不會更新，也不會繼續執行接下來的render()以及剩下的update生命週期函數。
//    預設回true
//    (以上是用來卡驗證的嗎？)

//    3.render 一樣，不解釋

//    4.getSnapshotBeforeUpdate(prevProps, prevProps)

//    離開我們前，拍張照片吧?
//    「render()收集完要更新的東西」  跟  「React真的拿render()中的東西去更新DOM」 之間。
//    它的用途是讓你可以把更新前的最後一刻DOM的狀況紀錄下來，
//    然後用return值傳參數到componentDidUpdate中

//    (所以是render和componentDidUpdate的中間人。)
//    沒有要傳東西給componentDidUpdate，就要回傳null。

//    this.props和this.state是更新之後的，
//    舊的props和state在參數中以prevProps和prevProps存在。
//    這個方法並不常見，
//    但它可能會在像是對話串這類需要以某種特殊方始處理滾動軸位置的 UI 中出現。

//    (這個功能就很酷！像是聊天室一樣，留言會一直自己往上跑，拉柄的位置一直留在最低！)

//    #region 官方例子︰
//    https://zh-hant.reactjs.org/docs/react-component.html#getsnapshotbeforeupdate

// class ScrollingList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.listRef = React.createRef();
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {       //<---這個輸入的，是舊(更新前)的，而不是新的！
//     // Are we adding new items to the list?             // 如果列表變長了(高了)。
//     // Capture the scroll position so we can adjust scroll later. 
//     if (prevProps.list.length < this.props.list.length) {
//       const list = this.listRef.current;                // 抓「現在的(舊的)」 列表
//       return list.scrollHeight - list.scrollTop;        // 傳回「現在(舊的)列表的長(高)度 - (舊的)拉柄的最高點」= 拉柄到地面的高度？
//     }
//     return null;
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {  //<--- 這裡接住了Snapshot (但是如果這裡也可以接prevProps, prevState)，
//                                                         // 為什麼不在這裡做判斷？而是要從上面取值？
//                                                         // 推測︰const list = this.listRef.current;
//                                                         // 在這兩個方法，並不是同一個？上面的是指舊的那個？下面的是指新的那個？
//     // If we have a snapshot value, we've just added new items.
//     // Adjust scroll so these new items don't push the old ones out of view.
//     // (snapshot here is the value returned from getSnapshotBeforeUpdate)
//     if (snapshot !== null) {
//       const list = this.listRef.current;
//       list.scrollTop = list.scrollHeight - snapshot;    // (新的)列表的長(高)度 - (舊的)拉柄到地面的高度 = (新的)拉柄的最高點！
//     }
//   }

//   render() {
//     return (
//       <div ref={this.listRef}>{/* ...contents... */}</div>
//     );
//   }
// }


//      #endregion

//    4.5 渲染畫面

//    5. componentDidUpdate(prevProps, prevState, snapshot)
//    和componentDidMount一樣，
//    這個函數被強烈建議把「更新後想做的事情」放在這裡，
//    包括先前提過的fetch等。
//    因為這個函數是唯一也是最後在DOM真的被更新後執行的週期函數。
//    (回想componentDidMount放在render後，是因為確保取回來的結果，有地方放…未取到之前，也會有個Loading…在跑)

//    所以 Mount 和 Update 的差別，是一個起始，一個是不斷更新中，
//    Mount之中，還可以設定元素消失(死亡)時，會幹什麼…
//    class component 的三大生命週期︰元件被安裝時(Mount)、元件被更新時(Update)、元件被移除時(Unmount)

// #endregion  7

// #endregion   Class Component 生命週期 ----------

// #region  ****** function component 的 生命週期 ****** :

//    #region  function component 初步介紹

//        跟state一樣，在function component中我們必須要使用React hook才能設定生命週期函數。
// React hook?

// 在前面講生命週期時，我們提到最常被使用到的是
// componentDidMount、componentWillUnmount和componentDidUpdate這三個函數，
// 而React hook把這三者整合起來，變成了useEffect。
// Hook 的官方簡介︰
// https://zh-hant.reactjs.org/docs/hooks-intro.html

// React hook兩大守則
// 只能在最外層scope宣告(? where? 這個index.js就是最外層的scope了嗎？)
// 只能在function component或custom hook(之後會說這是什麼)中使用

// useEffect基本語法
// useEffect接收兩個參數，

// 第一個是一個函式，定義componentDidMount或componentDidUpdate要做什麼事，
// 此函式的回傳值也要是一個函式，表示componentWillUnmount 要做什麼事。

// 第二個是一個array，裡面是定義當哪些變數被改變時，這個useEffect要重新被觸發。
// 有點像是過去我們在componentDidUpdate寫prevState!=this.state這種感覺。(<--What?算了，之後看實例)

// 長得像(1)︰
// useEffect(() => {
/*        以此來相等如class component 的︰componentDidMount(已經render了Mount了，然後才去抓資料的動作…)(第一次上線)*/
//        }, []); 
/*        第二個參數是用來限定當哪些變數被改變時useEffect要觸發 */


//        componentWillUnmount就是useEffect第一個用來當參數的函式的return值。

// 長得像(2)︰
// useEffect(() => {
//   /* 以此來相等如class component 的︰componentDidMount(已經render了Mount了，然後才去抓資料的動作…)(第一次上線)*/  
//   return (() => { //<-----這個是重點！
//   /* 以此來相等如class component 的︰componentWillUnmount (當這個元素消失的時候要做什麼)*/    
//   });  
// }, []); 
/*        第二個參數是用來限定當哪些變數被改變時useEffect要觸發 */

//        如果想要實現componentDidUpdate，
//應該要搭配另外一個React hook: useRef。
//也就是我們用useRef去產生一個紀錄:是否完成第一次渲染的變數，
//初始值預設會給false，第一次執行effect後改為true。

// 長得像(3)︰
// const mounted=useRef(); //這個bool！是重點
//     useEffect(()=>{
//       if(mounted.current===false){ //第一次進來，預設為false
//         mounted.current=true;
//         /*以此來相等如class component 的︰componentDidMount*/   
//       }
//       else{ // (因為dependencies參數改變而觸發的︰)第二次開始，就跑進來這裡
//         /*以此來相等如class component 的︰componentDidUpdate */
//       }
//       return (()=>{
//         /*以此來相等如class component 的︰componentWillUnmount */
//       })
//     },[以此來相等如class component 的︰status屬性]); /* 第二個參數是用來限定當哪些變數被改變時useEffect要觸發 */


//下面省略了第二個參數[]，也是componentDidMount 和 componentDidUpdate集合體:
// 長得像(4)︰
// useEffect(() => {
//   /* componentDidMount 和  componentDidUpdate (每次都做，不分初或多次)*/
//   return () => {
//     /* componentWillUnmount */
//   };
// });


// 其他︰
// 可以有多個useEffect存在同一function component和custom hook中 ?
// 所以我們可以針對不同的變數(?)去寫不同的useEffect。

//    #endregion  初步介紹

//    #region  function component 的實作，詳見 App2 和 Babay2
//root.render(<div><App2/></div>)
//    #endregion

// #endregion *****************************

// #region ****** Class component 的 「隔代」傳值問題 ****** :

//    (我覺得這父子的關係，不是 extends ，因為 父子皆 extends Component
// 父子的意思是 App 和 Baby 的關係，index 呼叫 App 呼叫 Baby …
//    index 給值 > App 給值 > Baby )

//    #region 父給子值，子改父值，又做成父改子值︰
// (1)父給方法我 > 我修改了父給我的值 > (2)值的改變讓我的心情很好。
// 實作︰詳見 Rich_Parent, Rich_Son, Rich_Daughter
// root.render(<div><Rich_Parent/></div>)
// (只要不斷求，爸爸就不斷給…所以是富爸爸)
// #endregion

//    #region 同父的子類別之間︰子對子改值
// 窮的爸爸只有100元，女兒吵，給她多一點，兒子就少一點
// 女兒開心了，兒子就不開心。
// 實作︰詳見 Poor_Parent, Poor_Son, Poor_Daughter
// root.render(<div><Poor_Parent/></div>)
// #endregion

//    #region 祖先對孫子 All In 的 方法一

// 在這個狀況下，階層中間的「兒子」只是一個中繼站的感覺。
// 就變成是多層父子溝通。
// 但如果要傳的東西很多，每一層都要綁this.props.名稱會有點麻煩。
// 方法一︰要運用 spread operator
// 像︰<GrandSon {...this.props}/>
// 把Son所有的props全部綁在GrandSon上

// 詳見自創的實作︰GrandPa.js
// root.render(<GrandPa/>);

// #endregion

//    #region 祖先對孫子 All In 的 方法二︰不用綁全部props、又更簡易的方法?(不用其他插件)

// 運用Bracket notation(以中括號存取物件)
// 在父元素中，定義兩個函式
// 1.存取資料用: 接收一個名字參數，來取回相應名字的參數。
// handleSendData(name){
//   return this.props[name];
// }
// 2.存取函式用: 接收兩個參數，第一個是函式名稱，第二個是函式要用的參數array。
// handleSendFunc(method, ...arg){
//   return this.props[method](...arg);  //<---這個做不到，詳見︰GrandPaPa
// } //(...arg)是一個真的可以寫的程式碼嗎？

// 把這兩個函式綁在所有中繼站上(目標子元素也要綁)，
// 在這個案例中繼站只有一個，所以只要綁目標(孫)子元素。
// 像︰
// <GrandSon 
// handleSendData={this.handleSendData} 
// handleSendFunc={this.handleSendFunc} />

// 目標(孫)子元素呼叫這兩個函式︰
/* 存取綁在Brother.js上的money */
// let dadMoney=this.handleSendData("money"); // 取父的 money 元素

// 詳見︰
//root.render(<GrandPaPa/>);

// 類似︰
/* 呼叫綁在Brother上的argue函式(allocateMoney)。
「brother」和「5」是原本allocateMoney規定需要的參數。 */
// this.handleSendFunc("argue","brother",5);  // 使用父的argue方法，傳入參數"brother",5。

// #endregion

//    #region Global state 

// 由於祖先對某代孫子的溝通的情形很常發生，因此後來衍生了產生Global state的官方或第三方插件
// 其中之一，可參考︰
// https://ithelp.ithome.com.tw/articles/10216471

// 也打開來看看吧…

// 即使中間的中繼元件沒有要用到資料，還是必須要幫忙綁props，
// 這種方式在層數太多的時候就顯得很麻煩。
// Global state

// 用來對比的有一傳一例子︰
// root.render(<BeforeStore />);

// 使用 Global state : 
// root.render(<FruitStore />);

// #endregion

//    #region (大補充)在官網上，很好解釋Component的例子(私認為比以上的教材更清楚)︰

// 多層傳值的使用例子︰
// https://zh-hant.reactjs.org/docs/components-and-props.html
// 這個例子中，好像把資料打包成「物件」來分別「傳承」會更好。
// 一個爸爸有多個兒子，每個兒子都給他們不同的物件…兒子再給孫子。
// 但是如何打包成物件? 請參照 state 的寫法。

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   root.render(element);
// }
// setInterval(tick, 1000); // 這個方法，是會自己計時，並一直執行的。


// 將 element 抽出為一個 function component 
// 傳一個物件，再取出其屬性。
// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2> 
//     </div>
//   );
// }
// function tick() {
//   root.render(<Clock date={new Date()} />);
// }
// setInterval(tick, 1000);

// 理想情況下，我們想要撰寫一次 Clock 並且它會自己更新：
// root.render(<Clock />);

// 你可以透過以下 5 個步驟轉換一個 function component 像是 Clock 成為 class：
// 建立一個相同名稱並且繼承 React.Component 的 ES6 class。
// 加入一個 render() 的空方法。
// 將 function 的內容搬到 render() 方法。
// 將 render() 內的 props 替換成 this.props。
// 刪除剩下空的 function 宣告。
// class Clock extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }
//加入 Local State 到 Class
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()}; // 咦，State的寫法，就是物件的寫法…
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }
// root.render(<Clock />)
// 但是這個還是不會跳。

//每當 Clock render 到 DOM 的時候，我們想要設定一個 timer。在 React 中稱為「mount」。
//每當產生的 Clock DOM 被移除時，我們想要清除 timer。在 React 中稱為「unmount」。

class Clock extends React.Component {

  // 正確的使用 State 用 this.setState
  tick() {
    this.setState({
      date: new Date()
    });
  }

  // 錯誤 : 不會引發更新
  // this.state.comment = 'Hello';

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), // 這個 方法，在掛上的時候，就設定它一秒更新一次。
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID); // timerID這屬性，只是為了進行一個方法？
  }
  // 如果 Clock component 從 DOM 被移除了，React 會呼叫 componentWillUnmount() 生命週期方法，所以 timer 會被停止。
  // 但這裡還沒用到就是了。
  constructor(props) {
    super(props);
    this.state = { date: new Date() }; // 咦，State的寫法，就是物件的寫法…
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
//root.render(<Clock />)

//每當 Clock 輸出被插入到 DOM 時，
//React 會呼叫 componentDidMount() 生命週期方法。
//在 Clock component 生命週期方法內，會要求瀏覽器設定 timer 每秒去呼叫 component 的 tick() 方法。

//瀏覽器每秒呼叫 tick() 方法。
//其中，Clock component 透過包含目前時間的 object 呼叫 setState() 來調度 UI 更新。
//感謝 setState()，React 現在知道 state 有所改變，
//並且再一次呼叫 render() 方法來了解哪些內容該呈現在螢幕上。
//這時候，在 render() 方法內的 this.state.date 將會有所不同，
//因此 render 輸出將會是更新的時間。React 相應地更新 DOM。

//https://zh-hant.reactjs.org/docs/state-and-lifecycle.html

// React 可以將多個 setState() 呼叫批次處理為單一的更新，以提高效能。
// 因為 this.props 和 this.state 可能是非同步的被更新，你不應該依賴它們的值來計算新的 state。
// 例如，這個程式碼可能無法更新 counter：
// this.setState({ // 錯誤
//   counter: this.state.counter + this.props.increment,
// });
// 使用第二種形式的 setState()，
// 它是一個 function 而不是一個 object。
// Function 將接收先前的 state 作為第一個參數，並且將更新的 props 作為第二個參數：
// 正確
// this.setState((state, props) => ({
//   counter: state.counter + props.increment
// }));
// -------(or)---------
// this.setState(function(state, props) {
//   return {
//     counter: state.counter + props.increment
//   };
// });

// (先接了再做 update，那就肯定那個值還在，還沒被刪除之類的意思？)

//#region 向下資料流

//Parent 和 child 不會知道某個 component 是 stateful 或 stateless 的 component，
//也不在意它是透過 function 或是 class 被定義的。

//這就是 state 通常被稱為 local state 或被封裝的原因。
//除了擁有和可以設定它之外的任何 component 都不能訪問它。

//FormattedDate component 會在它的 props 接收到 date，
//但他不知道它是從 Clock 的 state 傳遞過來的，
//從 Clock 的 props 或者是透過手動輸入：
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

//想像一個 component tree 是一個 props 的瀑布，
//每個 component 的 state 像是一個額外的水流源頭，
//它在任意的某個地方而且往下流。
//例證
class Clock2 extends React.Component {
  tick() {
    this.setState({
      date: new Date()
    });
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      2000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
class Clock3 extends React.Component {
  tick() {
    this.setState({
      date: new Date()
    });
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      3000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
//root.render(<div><Clock /><Clock2 /><Clock3 /></div>)

// 這三個時鐘各自在動，每個方法有自己的 render 和 return
// 證明各自己的 state 是各不相關的，資料是向下流的，state 它是 local state 

//#endregion

// 事件處理，是官網教材的下一章，但是已經離開「傳值」的主題太遠了，所以我晚點再看。
// https://zh-hant.reactjs.org/docs/handling-events.html

// #endregion

// #endregion

// #region ***** (進階)Class 和 function Component 練習 ***** 

// root.render(<Agent/>) // 22

// root.render(<Agent_alt/>) //23

// root.render(<Agent_func/>) 

// #endregion ***** *****

// #region ***** function component 的好處，Custom Hook

// 24
// 創造自己的React hook
// 以use開頭。必須！以下是官方說法:
// Without it, we wouldn’t be able to automatically check for violations of rules of Hooks because we couldn’t tell if a certain function contains calls to Hooks inside of it.
// 為了程式可以檢查到 Custom Hook 之中，有沒有其他 Hook
// 其它的語法規定都跟React hook的規定一樣，
// 像是只能在function component中呼叫、不能在if-else中定義......等

// 實作︰
// root.render(<Agent_cus/>)
// root.render(<Agent_share/>)

// #endregion ************

// #region ***** RWD Resize 視窗 (25)*****

// 要「監控」，就一定會有:
// addEventListener(事件,函式)
// removeEventListener(事件,函式)

// 視窗(window)「改變長寬」所觸發的event是'resize'。
// 我們只要在Custom hook中監控視窗的這個事件，並且透過window.innerWidth去取得目前視窗寬度，
// 元件就能搭配這個hook判斷自己該呈現RWD中的哪個樣貌。<<<<<!!!

// root.render(<AppRWD/>)

// #endregion

// #region 各類型的 input 元件(select)，和 function Component 配搭

// root.render(<ComForm/>)

// #endregion

// #region 前端路由(27-28)

// Single Page Application(SPA)
// 前端路由的好處就是我們從頭到尾都只需要一個index.html，
// 換路徑時只會更改頁面裡不一樣的地方。無論是對於使用者還是開發者而言，
// 看起來不像是使用/開發多個頁面，而像是一個(單頁的)應用程式。

// React中幫助實現前端路由的插件react-router-dom
// 把焦點放在如何使用React中幫助實現前端路由的插件react-router-dom
// 前端路由的原理不會去探討

// root.render(<AgentRoute/>)
// 以上的好像做不到，所以我改試下方的那個。

// https://www.w3schools.com/react/react_router.asp
// npm i -D react-router-dom@latest

//root.render(<AgentR2 />)

// 成功了！請參考 AgentR2 和 AgentRoute 的寫法，應該只是新舊版寫法有所不同。
// (寫法換得很快，以後要維護真的…)
// http://localhost:3000/ <是第一頁
// http://localhost:3000/2 <是第二頁
// http://localhost:3000/3 //<是第三頁不成功，傳參數這件事，要深入地研究(暫時放下)
// http://localhost:3000/4/123 <是第四頁

// 還在更多可以慢慢探索，但目前我又趕著去學Vue了…
// https://reactrouter.com/docs/en/v6/getting-started/tutorial
// https://reactrouter.com/docs/en/v6#useparams
// https://reactjs.org/docs/code-splitting.html#route-based-code-splitting
// https://ithelp.ithome.com.tw/articles/10250167

// 在28中，說到用 a 在各種麻煩，所以用 link 比較好
// .....

// 實作起來，還是各種不順，所以我按照官網的做一次好了。
// https://reactrouter.com/docs/en/v6/getting-started/tutorial
// 見下個region

// #endregion

// #region  前端路由的官網實作

//https://reactrouter.com/docs/en/v6/getting-started/tutorial

//#region 1-2
// root.render(
//   <BrowserRouter>
//     <RApp />
//   </BrowserRouter>
// );
//#endregion

// #region 3 簡單目錄頁

// root.render(
//   <BrowserRouter>
//     <Routes>
//       {/* RApp 是一進來就出現的目錄頁 */}
//       <Route path="/" element={<RApp />} />
//       {/* 目錄頁之中，顯示出下方兩個的連結 */}
//       <Route path="expenses" element={<Expenses />} />
//       {/* 目錄頁只紀錄和改變URL(path)，真正生成Component(頁面)的，還是在Index這頁 */}
//       <Route path="invoices" element={<Invoices />} />
//     </Routes>
//   </BrowserRouter>
// );

// #endregion 

// #region 4 Nesting 分頁保留目錄頁的外套

// root.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<RApp />}>
//         {/* Route在Route之中，其中的分頁，保留上方(外面)的資料 */}
//         <Route path="expenses" element={<Expenses />} />
//         <Route path="invoices" element={<Invoices />} />
//       </Route>
//     </Routes>
//   </BrowserRouter>
// ); 

// #endregion

// #region 5 -  7 和資料互動，及找不到URL時顯示，傳參數或不傳參數...等

// root.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<RApp />}>

//         {/* Route在Route之中，其中的分頁，保留上方(外面)的資料 */}
//         <Route path="expenses" element={<Expenses />} />

//         {/* 傳參數正確的方法！ */}
//         <Route path="invoices" element={<Invoices />}>

//           {/* 如果沒有參數 */}
//           <Route
//             index
//             element={
//               <main style={{ padding: "1rem" }}>
//                 <p>Select an invoice</p>
//               </main>
//             }
//           />
          
//           {/* 如果有參數 */}
//           <Route path=":invoicesId" element={<Invoice />} />

//         </Route>

//         {/* 找不到URL時顯示的 */}
//         <Route
//           path="*"
//           element={
//             <main style={{ padding: "1rem" }}>
//               <p>There's nothing here!</p>
//             </main>
//           }
//         />

//       </Route>
//     </Routes>
//   </BrowserRouter>
// );

// #endregion

// 我在 Custom Behavior 停下來不做了，回為這已經離題太遠？
// 有空再做吧…

// #endregion

// #region 使用圖片

//1. 使用 import
// root.render(
//   <div style={{width:"50%",height:"50%"}}>
//     <img src={Cat} style={{width:'50%', Height:'50%'}} alt="小貓咪的圖片"/>
// </div>
// );

//2. 直接引入，但是這個調不到 圖片的大小？
// root.render(
//   <div style={{width:"100px",height:"100px"}}>
//     <img src={require("./cat_image.jpg")} alt="小貓咪的圖片"/>
//   </div>
// );

// #endregion

// #region 引用CSS檔

// root.render(<AgentR2/>)

// #endregion

// #region 還可以學的很多︰

// 引入CSS感覺廢廢的，話說可以再參考︰
// https://ithelp.ithome.com.tw/articles/10215800
// 學習 Styled-component，但是我趕著學 Vue 就不看了…

// 例如 ︰Props 太多， Component 就容易出錯， 就讓 Prop-Types 替你把關吧！
// https://ithelp.ithome.com.tw/articles/10219042

// #endregion

// #region  Fragment

//Fragment就是一個能讓我們一次傳遞多個元素、又不用在最外層包實體DOM元素的工具
// const testFunction =()=> {
//   return( 
//       <React.Fragment>
//           <button> 大家好 </button>
//           <h1> 我不好 </h1>
//       </React.Fragment>
//   );
// }
// 代替 div ？

//import React,{Fragment} from 'react';
//可以省︰
// const testFunction =()=> {
//   return( 
//       <Fragment>
//           <button> 大家好 </button>
//           <h1> 我不好 </h1>
//       </Fragment>
//   );
// }

//演化成最簡潔的
// const testFunction =()=> {
//   return( 
//       <>
//           <button> 大家好 </button>
//           <h1> 我不好 </h1>
//       </>
//   );
// }

// 所以當初我們在講JSX只能傳遞一個元素，正確的說法應該是只能傳遞一個元素或是一個Fragment

// #endregion

// 裡面有很多寫好的「插件？」
// https://github.com/brillout/awesome-react-components

// 有空再研究一下…

reportWebVitals();
