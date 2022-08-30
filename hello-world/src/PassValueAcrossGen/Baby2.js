/* eslint-disable react-hooks/exhaustive-deps */
// 不加上面那一行，監控 props 的那一行，不佑道為什麼有紅線，功能是都沒影響啦。
import React, { useState, useEffect } from 'react';

// 和隔壁的Baby(class component)對比
// 這個是 function compoent
const Baby2 = (props) => { //這個 Baby2 的方法，接收 props 的參數

    /* 把state變成useState */

    const [isGetData, setGetData] = useState(false);
    const [Mom, setMom] = useState("");
    const [isRightDad, setRightDad] = useState(false);
    const [changeDad, setchangeDad] = useState(false);

    // useState 是什麼？
    // 官網解釋︰const [state, setState] = useState(initialState);
    // 簡化宣告變數，設定初始值及其更改變數的方法。

    /* 把class 的 member function改成「function中的function」 */

    // 單寫這個方法，在孩子出生後，也不會被自動觸發去找媽媽。
    const ajaxSimulator = () => {
        setTimeout(() => {
            setGetData(true);
            setMom("May");
        }, 3000)
    }
    // 它放的位置是有講究的，不能放在 If 後面
    useEffect(() => {
         /* 下面是 componentDidMount+componentDidUpdate (因為它沒有加入監控的元素)*/
        ajaxSimulator(); // <-- 這個不只會跑一次，雖看起來沒有差別，因為已經取得 May，再改為May
        document.getElementById("talk").append('哇!')
        return (() => {/* 下面是 componentWillUnmount */
            document.getElementById("talk").innerHTML = "";
        })
        // 在這個小孩被收回去的時候，把他說過的都一起消失
        // 不加的話，會一直哇!哇!哇!哇!哇!

    }, []);

    // 單寫這個方法，會無法召喚多次。只有第一次生成才會跑。
    // 為什麼加了下面這一行就不紅線了呢？奇怪。
    const checkDad = () => {
        if (props.dad === "Chang")
            setRightDad(true)
        else
            setRightDad(false)
    }

    // 可以放多個 UseEffect 是這個意思
    useEffect(() => {

        if (changeDad === false){
            checkDad()
            setchangeDad(true)
        /* 上面是 componentDidMount  (初次)*/ 
        }
        else{
            checkDad()
            document.getElementById("talk").append('我換了個爸爸！')
        }
        /* 上面是 componentDidUpdate (非初次之後，)*/ 
        
    }, [ props.dad ]); /* 加入監控的props.dad */

// 注意︰App中的換爸爸按鈕，不會觸發「媽媽的讀取」，因為isGetData沒有在監察之中。
// 而且「讀取媽媽的方法」ajaxSimulator() 也沒有放進來。
// 這就是為什麼 useEffect 要分開多個。

if (isRightDad === false)
    return (
        <div>我爸是老王</div>
    );
else if (isGetData === false)//是生父，就去找媽媽，但還沒找到
    return (
        <div id="msg">我爸是正確的張先生，媽媽讀取中…</div>
    );
else// 找到媽媽了。
    return (
        <div id="msg">我爸是正確的張先生，張太太是{Mom}</div>
    );

    // 這個方法中，唯一個If else，可能是因為涉及return ，所以分開多個if else 就會出錯。

}
export default Baby2;