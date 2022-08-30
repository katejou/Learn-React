import React,{useState} from 'react';


function BeforeStore() {
    const [ apple, setApple ] = useState(1);
    return (
        <>
            <div className="BeforeStore">有一傳一的舊水果店有 [ {apple} ] 個蘋果</div>
            <BeforeAmy apple={apple}/>
        </>
    );
}

function BeforeAmy(props) {
    return (
        <div className="BeforeAmy">
            BeforeAmy看到了 [ {props.apple} ] 個蘋果
        </div>
    );
}

export default BeforeStore;