import React from 'react';
import useRate from './CustomHook.js'; //<--這個是我們自訂的Hook

const ShareCheer=(props)=>{
    const score=useRate(props.value); //<--分享自訂Hook，做不一樣的事。
    return (
        <div>
            <h3>分享加油器</h3>
            <div>目前分數{score}<br/>還有沒有! 再來{88-score}分!</div>
            <button value={Number(props.value)+1} onClick={props.onClick}>加1分</button>
            <button value={Number(props.value)+7} onClick={props.onClick}>加7分</button>
            <button value={Number(props.value)+10} onClick={props.onClick}>加10分</button>
            <button value={0} onClick={props.onClick}>0分</button>
        </div>
    )
}

export default ShareCheer;