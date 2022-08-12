import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThridPage";
import FourthPage from "./FourthPage";
import Layout from "./Layout";

// 不加 exact 的話，會只抓到第一個，
// 因為預設只會抓第一個乎合的結果

export default function AgentR2() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<FirstPage />} />
          <Route exact path="/2" element={<SecondPage />} />
          {/* <Route path="/2" render={()=>{return( <SecondPage id={5}/> )}}/> */}
          {/* 傳參數的方法也不成功 */}
          <Route path="/3/:a?" element={<ThirdPage />} />
          {/* 第三個參數可有可無這點不成功… */}
          <Route path="/4/:a" element={<FourthPage />} />
          {/* 我懷疑這根本不是抓參數就是了… */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}