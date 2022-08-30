import React, { Component } from 'react';
class GrandPa extends Component {
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
                    GrandPa Have : {this.state.Money}
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
            Money: props.legacy.Money -1// <--注意這個物件的層級
        }
    }
    render() {
        return (
            <div>
                <div>
                    Son Have : {this.state.Money}
                </div>
                <GrandSon legacy={this.state} />
            </div>
        );
    }
}
class GrandSon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Money: props.legacy.Money -1// <--注意這個物件的層級
        }
    }
    render() {
        return (
            <div>
                GrandSon have : {this.state.Money}
            </div>
        );
    }
}
//export {GrandPa, Son, GrandSon} ; // 如果輸出三個，就也要引用三個。
export default GrandPa;