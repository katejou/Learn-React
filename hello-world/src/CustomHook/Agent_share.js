import React, { useState } from 'react';
import ProgressDIYcus from './ProgressDIY_cus'
import ShareCheer from './ShareCheer'

const Agent_share = () => {
    const [value, setValue] = useState(10); // 只有 value 的話，會使兩個元件共用一個值！
    const [score, setScore] = useState(10); // 記得分開！(除非是故意的在一起)
    return (
        <div>
            <ProgressDIYcus value={value} onClick={(e) => { setValue(e.target.value) }} />
            <br />
            <ShareCheer value={score} onClick={(e) => { setScore(e.target.value) }} />
        </div>
    );
    
}
export default Agent_share;