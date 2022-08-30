import React, { useState, useEffect } from "react";

function Hook_useEffect() {
  const [count, setCount] = useState(0);



  // 相似於 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // <-- 我記它作連帶關係，如同 Vue 的compute
    // 使用瀏覽器 API 更新文件標題
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Hook_useEffect;
