import logo from './logo.svg';
import './App.css';
//import React from 'react'; // <--記得要寫？
import React,{Component} from 'react'; // 用作 Class Component ， 也為了展示 Debug
//import React, { useState } from 'react'; // 為了 useState ( Function Component )
import Baby from './PassValueAcrossGen/Baby'// 實作 componentWillUnMount 

// #region 檔案原生的示範

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

  );
}

// #endregion 原生的

// props = 自訂元素 中的 自訂Attribute 

// #region Function Component 基本

//      #region 1. 傳文字

// function App(props){ 
//   return(
//        <button>{props.name}</button>
//   );
// }

//      #endregion 1

//      #region 2. 傳文字和方法

// function App(props){ 
//   return(
//     <button onClick={props.handleClick}>{props.name}</button>
//   );
// }

// #endregion

//      #region 3. 傳children

// function App(props){ 
//   return(
//     <button>{props.children}</button>
//   );
// }

// #endregion

// #endregion

//---------------------------
// Function component 為上述
// class component 為下述 (extends Component) 上方的引用也要改成︰import React,{Component} from 'react';
//---------------------------

// #region Class Component 基本 

//      #region 1. extends Component 和 使用render方法

// class App extends Component{ //繼承Component類別
//   render(){ // 以render 來 包住 return
//     return(
//       <div>
//         helloWorld
//       </div>
//     );
//   }
// }

// #endregion 1

//      #region 2. 傳 props 值

// class App extends Component{
  
//   // constructor(props) { // 加入建構子以及props參數?
//   //     super(props); 
//   // }

//   // 雖然教材提到要constructor，但是我封了它，程式才能正常跑？ Warning 如下︰
//   // A "useless constructor" is one that the linter is warning you can safely remove from the code,
//   // because it doesn't accomplish anything - 
//   // if all you have is a super call (with the same argument the class is created with), 
//   // the constructor doesn't do anything useful, because classes will already call super automatically
//   // 出處︰https://stackoverflow.com/questions/63609257/what-is-a-useless-constructor-in-react
   
//   render(){

//     return(
//       <button onClick={this.props.handleClick}>{this.props.name}</button>
//     );

//   }
// }

// #endregion 2

//      #region 3. 對應 index.js 的 3，作失敗的例子。

// class App extends Component{
//   render(){
//     return(
//       <button onClick={this.props.handleClick}>{this.props.name}</button>
//     );
//   }
// }

// #endregion

//      #region 4. 用 class 自己本身的方法去改值，而不是用index.jx傳入的參數來改值

//      ??但是方法的值，又如傳入呢？使用state:

// class App extends Component{

//   constructor(props) { 
//      super(props);

//      //this.name="舊的名字"; // 加入name? 但這個只能設，不能改

//      // 下面的加起來才能改 : 

//      this.changeName=this.changeName.bind(this); //方法要綁定自己的方法 <-- 我就當是宣告的一部份好了，雖然有點冗餘。
//      this.state=
//      {
//       name:"舊的名字" // <-or 取 props.name 作初始值 
//      }

//   }

//      定義changeName

//   changeName(newName){       
//     //this.name=newName;     // 行不通
//     //console.log("hey")     // <- 證明只會被跳過

//     this.setState({name:"新的名字"})

//   }
   
//      用 this.state.name

//   render(){
//     return(
//       <button onClick={this.changeName}>{this.state.name} </button>
//     );
//   }

// }
  
// #endregion 4

//      #region 5. 承上的多一個練習 (比較清淅)

// class App extends Component{

//   constructor(props) {
//     super(props);
//     this.state={
//       percent:"30%"
//     }
//     this.changePercent=this.changePercent.bind(this); //綁定changePercent
//   }

//   changePercent(){ //加入changePercent函式

//     if(this.state.percent === "30%")
//       this.setState({percent:"70%"})
//     else
//       this.setState({percent:"30%"})
//   }

//     render(){
//         return(
//           <div>
//             <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
//               <div className="progress-bar" style={{backgroundColor:"#fe5196",width:this.state.percent,height:"100%",borderRadius:"10px"}}></div>
//             </div>
//             <button onClick={this.changePercent}>30% <code>-</code>70% </button>
//           </div>
//         );
//     }
// }

// #endregion 5

//      #region 6. state 的特性 (沒有對應去跑看看的例子，只是用來看看)

// class App extends Component{

//   constructor(props) {
//     super(props);
//     this.state={
//       percent: 20,
//       mounted: false, // 存在但沒有被寫到的state 不會被移除
//       // 除非用setState移除state

