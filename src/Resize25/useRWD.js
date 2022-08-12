import { useState, useEffect, useRef } from 'react';
// 我們需要一個state去記錄並回傳目前螢幕的狀況，所以總共需要的hook為

const useRWD = () => { //這屬於一個自訂的Hook，只是用來分辨在按目前的環境，回傳什麼單字

    const [device, setDevice] = useState("mobile");// 給他一個初始值「mobile」
    // 未加 A) 前
    // 即使是「電腦」，頭一次開出來，卻會是「手機」
    // useEffect要在拉窗戶的是候，才會「更新」？不是說在 DidMount 的功能嗎？
    // 等等DidMount那個部分，是addEventListener而已，所以它沒有進行過handleRWD…

    // 我們希望在螢幕長寬被改變時，
    // 根據目前的寬去判斷使用者的裝置是電腦、平板還是手機，
    // 並且記錄在state中。因此   
    const handleRWD = () => {
        if (window.innerWidth > 768)
            setDevice("PC"); //電腦
        else if (window.innerWidth > 576)
            setDevice("tablet"); //平板
        else
            setDevice("mobile"); //手機
    }
    // 以上用和Boostrap相同的標準來分辨裝置。

    //B)   
    const mounted = useRef();

    useEffect(() => {

        if (!mounted.current) {
            window.addEventListener('resize', handleRWD);
            //A)
            handleRWD(); // 但這不會變成DidUpdate也在用這個嗎？那設Listener的意思，不是用了兩次？
            //所以我自己加了B (果然也照樣跑得好好的)
        }
        //else { }

        return (() => {
            window.removeEventListener('resize', handleRWD);
        })
    }, []);

    return device;

}

export default useRWD;