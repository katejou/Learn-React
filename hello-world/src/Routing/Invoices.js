// #region 1-4

// export default function Invoices() {
//     return (
//       <main style={{ padding: "1rem 0" }}>
//         <h2>Invoices</h2>
//       </main>
//     );
//   }

// #endregion

// #region 5

// import { Link, Outlet } from "react-router-dom";
// import { getInvoices } from "./Data.js"

// export default function Invoices() {
//   let invoices = getInvoices(); // 引用另外一個檔案的方法
//   return (
//     <div style={{ display: "flex" }}>
//       <nav
//         style={{
//           borderRight: "solid 1px",
//           padding: "1rem",
//         }}
//       >
//         {/* 這裡開始用迴圈做酷酷的事了！ */}
//         {invoices.map((invoice) => (
//           <Link
//             style={{ display: "block", margin: "1rem 0" }}
//             to={`/invoices/${invoice.number}`}
//             key={invoice.number}
//           >
//             {invoice.name}
//           </Link>
//         ))}
//         {/* 左手邊會多一條目錄 */}
//       </nav>
//       <Outlet /> 
//       {/* 為了再顯示多一個子頁(右邊)，記得加這個！ Outlet */}
//     </div>
//   );
// }

// #endregion

// #region 6 NavLink 可變色的動態 Link

// 對比一般的Link 而言，就是可以做這樣的事︰
// normal string
//<NavLink className="red" />
// function
//<NavLink className={({ isActive }) => isActive ? "red" : "blue"} />
/* isActive 這個參數是 NavLink 自帶的吧？ 並沒有特別的輸入 */

// import { NavLink, Outlet } from "react-router-dom";
// import { getInvoices } from "./Data";

// export default function Invoices() {
//   let invoices = getInvoices();
//   return (
//     <div style={{ display: "flex" }}>
//       <nav
//         style={{
//           borderRight: "solid 1px",
//           padding: "1rem",
//         }}
//       >
//         {/* 使用動態的NavLink而不是靜態的Link，可以和上方的迴圈做對比。 */}
//         {/* 分別是可以在style之中設定顏色？ */}
//         {invoices.map((invoice) => (
//           <NavLink
//             style={({ isActive }) => {
//               return {
//                 display: "block",
//                 margin: "1rem 0",
//                 color: isActive ? "red" : "",
//               };
//             }}
//             to={`/invoices/${invoice.number}`}
//             key={invoice.number}
//           >
//             {invoice.name}
//           </NavLink>
//         ))}
//       </nav>
//       <Outlet />
//     </div>
//   );
// }

// #endregion

// #region 7 在目錄列之中，加一個動態的 Filter

import {
  NavLink,
  Outlet,
  useSearchParams,
} from "react-router-dom";
// useSearchParams <--是重點
import { getInvoices } from "./Data";

export default function Invoices() {
  let invoices = getInvoices(); // 取得所有的 invoice
  let [searchParams, setSearchParams] = useSearchParams();  // 設定這個變數
  //but stores and sets the state in the URL search params instead of in memory.

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {/* 設定一個可以輸入 filter 條件的 input */}
        <input
          value={searchParams.get("filter") || ""} //由於下方更新了，就將它放入這個 value
          onChange={(event) => {
            let filter = event.target.value; //每打一個字的時候
            if (filter) {
              setSearchParams({ filter }); //都變成URL後的︰?filter=XXX (這個方法就觸發更新了，由頭開始render)
            } else {
              setSearchParams({});
            }
          }}
        />

        {invoices // 從取得的所有 invoice 之中，做過濾
          .filter((invoice) => { // 開始迴圈
            let filter = searchParams.get("filter");
            // filter的條件是從searchParams.get("filter")來的
            if (!filter) return true;// 沒有的話，就不過濾
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
            // 如果這個name是由filter的條件開始的，回傳 true，反之回 false
          })
          .map((invoice) => ( // 如果上面回傳的是 true，才開始做下面的生成︰
            <NavLink
              style={({ isActive }) => ({
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              })}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}

// #endregion