//       // 對於state中的多屬性的物件，不能只修改單一屬性
//       styleData:{
//         width: "30%",
//         height: "50%"
//       }     

//     }

//     this.changePercent=this.changePercent.bind(this); //綁定changePercent
  
//   }

//   changePercent(){ 

//     this.setState({percent:"70%",counter:0});
//     // counter 會自動建立為一個 state 的值
//     // 如果在 constructor 連 state 的宣告都沒寫，就會自動建立 state。

    
//     // 對於state中的有多個屬性的物件，不能只修改單一屬性
//     //  this.setState({ styleData:{width:"70%"} });

//     // 這個把 height: "50%" 這個 styleData 抹去。
//     // 如果想要只更改state內的物件的單一屬性並保留其他屬性，可以這樣寫:
//     // this.setState({ 
//     //   styleData:{
//     //       width: "70%",
//     //       height: this.state.styleData.height
//     //   } 
//     // });

//     //setState通常需要花一點細微的時間，雖然不會察覺，但是由於這點加上js的非同步特性，
//     //在setState後面用到state的函式「常常會拿到改變前的state值」????

//     // 這個時候可以搭配setState預設的第二個參數。:
//     // setState的第二個參數可有可無，它是個function，當state被設定完之後，就會執行

//     // this.setState(
//     //   {percent: 70}, // 第一個參數是設定的動作
//     //   ()=>{console.log(this.state.percent);} // 第二個參數是一個會執行的動作
//     // ) 
//     // 這樣會改了值之後，再印出70來。<-- 作用是來確定這件事情已經做完，不會拿到之前的值嗎？

//   }

//   deleteState()
//   {
//     this.setState({mounted: undefined});
//   }

//   createState()
//   {
//     let counter=5;
//     this.setState({counter});
//     /* 如果目前的state有counter,把它指定為5。如果沒有，則創造一個叫counter的state */
//   }

//     render(){
//         return(
//           <div>
//             <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
//               <div className="progress-bar" style={{backgroundColor:"#fe5196",width:this.state.percent,height:"100%",borderRadius:"10px"}}></div>
//             </div>
//             <button onClick={this.changePercent}>30% <code>-</code>70% </button>
//           </div>
//         );
//     }
// }

// #endregion 6

// #endregion  Class Component 基本

//---------------------------
// Class component 使用 useState 為下述
//---------------------------

// #region  Function Component  (useState)

// #region 1. useState  

// import React, { useState } from 'react'; 上方 import

// 注意︰width:percent 和 onClick={()=>{changePercent("70%")}} 

// const App=()=>{

//     const [percent, changePercent] = useState("30%");//<- 設值兼定義方法

//     return( //  不用 render 方法
//       <div>
//         <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
//           <div className="progress-bar" style={{backgroundColor:"#fe5196",width:percent,height:"100%",borderRadius:"10px"}}></div>
//         </div>
//         <button onClick={()=>{changePercent("70%")}}>轉換百分比 </button>
//       </div>
//     );

// }

// #endregion 1

// #endregion Function Component-----------

// #region 2. 展示 Debug

// class App extends Component{

//     constructor(props) {
//       super(props);
//       this.state={
//         percent:"30%"
//       }
//       this.name="舊的名字"; // 這並不是this.props.name 要小心搞混了。
//       this.changePercent = this.changePercent.bind(this);
//     }
  
//     changePercent(){
//       this.setState({percent:(this.state.percent==="70%")?"30%":"70%"}); // 在setState之中 給簡單的方法 來回傳值
//       console.log("hey");
//     }
  
//     render(){
//         return(
//         <div>
//               <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
//                 <div className="progress-bar" style={{backgroundColor:"#fe5196",width:this.state.percent,height:"100%",borderRadius:"10px"}}></div>
//               </div>
//               <button onClick={this.changePercent}> {this.props.children} </button>
//               {this.props.name}
//         </div>
//         );
//     }

// }

// #endregion 2

// #region 1. fetch

// class App extends Component {

//     constructor(props) {
//       super(props);
//       this.state={
//         repoName: null
//       }
//       this.handleClick=this.handleClick.bind(this);
//     }
  
    
//     handleClick(){

//         //fetch 的用法︰(沒有傳值，只是取值)

//       fetch( 'https://api.github.com/users/jserv/repos',{method:"GET"})
//       .then(res => res.json())
//       .then(data => {
//             /*接到request data後要做的事情*/
//             this.setState({repoName: data[0]['name']});
//       })
//       .catch(e => {
//           /*發生錯誤時要做的事情*/
//           console.log(e);
//       })
//     }
    
