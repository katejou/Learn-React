import React, { Component } from 'react';
class Baby extends Component{
  constructor(props) {
    super(props);
    this.state={
    //    isRightDad: true,
        isGetData: false,
        Mom: ""
    }
    this.ajaxSimulator=this.ajaxSimulator.bind(this)
  }

    // version 17後，componentWillMount()將會被改為UNSAFE_componentWillMount()
    // 已被 componentDidMount 取代，和 componentWill「Un」Mount 不是同一個東西

    // componentWillMount(){
    //     if(this.props.dad!=="Chang")
    //         this.setState({isRightDad:false})
    // }

    ajaxSimulator(){
        setTimeout(()=>{this.setState({isGetData:true, Mom:"小美"})},3000)
    }

    componentDidMount(){
        this.ajaxSimulator();
        document.getElementById("talk").append("爸!")
        window.addEventListener('mousedown', this.IWasClick)// <-- 示範移除監聽事件
    }

    // 這個是重點，在Baby不再被App的sendBaby生出來的時候，App的render會知道 Baby 不在了！
    // 於是App的render後，會跑來Baby這邊，去進行這個︰
    componentWillUnmount(){
        document.getElementById("talk").innerHTML="";
        window.removeEventListener('mousedown',this.IWasClick);// <-- 示範移除監聽事件
    }

    // 另一種新增和刪除元素的參考︰
    // componentDidMount(){
    //     document.getElementById("talk").append(
    //         '<div id="callDad">爸!</div>'
    //     )
    // }

    // 示範移除監聽事件
    IWasClick(){
        console.log("啊!我被點了!")
    } 

    render(){
        if(this.state.isGetData===false)
            return(
                <div id="msg">讀取中</div>
            );
        else
            return(
                <div id="msg">他的媽媽是{this.state.Mom}</div>
            );                
    }
}
export default Baby;
