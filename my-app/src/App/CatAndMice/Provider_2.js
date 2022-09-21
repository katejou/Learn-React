//provider.js
import React from "react";
import Content from "./Content_3";
import { CatStateContext } from "./Context_1";

//Provider = 金主 + 媒人

class ProviderContext extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = () => {
      this.setState((state) => ({
        startCatchMouse: state.startCatchMouse === true ? false : true,
      }));
    }

    this.state = {
      character: [
        {
          id: "01",
          name: "湯姆貓",
          feature: "喵",
        },
        {
          id: "02",
          name: "傑立鼠",
          feature: "吱",
        },
        {
          id: "03",
          name: "母湯貓",
          feature: "咪!",
        },
      ],
      startCatchMouse: false,
      toggle: this.toggle,
    };
  }
  render() {
    return (
      <CatStateContext.Provider value={this.state}>
        {/* 注意 Content 和 context 的不同！ */}
        <Content context={CatStateContext} />
      </CatStateContext.Provider>
    );
  }
}

export default ProviderContext;