//     render() {
                
//                 /* 在 HTML 的元素之中，直接用 javascript 的語法，來判斷簡單的顯示值 */
//                 /* 記得用 {} */
//         return (
//           <div className="App">
//             <div className="data-display">
//               {(this.state.repoName===null)?"目前還有沒有資料":this.state.repoName}
//             </div>
//             <button onClick={this.handleClick}>取得jserv以英文字母排序的第一個repo</button>
//           </div>
//       ) 

//     }
//   };

// #endregion

// #region Class Component 的 生命週期

//      #region 1. 生命週期 getDerivedStateFromProps

// class App extends Component{    /* 假設這個 App 剛出生，是個 Baby。這Baby的媽媽，老公姓Chang */

//      // 生的第一步
//      constructor(props) {
//          super(props);
//          this.state={
//              isRightDad: true  /* 天生都假設它有正確的爸爸 */
//          }
//      }

//      // 生的第二步
//      static getDerivedStateFromProps(props,state){

//          if(props.dad!=="Chang") /* 如果後來initialite時，我們傳入的爸爸參數，他不姓張 */
//              return {isRightDad:false}  /* 那就是不正確的爸爸囉~ */

//      }

//     // 生的第三步
//      render(){     //用 javascript 來判斷，要產出什麼的結果。

//         if(this.state.isRightDad===true)
//             return(
//                 <div>
//                     張小朋友
//                 </div>
//             );
//         else
//             return(
//                 <div>
//                     X小朋友
//                 </div>
//             );

//     }
// }

//      #endregion 

//      #region 2. 生命週期 componentDidMount

// #region 錯誤例子，在 render之中，想去改 return 之後的結果 : 

// class App extends Component{
//   constructor(props) {
//     super(props);
//     this.state={
//         isRightDad: true
//     }
//   }

//   static getDerivedStateFromProps(props,state){
//       if(props.dad!=="Chang")
//         return {isRightDad:false}
//   }
  
//     render(){
//             if(this.state.isRightDad===true)
//                 document.getElementById('msg').innerHTML="張小朋友";
//             else
//                 document.getElementById('msg').innerHTML="X小朋友";
//             return(
//                 <div id="msg">
//                     讀取中
//                 </div>
//             );
//     }
// }

// #endregion

// 想改 render 後的結果 
// (因為有了可以容納結果的DOM，我們再去做fetch，就比較有地方輸入回傳的資料)

// #region 正確的例子︰

// class App extends Component{

//   // 1
//   constructor(props) {
//     super(props);
//     this.state={
//         isRightDad: true
//     }
//   }

//   //2
//   static getDerivedStateFromProps(props,state){
//       if(props.dad!=="Chang")
//         return {isRightDad:false}
//       else
//         return {isRightDad:true} /*任何情況下，都至少有一個回傳，不然瀏覽器上，會有警告。*/
//   }

//   // 4
//   componentDidMount(){
//     if(this.state.isRightDad===true)
//         document.getElementById('msg').innerHTML="張小朋友";
//     else
//         document.getElementById('msg').innerHTML="X小朋友";
//   }

//   // 3
//     render(){
//             return(
//                 <div id="msg">
//                     讀取中
//                 </div>
//             );
//     }
// }
// #endregion 

// #endregion 2

//      #region 3. componentDidMount  fetch  Loading

// 在下面的範例，我們定義一個模擬ajax的函式ajaxSimulator()，模擬用3秒從資料庫取得資料:

// class App extends Component{

//   // 1
//   constructor(props) {
//     super(props);
//     this.state={
//         isRightDad: true,
//         isGetData: false, //<----這個是取到資料了沒的標誌
//         Mom: "" //<-- 一開始沒有媽媽資料
//     }
//     this.ajaxSimulator=this.ajaxSimulator.bind(this)
//   }

//   // 4.1 模擬︰要得到 媽媽是誰這個資料，要三秒鐘。順便告訴頁面說，可以關掉 Loading 這個牌子了。
//     ajaxSimulator(){
//         setTimeout(()=>{this.setState({isGetData:true, Mom:"小美"})},3000)
//     }

//   // 2.
//   static getDerivedStateFromProps(props,state){
//       if(props.dad!=="Chang")
//         return {isRightDad:false}
//   }

//     // 4.
//     componentDidMount(){
//         this.ajaxSimulator();
//     }

//     // 3. / 5.
//     render(){
       
