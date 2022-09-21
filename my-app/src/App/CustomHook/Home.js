import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((res_j) => setData(res_j)); ////res_j是上方己處理好的內容
  }, []); //不監察的useEffect表示它只做開頭的那一次嗎？

//取回來的資料長這樣︰    
//     [
//        {
//          "userId": 1,
//          "id": 1,
//          "title": "delectus aut autem",
//          "completed": false
//        },
//             ...
//      ]
  return (
    <>
      {data && //有data才做迴圈
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>; //key值好像沒有功用？但這是慣例嗎？凡Loop出來的元件都有Key?
        })}
    </>
  );
};

export default Home;
