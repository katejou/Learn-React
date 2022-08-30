import React, { useState, useEffect, useRef } from "react";

const ComForm = () => {

    const [example1, setexample1] = useState("");
    const [example2, setexample2] = useState("預設值");//defaultValue
    const [example3, setexample3] = useState("預設值");//defaultValue
    const [example4, setexample4] = useState("預設值");//defaultValue + value
    const [example5, setexample5] = useState("在fetch之前");//defaultValue + fetch
    const [example6, setexample6] = useState("在fetch之前");//value + fetch + 沒有 onchange

    // 這我想到，如果有不同按鈕，想幹不同的事，是要分出不同Agent來吧？
    useEffect(() => {
        if (example5 === "Fetching...")
            setTimeout(() => { setexample5("用fetch拿到的資料") }, 2000);
        if (example6 === "Fetching...")
            setTimeout(() => { setexample6("用fetch拿到的資料") }, 2000);
    }, [example5, example6])

    const [example7, setexample7] = useState("");
    const [example8, setexample8] = useState("789");
    const [example9, setexample9] = useState("789");
    const [example10, setexample10] = useState(false);
    const [example11, setexample11] = useState("789");
    const [example12, setexample12] = useState("");


    return (
        <div>
            <p>第一個簡單例子 value</p>
            <input type="text" onChange={(e) => { setexample1(e.target.value) }} />
            <span>&nbsp;&nbsp;</span>
            <span>輸入的影子:{example1}</span>
            <hr />
            <p>defaultValue</p>
            <input type="text" defaultValue={example2} onChange={(e) => { setexample2(e.target.value) }} />
            <span>&nbsp;&nbsp;</span>
            <span>輸入的影子:{example2}</span>
            <hr />
            <p>defaultValue 不是 value</p>
            <input type="text" defaultValue={example3} onChange={(e) => { setexample3(e.target.value) }} />
            <span>&nbsp;&nbsp;</span>
            <span>輸入的影子:{example3}</span>
            <br />
            <button onClick={() => { setexample3("") }}>用按鍵來清空值不會影響到defaultValue &gt; input</button>
            <hr />
            <p>defaultValue + value 都用</p>
            <input type="text" defaultValue={example4} value={example4} onChange={(e) => { setexample4(e.target.value) }} />
            <span>&nbsp;&nbsp;</span>
            <span>輸入的影子:{example4}</span>
            <br />
            <button onClick={() => { setexample4("") }}>用按鍵來清空值會同步影響</button>
            <hr />
            <p>disable的使用</p>
            <input type="text" disabled={true} value={"不能動1"} />
            <span>&nbsp;&nbsp;</span>
            <input type="text" disabled value={"不能動2"} />
            <br />
            <hr />
            <p>defaultValue 會拿不到 fetch 的資料 (value才拿得到)</p>
            <input type="text" defaultValue={example5} onChange={(e) => { setexample5(e.target.value) }} />
            <span>&nbsp;&nbsp;</span>
            <span>輸入的影子:{example5}</span>
            <br />
            <button onClick={() => { setexample5("Fetching...") }}>去Fetch資料回來</button>
            <hr />
            <p>如果綁了 state 在 value 上而沒有綁 onChange ?</p>
            <input type="text" value={example6}
            />
            {/* onChange={(e) => { setexample6(e.target.value) }}/> */}
            <span>&nbsp;&nbsp;</span>
            <span>輸入的影子:{example6}</span>
            <br />
            <button onClick={() => { setexample6("Fetching...") }}>去Fetch資料回來</button>
            <p>還是能夠Fetch來改值，但是 !!!! input 卻鎖住了，不能輸入…(因為value變得不能改？)</p>
            <hr />
            <p>textarea 和 input type="text" 用法一樣</p>
            <textarea value={example7} onChange={(e) => { setexample7(e.target.value) }}></textarea>
            <span>&nbsp;&nbsp;</span>
            <span>輸入的影子:{example7}</span>
            <hr />
            <p>DropDownList select 及預設值不在範圍中，則顯示為第一個</p>
            {/* example8 預設為 789, value={example8} = selected*/}
            <select value={example8} onChange={(e) => { setexample8(e.target.value) }}>
                <option value="123">123</option>
                <option value="456">456</option>
            </select>
            <div>
                目前example8:{example8}
            </div>
            <br />
            <hr />
            <p>DropDownList selected 在 option 之中預設</p>
            <select onChange={(e) => { setexample9(e.target.value) }}>
                <option value="123">123</option>
                {/* <option selected={true} value="456" >456</option> */}
                {/* 和下方的寫法一樣。 */}
                <option selected value="456" >456</option>
            </select>
            <div>
                目前example9:{example9}
            </div>
            <br />
            <hr />

            <p>Radio Select(其中擇一)</p>
            <input type="radio" value="True" checked={example10} onChange={(e) => { setexample10(true) }} />True<br />
            <input type="radio" value="False" checked={!example10} onChange={(e) => { setexample10(false) }} />False
            <div>
                目前example10:{" " + example10}
            </div>
            <br />
            <hr />

            <p>checked可以省略判斷值，預設值不在範圍中，就要不會選</p>
            <input type="radio" value="123" checked={example11 === "123"} onChange={(e) => { setexample11("123") }} />123<br />
            <input type="radio" value="456" checked={example11 === "456"} onChange={(e) => { setexample11("456") }} />456<div>
                目前example11:{" " + example11}
                {/* example11 預設為 789 */}
            </div>
            <br />
            <hr />
            <p>form的subimt要觸發的事件，是用onSubmit去綁定函式</p>
            <form onSubmit={setexample12}>
                <input type="submit" value="Submit" />
            </form>
            <p>但是後端要怎樣去抓到那些值，我就不知道了?????</p>
        </div>
    )
}
export default ComForm;