import React from "react";
//import React from "react";
import { ThemeContext, themes} from "./theme-context";
import ThemeTogglerButton from "./theme-toggler-button";

class DynamicUseContext extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {  // overwrite the function...(from theme-context.js)
        this.setState((state) => ({  // setState (為什麼會寫成這樣呢？來遷就被overwrite的原本寫法？)
          //記得，這個 setState ，不是 useState ！是用來控制下方的 state 用的！
        theme: state.theme === themes.dark ? themes.light : themes.dark,  //是則非，非則是的寫法！很好用，要記住。
      }));
    };

    // 在 toggleTheme 之中有 state，而在 state 之中又有 toggleTheme… 我不知道要怎麼改成 function component？
    this.state = {
      theme: themes.light, // 這個theme's' 是從 props來的…(滑鼠放上去會看到…)
      toggleTheme: this.toggleTheme,  // 記得，這個是覆寫後，往後傳的方法！
    };
  }

  render() {
    // The entire state is passed to the provider
    return (
      <ThemeContext.Provider value={this.state}>
        <Content />
      </ThemeContext.Provider>
    );
  }
}


function Content() {
  //Content 之中，只召喚出一個 Button 來承接上方 Class 給出來的屬性。
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}

export default DynamicUseContext;

//這個 Class 和 function 的混用，如果將它改成全部都是 function Component ?
// 因為第 17 行的原因，我想不到。
