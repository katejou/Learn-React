import React,{useState} from 'react';
import ProgressDIY_func from './ProgressDIY_func'

const Agent_func=()=>{
    const [value,setValue]=useState(10);
    return(
      <ProgressDIY_func value={value} onClick={(e)=>{setValue(e.target.value)}}/>
    );
    // 把這個 value 和 setValue 的方法放在「外面」，要將OnClick方法在這裡設定嗎？
}
export default Agent_func;