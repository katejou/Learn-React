import React from "react";

export const UserContext = React.createContext();

export default function App_FCC_2() {
  return (
    <UserContext.Provider value="Reed_2">
      <User />
    </UserContext.Provider>
  );
}

function User() {
    const value = React.useContext(UserContext);
    //和<UserContext.Consumer>一個意思。
  return <h1>{value}</h1>;
}
