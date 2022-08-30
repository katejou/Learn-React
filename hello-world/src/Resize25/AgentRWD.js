import React from 'react';
import useRWD from './useRWD';

const AppRWD=()=>{

    const device=useRWD();

    if(device==="PC")
      return(  <h1 style={{color:"#354458",fontFamily:"Microsoft JhengHei"}}>電腦</h1>  );
    else if(device==="tablet")
      return(  <h1 style={{color:"#3a9ad9",fontFamily:"Microsoft JhengHei"}}>平板</h1>  );
    else
      return(  <h1 style={{color:"#29aba4",fontFamily:"Microsoft JhengHei"}}>手機</h1>  );

}

export default AppRWD;