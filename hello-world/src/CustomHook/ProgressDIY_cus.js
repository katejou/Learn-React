
import useRate from './CustomHook.js'; //<--這個是我們自訂的Hook
import React from 'react';

const ProgressDIY_cus=(props)=>{

    const percent=useRate(props.value); //接收上層，給下層的自訂Hook
    // 這個Recursive的方法，可以用在不同的 function component
    // 我覺得 Hook 就是React的「預設方法」例如 useState
    
    return(
      <div>
        <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
          <div className="progress-bar" style={{backgroundColor:"#fe5196",width:percent.toString()+"%",height:"100%",borderRadius:"10px"}}></div>
        </div>
        目前比率: {percent}%
        <br/>
        <button value={90} onClick={props.onClick}>增加比率至90</button>
        <br/>
        <button value={10} onClick={props.onClick}>減少比率至10</button>
      </div>
    )

    // onClick 改了 props.value > 觸動了 useRate > 持續(遞迴)地改了 percent
}

export default ProgressDIY_cus;