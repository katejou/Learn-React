import React from 'react';

const ThirdPage=()=>{
    const StyleSheet={
        width:"100vw",
        height:"100vh",
        backgroundColor:"#FCB463",
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
    }
    return(
        <div style={StyleSheet}>
            <h1 style={{color:"white",fontFamily:"Microsoft JhengHei"}}>我是第三頁，我可以要參數</h1>
        </div>
    )
}

export default ThirdPage;