import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import FirstPage from "./FirstPage";
//import SecondPage from "./SecondPage";

// 記得要先在這個專案的路徑︰ npm i react-router-dom

//在react-router-dom中，最常使用的是這兩種router介面:
//1.    HashRouter: 頁面路徑最前面會有個「#」，換url時「不會」發送request。
//2.    BrowserRouter: 頁面路徑不會有井字，但換url時「會」發送request。
// 簡單來說，由於#是用來判斷是否要發送request的工具，
// 反言之如果要使用BrowserRouter，server必須要有對應的response
// (最簡單的方法就是要請後端幫你設定好除了api以外的request都回傳你的index.html
// (要請到後端的話…不如就加個index就好？)
// 因為此系列我們沒有要講後端，所以我們這邊使用HashRouter

const AgentRoute = () => {
    return (
        <HashRouter>
            <Route path="/" component={FirstPage}/>
        </HashRouter>
    );
}

export default AgentRoute;