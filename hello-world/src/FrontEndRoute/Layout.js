import React from 'react';
import {Link} from 'react-router-dom';
import "./Layout.css";

const Layout=(props)=>{

    // 這個是在做引用 CSS 檔
    // const StyleSheet={
    //     width:"100vw",
    //     height:"100vh",
    //     backgroundColor:"#FFFFF",
    //     //下方那個方法是不成功的…
    //     //backgroundColor:(props.location.pathname==="/")?"#FF2E63":"#08D9D6",
    //     display: "flex",
    //     alignItems:"center",
    //     justifyContent:"center",
    //     flexDirection:"column"
    // }
    //引用了 ./Layout.css 後，可以把const StyleSheet={} 收走︰

    return(
        // style={StyleSheet} 也收走原本在 div 中的這個屬性
        <div className="Layout" >
            <nav>
                <Link to="/">點我連到第一頁</Link>
                <Link to="/2" style={{marginLeft:"20px"}}>點我連到第二頁</Link>
                {/* 傳參數在AgentR2 */}
            </nav> 
            {props.children}
        </div>
    );
}
export default Layout;