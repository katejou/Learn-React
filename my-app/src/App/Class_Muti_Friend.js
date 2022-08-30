
class FriendStatusWithCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0, isOnline: null };
        this.handleStatusChange = this.handleStatusChange.bind(this);
    }

    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`; //1
        ChatAPI.subscribeToFriendStatus( //2
            this.props.friend.id,
            this.handleStatusChange
        );
    }

    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`; //1
    }

    componentWillUnmount() {
        ChatAPI.unsubscribeFromFriendStatus( //2
            this.props.friend.id,
            this.handleStatusChange
        );
    }

    handleStatusChange(status) {
        this.setState({
            isOnline: status.isOnline
        });
    }
    // ...
    
}


//但是如果 component 顯示在螢幕上時，friend prop 發生變化，會發生什麼呢？
//我們的 component 將繼續顯示其他好友的線上狀態。
//這是一個 bug。

//Unmount 時，由於取消訂閱的呼叫會使用錯誤的朋友 ID，因此也會導致 memory leak 或 crash。

//在 class component 中，
//我們需要加入 componentDidUpdate 來處理這種情況：

// componentDidUpdate(prevProps) {
//     從先前的 friend.id 取消訂閱
//     ChatAPI.unsubscribeFromFriendStatus(
//       prevProps.friend.id,
//       this.handleStatusChange
//     );
//     訂閱下一個 friend.id
//     ChatAPI.subscribeToFriendStatus(
//       this.props.friend.id,
//       this.handleStatusChange
//     );
//   }

//忘記正確處理 componentDidUpdate 是 React 應用程式中常見的 bug 來源。
//用Hook就好簡單，程式碼也沒有那麼肥 <--這我自己加的。