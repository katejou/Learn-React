import { useEffect, useState } from "react";

function useLogger(value) {
  useEffect(() => {
    var content = value.replace("TYPE:","");
    console.log(content);
  }, [value]);
}

function useCustomState(initValue) {
  const [value, setValue] = useState("TYPE:" + initValue);
  return [value, setValue];
}

function CLogger() {
  const [name, setName] = useCustomState(""); //代替 useState
  useLogger(name); //代替useEffect！

  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
}

export default CLogger;
