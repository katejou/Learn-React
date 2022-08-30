
// #region 1. 這個只回單頁，沒有Routing功能
// function RApp(){ 
//   return(
//        <h1>第一頁</h1>
//   );
// }
//export default RApp;
// #endregion

// #region 2. 這個只是做到影響URL，Component的傳達，還是在Index的那一邊。

// import { Link } from "react-router-dom";
// export default function RApp() {
//     return (
//       <div>
//         <h1>這是目錄頁</h1>
//         <nav
//           style={{
//             borderBottom: "solid 1px",
//             paddingBottom: "1rem",
//           }}
//         >
//           <Link to="/invoices">Invoices</Link> |{" "}
//           <Link to="/expenses">Expenses</Link>
//         </nav>
//       </div>
//     );
//   }

// #endregion

// #region 3- Nesting 
import { Outlet, Link } from "react-router-dom";

export default function RApp() {
  return (
    <div>
      <h1>目錄頁</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
      {/* 這個Outlet是重點，RApp本來只是進來的目錄頁，用來控制URL，和分頁沒有大小分 */}
      {/* 而多了這個Outlet，指明了它，現在是其他分頁的外套 */}
      {/* 要配合index使用 */}
    </div>
  );
}

// #endregion



