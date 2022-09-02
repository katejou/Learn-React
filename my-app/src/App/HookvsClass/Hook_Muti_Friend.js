function FriendStatusWithCounter(props) {

  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;  //1
  });

  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {                                 //2
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });
  // ...
}
