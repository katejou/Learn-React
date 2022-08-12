import { useState, useEffect, useRef } from 'react';

// 和 ProgressDIY_func 一樣 除了 return 
const useRate = (value) => {

    const [rate, setRate] = useState(0);
    const mounted = useRef();
    const tm = useRef();
    const tmTwo = useRef();

    // 這個useEffect，可以被許多 function component 共用
    useEffect(() => {
        if (!mounted.current) { //componentDidMount
            setRate(value);
            mounted.current = true;
        }
        else { //componentDidUpdate
            if (rate > value) {
                if (tm.current)
                    clearTimeout(tm.current)
                tmTwo.current = setTimeout(() => { setRate(rate - 1) }, 20);
            }
            else if (rate < value) {
                if (tmTwo.current)
                    clearTimeout(tmTwo.current)
                tm.current = setTimeout(() => { setRate(rate + 1) }, 20);
            }
        }

    }, [value, rate]);

    return rate; 
    // 這個自訂的方法，依賴輸入，再持續的﹑緩慢的﹑遞迴地輸出。
}

export default useRate;