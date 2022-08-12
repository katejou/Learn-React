/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import Poor_Son from "./Poor_Son";
import Poor_Daughter from "./Poor_Daughter";
class Poor_Parent extends Component{
  constructor(props) {
    super(props);
    this.state={ 
      moneyForSon:60,
      moneyForDaughter:40,
      moneyTotal:100
    }
    this.allocateMoney=this.allocateMoney.bind(this); // bind 這個方法
  }

    allocateMoney(target,my_amount,siblings_amount){
        if(target==="Son"){ 
            this.setState({moneyForSon:my_amount}) 
            this.setState({moneyForDaughter:siblings_amount})
          }
        else{
            this.setState({moneyForDaughter:my_amount});
            this.setState({moneyForSon:siblings_amount});
          }
    }

    render(){
        return( 
          <div>
              <Poor_Son 
              money={this.state.moneyForSon} 
              moneyForSister={this.state.moneyForDaughter} // 爸爸也告訴了你姐妹有多少錢，所以你就可以改她的…
              argue={this.allocateMoney} /> 
              
              <Poor_Daughter 
              money={this.state.moneyForDaughter} 
              moneyForBrother={this.state.moneyForSon} // 爸爸也告訴了你兄弟有多少錢，所以你就可以改他的…
              argue={this.allocateMoney}/>
          </div>
        );
    }
}
export default Poor_Parent;