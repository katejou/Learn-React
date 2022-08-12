import React, { Component } from 'react';
class GrandPaPa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Money: 10
        }
    }
    render() {

        return (
            <div>
                <div>
                    GrandPaPa Have : {this.state.Money}
                </div>
                <Son legacy={this.state} />
            </div>
        );
    }
}
class Son extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Money: props.legacy.Money - 1// <--注意這個物件的層級
        }
        this.handleSendData = this.handleSendData.bind(this); // 不bind 的話，孫子會抓不到
        this.handleSendFunc = this.handleSendFunc.bind(this);
    }

    handleSendData(name) {
        return this.state[name]; // 這是爸爸自己有的錢。 ，要參考PoorDaughter)
    }

    handleSendFunc(method, arg_name) {
        if (method === "handleSendData") // 我想沒有方法免除這一步？
            return this.handleSendData(arg_name)-1; //在這個例子中，爸爸給兒子少一塊。
    }

    render() {
        return (
            <div>
                <GrandSon
                    handleSendData={this.handleSendData}
                    handleSendFunc={this.handleSendFunc}
                />
            </div>
        );
    }
}
class GrandSon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dadMoney: this.props.handleSendData("Money"),
            myMoney:this.props.handleSendFunc("handleSendData","Money")
        }

    }


    render() {
        return (
            <div>
                <div>
                    Son Have : {this.state.dadMoney}
                </div>
                <div>
                    GrandSon have : {this.state.myMoney}
                </div>
            </div>
        );
    }
}

export default GrandPaPa;