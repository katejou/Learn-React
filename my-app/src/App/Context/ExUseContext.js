import React, { useContext } from "react";

const slogan = 'super star'

export const Content = React.createContext(slogan);

function ContextExample(props) {
    return (
        <Content.Provider value={slogan}>
            <SideBar /> 
         </Content.Provider>
    )
}

function SideBar(props) {
    return (
        <div>
            <SideBarButton />
        </div>
    )
}

function SideBarButton(props) {
    const title = useContext(Content)
    return (
        <div>
            {title}
        </div>
    )
}

export default ContextExample;