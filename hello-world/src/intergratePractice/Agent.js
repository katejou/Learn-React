import React,{useState} from 'react';
import ProgressDIY from './ProgressDIY'

const Agent=()=>{
    const [value,setValue]=useState(10);
    return(
      <ProgressDIY value={value} onClick={(e)=>{setValue(e.target.value)}}/>
    );
    // 把這個 value 和 setValue 的方法放在「外面」，要將OnClick方法在這裡設定嗎？
}
export default Agent;