
const { createContext, useState } = require("react");

export const Context=createContext()

export function UserContextProvider(props){
    const [user,setUser]=useState(null)

    return(
        <Context.Provider value={{user,setUser}}>
            {props.children}
              </Context.Provider>
    )

} 
