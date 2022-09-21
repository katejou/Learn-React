import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res_j) => setData(res_j)); //res_j是上方己處理好的內容
  }, [url]);

  return [data];
};

export default useFetch;
