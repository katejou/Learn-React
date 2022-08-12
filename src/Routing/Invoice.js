// import { useParams } from "react-router-dom";
// // // 這個官網的實作，我是從useParams的紅線之中，指引我到官網學習的。
// // // 我感覺這些技術變化得太快，所以紅線其實是很有用的東東。
// export default function Invoice() {

//     let params = useParams(); //這裡接收由URL傳來的參數
//     return (
//         <h2>Invoice: {params.invoicesId}</h2>
//     ); //這裡使用

// }

//**********上面是只顯示，下面是有getInvoice***********************************************

import { useParams } from "react-router-dom";
import { getInvoice } from "./Data";

export default function Invoice() {
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoicesId, 10));
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
  );
}