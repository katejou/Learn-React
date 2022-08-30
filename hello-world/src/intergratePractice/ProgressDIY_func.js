import React, { useState, useEffect, useRef } from 'react';
// 引入useState、useEffect、useRef，不用引入component

const ProgressDIY_func = (props) => { // 記得參數要有props，export也要記得寫。

    const [percent, setPercent] = useState(10); //和 component 的 state 是同一回事

    //在開始加入useEffect前，我們要思考的事情是:
    //我目前要實現的事情中，有哪些事情是依賴「監控相同參數的變動」? 是不是第一次要執行?

    //1.第一次渲染時的初始值設定 (只有第一次要執行)
    //2.由長變短漸變。(依賴props.value和percent，但第一次不能執行)
    //3.由短變長漸變。(依賴props.value和percent，但第一次不能執行)

    //我們2和3一定可以放在同一個effect中。
    //又因為任何effect第一次都會執行，所以只要想辦法在這個effect中分隔出「第一渲染、非第一次渲染」，
    //就能把這三件事都放在同一個effect中。

    const tm = useRef(); // 這裡也是要用useRef去創造用來存setTimeout的變數。
    const tmTwo = useRef();

    const mounted = useRef(); //預設為false?
    useEffect(() => {
        if (!mounted.current) { // = componentDidMount(第一次做)
            mounted.current = true; // .current 是從哪來的？反正這個 useRef 的 Hook 就是長這樣… 
            setPercent(props.value); //第一次，我接收外面的值value作為這裡的percent
        }
        else {  // = componentDidUpdate(多及無限次)

            if (percent > props.value) { //按鈕改了props.value，percent是目前的逐漸改變。
                if (tm.current) //除了.current 這個東東之外，其他和 Class Component 一樣，(見Progress_alt) 
                    clearTimeout(tm.current)
                tmTwo.current = setTimeout(() => { setPercent(percent - 1) }, 20);
            }
            else if (percent < props.value) {
                if (tmTwo.current)
                    clearTimeout(tmTwo.current)
                tm.current = setTimeout(() => { setPercent(percent + 1) }, 20);
            }

        }
    }, [props.value, percent]); //props.value是初始值，也是 onClick 會去改的。
    // percent 是上面的方法去自己改，改好了要持續render，和 Recursive ，所以也要監察。

    //這部分和function差不多
    return (
        <div>
            <div className="progress-back" style={{ backgroundColor: "rgba(0,0,0,0.2)", width: "200px", height: "7px", borderRadius: "10px" }}>
                <div className="progress-bar" style={{ backgroundColor: "#fe5196", width: percent.toString() + "%", height: "100%", borderRadius: "10px" }}></div>
            </div>
            目前比率: {percent}%
            <br/>
            <button value={90} onClick={props.onClick}>增加比率至90</button>
            <br/>
            <button value={10} onClick={props.onClick}>減少比率至10</button>
        </div>
    )

}
export default ProgressDIY_func; //function component 照樣要寫 export 