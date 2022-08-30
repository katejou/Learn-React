import React from "react";

// React.createContext 是建立一個 Global State
export const FruitContext = React.createContext({
    appleContext: "abc" //<-- 這個值會被改變，在FruitStore 呼叫並利用它的時候。所以塞什麼都可以。
    //appleContext: 0
})

// 這裡不用寫，改變這個全域值的方法…
// 在取用這個值的FruitStore才輸入這個方法…
// 好處是可以確保使用的「人」的範圍？