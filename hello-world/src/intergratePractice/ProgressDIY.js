import React, { Component } from 'react';
class ProgressDIY extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0, //這個值是還沒有接收到「外部」給的值。
    }
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    const percent = this.state.percent + 1;
    this.setState({ percent }, () => {
      if (this.state.percent >= this.props.value) {
        return; //下方的Recursive方法，只有在這個地方才可以跳出。
      }
      this.tm = setTimeout(this.increase, 20); // tm 這個屬性，只是來操作setTimeout？不，在update之中有作判斷。
      // 在setState之中，要實行一個方法，就只能這樣嗎？
    });
  }

  decrease() {
    const percent = this.state.percent - 1;
    this.setState({ percent }, () => {
      if (this.state.percent <= this.props.value) {
        return;
      }
      this.tmTwo = setTimeout(this.decrease, 20);
    });
  }

  // static getDerivedStateFromProps(props, state){
  //     return {percent:props.value};
  // } 

  // 建議改以 componentDidMount 來接收參數，原因是運行的順序︰
  // 首次︰getDerivedStateFromProps > render > componentDidMount
  // 再次︰getDerivedStateFromProps > render > componentDidUpdate
  // componentDidMount 是只在 Mount 後做一次， getDerivedStateFromProps 和 componentDidUpdate 是每次都會做。
  // 如果我們只是想收一次爸爸給的初始值，之後我們都自己來改的話，就放到componentDidMount

  // 另一個讓我明白這個道理的例子︰
  // https://dotblogs.com.tw/wasichris/2020/01/07/222653
  // componentDidMount也只適合做開場動畫，因為它做了一次就不會重覆。
  componentDidMount() {
    this.setState({ percent: this.props.value }) //只收爸爸的值一次。
  }


  componentDidUpdate(prevProps, prevState) {  // 這個方法才是連結一切的重點。
    
    if (prevProps.value > this.props.value) { // onClick 改變了外在的 props.value。
      if (this.tm) // 如果在這個 Update 在觸發的時候，這個方法是「正在進行中」！！<----重點
        clearTimeout(this.tm); // clearTimeout 是中止這個迴圈的方法
      this.decrease(); // 開出另外一個迴圈
    }
    // prevProps.value 是上一次觸發 Update 時設下的值。和這一次設下的值來對比。

    else if (prevProps.value < this.props.value) {
      if (this.tmTwo)
        clearTimeout(this.tmTwo);
      this.increase();
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
export default ProgressDIY;