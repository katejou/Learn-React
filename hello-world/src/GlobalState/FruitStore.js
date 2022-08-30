import React, { useState, useReducer } from 'react';
import Amy from './Amy.js';
import Peter from './Peter.js';
import { FruitContext } from "./GlobalFruitContext.js";

function FruitStore() {
    
    //const [apple, setApple] = useState(10); //<--以普通的local state 稍後塞給 GlobalFruitContext
    
    // + 設定一個改變 GlobalFruitContext 值的方法，稍後一併塞給 GlobalFruitContext
    function reducer(amount, action) {
        switch (action.type) {
            case 'buy': //客戶的買
                return amount - action.value;
            case 'sell': //商品的進貨
                return amount + action.value;
            default:
                throw new Error();
        }
    }
    const [apple, appleDispatch] = useReducer(reducer, 10);  //在這裡宣告改變全域值的方法  
    // useReducer 是設定好的涵式，第一個變數是改變的方法，第二個是初始值。
    
    // Amy 和 Peter 都會隱而不宣的，得到這個方法。

    return (
        <>
            <div className="FruitStore">目前水果店有 [ {apple} ] 個蘋果</div>
            {/* 下面那一行，是把這裡的 apple 塞給 FruitContext ，成為一個全域的值。*/}
            <FruitContext.Provider value={{ 
                appleContext: apple ,
                setAppleByDispatch: appleDispatch // 將方法，也宣告為全域的。
            }} >
                <Amy />
                <Peter />
            </FruitContext.Provider>
        </>
    );


}



export default FruitStore;