//         if(this.state.isGetData===false)       
//             return(
//                 <div id="msg">{ (this.state.isRightDad === true) ? '張小朋友' : 'X小朋友' } 的媽媽是: Loading...</div>
//             );        
//         else
//             return(
//                 <div id="msg">{ (this.state.isRightDad === true) ? '張小朋友' : 'X小朋友' } 的媽媽是: {this.state.Mom}</div>
//             );                
//     }


// }

// #endregion 3 

//      #region 4. componentDidMount  Opening Animation

// class App extends Component{

//   // 1
//   constructor(props) {
//     super(props);
//     this.state={
//         isRightDad: true,
//         isGetData: false, //<----這個是取到資料了沒的標誌
//         Mom: "" //<-- 一開始沒有媽媽資料
//     }
//     this.ajaxSimulator=this.ajaxSimulator.bind(this) // 假設要取媽媽資料的方法
//     this.scrollTo=this.scrollTo.bind(this);///<----- 註冊右移的方法
//   }

//   // 4.2 右移的方法
//   scrollTo(){
//     /* 讀取 container元素的scrollLeft */
//     let scrollLeft=document.getElementById('container').scrollLeft; 

//     if(scrollLeft<300){
//         /* 修改 container元素的scrollLeft */
//         document.getElementById('container').scrollLeft=scrollLeft+5;
//         setTimeout(this.scrollTo,20);  // 這個方法，是每 20 毫秒再呼叫自己一次，可以和下方的單次取資料對比
        
//         // 對比的不同之處是︰這是個Recursive(自己叫自己)。我每次想要執行完這個function，都要等 20 秒。
//         // 等完了，卻又叫自己一次。直到 scrollLeft=300 這個方法，就不會再叫自己。那才執行完了。

//     }
// }

//   // 4.1 模擬︰要得到 媽媽是誰這個資料，要三秒鐘。順便告訴頁面說，可以關掉 Loading 這個牌子了。
//     ajaxSimulator(){
//         setTimeout(()=>{this.setState({isGetData:true, Mom:"小美"})},3000)
//     }

//   // 2.
//   static getDerivedStateFromProps(props,state){
//       if(props.dad!=="Chang")
//         return {isRightDad:false}
//       else
//         return {isRightDad:true}
//   }

//   // 4.
//   componentDidMount(){
//       this.ajaxSimulator(); //4.1
//       this.scrollTo(); // 4.2注意，因為它們不是 Promise 的關係，所以還沒等媽媽的資料撈出來，右滑的事情就先做完了！
//   }

//     // 3. ( 在收到 4.1 的State change 時，會再 render 一次，但是 componentDidMount 就不會再做了。)
//     render(){

//         if(this.state.isGetData===false)       
//             return(
//               <div>
//                 <div id="msg">{ (this.state.isRightDad === true) ? '張小朋友' : 'X小朋友' } 的媽媽是: Loading...</div>
//                 <div id="container" style={{width:"400px",overflowX:"scroll"}}>
//                     <div id="left"  style={{width:"700px",fontSize:"10px",textAlign:"center"}}>
//                         {" 媽媽~~~你在哪？~~~你在哪？~~~你在哪？~~~你在哪？~~~你在哪？"}
//                     </div>       
//                 </div> 
//             </div>   
//             );        
//         else
//             return(
//                 <div id="msg">{ (this.state.isRightDad === true) ? '張小朋友' : 'X小朋友' } 的媽媽是: {this.state.Mom}</div>
//             );    

//     }


// }

// #endregion 4

//      #region   5-6. 不用componentWill「Un」mount的對比範例

// class App extends Component{
//     constructor(props) {
//       super(props);
//       this.state={
//         isBorn:true
//       }
//       this.handleClick=this.handleClick.bind(this);
//       this.sendBaby=this.sendBaby.bind(this);
//     }
  
//     handleClick(){
//       this.setState({isBorn:!this.state.isBorn})
//     }
  
//     sendBaby(){
//       if(this.state.isBorn)
//         return <Baby/>
//     }

//       render(){
//           return(
//             <div>
//               <button onClick={this.handleClick}>
//                   {(this.state.isBorn===true)?"收回":"生出"} 
//               </button>
//                 {this.sendBaby()}
//             </div>
//           );
//       }
//   }



// #endregion   5 6

// #endregion

// 防呆用而已，不用在意。要跑上面的例子時，記得拿走。
//class App extends Component{};

// 永遠都在的︰(沒有export就沒辨法被import)
export default App;
