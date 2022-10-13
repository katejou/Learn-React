import { useCallback, useState } from "react";
// Usage
function U_Toggle_App() {
  // Call the hook which returns, current value and the toggler function
  const [isTextChanged, setIsTextChanged] = useToggle();
  const [isTextChanged_2, setIsTextChanged_2] = useToggle();
  
  //多個按鈕，應該是只不相干的吧？對，都是各不相干的。
  return (
    <>
      <button onClick={setIsTextChanged}>
        {isTextChanged ? "Toggled" : "Click to Toggle"}
      </button>
      <button onClick={setIsTextChanged_2}>
        {isTextChanged_2 ? "Toggled2" : "Click to Toggle2"}
      </button>
    </>
  );
}
// Hook
// Parameter is the boolean, with default "false" value
const useToggle = (initialState = false) => {  //第一次看到這種預設參數的方法。
  // Initialize the state
  const [state, setState] = useState(initialState);

  // 這個方法，用 useCallback 包起來，以防它日後要用來傳下去，能節省效能。
  // Define and memorize toggler function in case we pass down the component,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback(() => setState((state) => !state), []);
  // 第二個參數[]，表明它只在「產生」時，執行一次。
  // 但在這個案例中，顯然不只一次。
  // 所以它的「產生」是指執行/呼叫這個方法的時候。(我猜的。)

  return [state, toggle]; //這個包裝過後的 useState 方法，再回傳回去。
};



export default U_Toggle_App;