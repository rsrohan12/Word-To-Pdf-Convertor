// better way to use context api rather than which we used in 08miniContext

import React from "react"
import UserContext from "./UserContext"

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState('')
    return(
        <UserContext.Provider value = {{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider