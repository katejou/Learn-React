/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import Rich_Son from "./Rich_Son";
import Rich_Daughter from "./Rich_Daughter";
class Rich_Parent extends Component{
  constructor(props) {
    super(props);
    this.state={ 
      moneyForSon:60,
      moneyForDaughter:40
    }
    this.allocateMoney=this.allocateMoney.bind(this); // bind 這個方法
  }

    allocateMoney(target,amount){
        if(target==="Son") 
            this.setState({moneyForSon:amount}) 
        else
            this.setState({moneyForDaughter:amount});
    }

    render(){
        return( // allocateMoney 的方法，改名為 argue 的方法，傳給兒子。
          <div>
              <Rich_Son money={this.state.moneyForSon} argue={this.allocateMoney} /> 
              <Rich_Daughter money={this.state.moneyForDaughter} argue={this.allocateMoney}/>
          </div>
        );
    }
}
export default Rich_Parent;