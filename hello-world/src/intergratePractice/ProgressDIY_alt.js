import React, { Component } from 'react';
class ProgressDIY_alt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0, //這個值是還沒有接收到「外部」給的值。
    }
    //this.increase = this.increase.bind(this); // 將這兩個方法，寫入componentDidUpdate
    //this.decrease = this.decrease.bind(this);
  }

  componentDidMount() {
    this.setState({ percent: this.props.value }) //只收爸爸的值一次。
  }

  // increase() {
  //   const percent = this.state.percent + 1;
  //   this.setState({ percent }, () => {
  //     if (this.state.percent >= this.props.value) {
  //       return; //下方的Recursive方法，只有在這個地方才可以跳出。
  //     }
  //     this.tm = setTimeout(this.increase, 20); // tm 這個屬性，只是來操作setTimeout？不，在update之中有作判斷。
  //     // 在setState之中，要實行一個方法，就只能這樣嗎？
  //   });
  // }

  // decrease() {
  //   const percent = this.state.percent - 1;
  //   this.setState({ percent }, () => {
  //     if (this.state.percent <= this.props.value) {
  //       return;
  //     }
  //     this.tmTwo = setTimeout(this.decrease, 20);
  //   });
  // }

  componentDidUpdate(prevProps, prevState){
    if((prevProps.value!==this.props.value)||(prevState.percent!==this.state.percent)){
        // onClick 是改 props.value，下面才是做 setState 改 state.percent(每次只減 1 )
        if(this.state.percent>this.props.value){
          if(this.tm)  //如果是另一個正在進行的話
            clearTimeout(this.tm) //中止另一個
          // 不論是正在進行另一個還是這個，都繼續做這個。
          this.tmtwo=setTimeout(()=>{this.setState({percent:this.state.percent-1})}, 20)
          // 這個單句的本身，就是一個 Recursive ，超級簡潔，注意那些括弧！()=>參數一，參數二
        }
        else if(this.state.percent<this.props.value){
          if(this.tmTwo)  
            clearTimeout(this.tmTwo)
          this.tm=setTimeout(()=>{this.setState({percent:this.state.percent+1})}, 20)
        }

    }
  }

  render() {
    return (
      <div>
        <div className="progress-back" style={{ backgroundColor: "rgba(0,0,0,0.2)", width: "200px", height: "7px", borderRadius: "10px" }}>
          <div className="progress-bar" style={{ backgroundColor: "#fe5196", width: this.state.percent.toString() + "%", height: "100%", borderRadius: "10px" }}></div>
        </div>
        目前比率: {this.state.percent}%
        <br/>
        <button value={90} onClick={this.props.onClick}>增加比率至90</button>
        <br/>
        <button value={10} onClick={this.props.onClick}>減少比率至10</button>
      </div>
    );
  }
}
export default ProgressDIY_alt;