import React from 'react';
import {Link} from 'react-router-dom';

const SecondPage = () => {
    const StyleSheet = {
        width: "100vw",
        height: "100vh",
        backgroundColor: "#08D9D6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    }
    return (
        <div style={StyleSheet}>
            {/* <nav>
                <Link to="/">點我連到第一頁</Link>
                <Link to="/2" style={{ marginLeft: "20px" }}>點我連到第二頁</Link>
                <Link to="/4/123" style={{ marginLeft: "20px" }}>點我連到第四頁</Link>
            </nav> */}
            <h1 style={{ color: "white", fontFamily: "Microsoft JhengHei" }}>我是第二頁</h1>
            {/* <p>{this.props.id}</p> */}
        </div>
    )
}

export default SecondPage;