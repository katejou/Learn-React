import React, { Component } from 'react';
class Rich_Daughter extends Component{
  constructor(props) {
    super(props);
    this.state={ 
      feeling:"bad",
      expectAmount: 200
    }
    this.argueForMore=this.argueForMore.bind(this);// 記得要註冊方法
    this.setMyFeeling=this.setMyFeeling.bind(this);
  }

    componentDidMount(){
    }

    argueForMore(){
      this.props.argue("Daughter",this.props.money+100);
    }

    componentDidUpdate(prevProps, prevState, snapshot){
      if(prevProps.money!==this.props.money){
          this.setMyFeeling();
      }
    } 

    setMyFeeling(){
      if(this.props.money < this.state.expectAmount) // 爸爸給的機，影響了我的心情。
          this.setState({feeling:"bad"})
      else
          this.setState({feeling:"good"})
    }

    // 重點︰
    // 注意要用if(prevProps.money!==this.props.money)去限制呼叫函式的時機，
    // 否則在setMyFeeling()中進行setState時
    //「會」！再次觸發componentDidUpdate
    // 造成無限呼叫setMyFeeling()的迴圈。
    // 修改 > 觸發 Update> Update 觸發修改 > 觸發Update……

    // 流程︰
    // 父給方法我 > 我修改了父給我的值 > 值的改變讓我的心情很好。

    render(){
        return(
        <div>
          我是女兒，我拿到{this.props.money}
          <button onClick={this.argueForMore}>要求多100</button>
          {(this.state.feeling === "bad") ? "我現在不滿意" : "我現在滿意了"}
        </div>);
    }
}
export default Rich_Daughter;