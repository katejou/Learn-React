import React, { Component } from 'react';
class Poor_Son extends Component{
  constructor(props) {
    super(props);
    this.state={ 
      feeling:"bad",
      expectAmount: 100
    }
    this.argueForMore=this.argueForMore.bind(this); // 記得要註冊方法
    this.setMyFeeling=this.setMyFeeling.bind(this);
  }

    componentDidMount(){
    }

    argueForMore(){ // 我用父親給我的方法，改自己，也改的兄弟的錢。
      this.props.argue("Son",this.props.money+40,this.props.moneyForSister-40);
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

    render(){ // 於是爸爸給的 this.props.money 值改變了，爸爸重新render，兒子拿到更多錢。
        return(
        <div>
          我是兒子，我拿到{this.props.money}
          <button onClick={this.argueForMore}>要求多40</button>
          {(this.state.feeling === "bad") ? "我現在不滿意" : "我現在滿意了"}
        </div>);
    }
}
export default Poor_Son;