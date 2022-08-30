import React, { Component } from 'react';
class Poor_Daughter extends Component{
  constructor(props) {
    super(props);
    this.state={ 
      feeling:"bad",
      expectAmount: 100
    }
    this.argueForMore=this.argueForMore.bind(this);// 記得要註冊方法
    this.setMyFeeling=this.setMyFeeling.bind(this);
  }

    componentDidMount(){
    }

    argueForMore(){ // 我用父親給我的方法，改自己，也改的兄弟的錢。
      this.props.argue("Daughter", this.props.money+60, this.props.moneyForBrother-60);
    }

    componentDidUpdate(prevProps, prevState, snapshot){
      if(prevProps.money!==this.props.money){
          this.setMyFeeling();
      }
    } 

    setMyFeeling(){
      if(this.props.money < this.state.expectAmount) 
          this.setState({feeling:"bad"})
      else
          this.setState({feeling:"good"})
    }

    render(){
        return(
        <div>
          我是女兒，我拿到{this.props.money}
          <button onClick={this.argueForMore}>要求多60</button>
          {(this.state.feeling === "bad") ? "我現在不滿意" : "我現在滿意了"}
        </div>);
    }
}
export default Poor_Daughter;