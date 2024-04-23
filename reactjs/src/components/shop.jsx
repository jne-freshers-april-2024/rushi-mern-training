import {  createContext, useState } from "react";

export const shopContext = createContext('');

const Shop = ({children})=>{
    const [user,setUser] = useState({ name: 'John Doe', loggedIn: true });

    return(
        <>
            <h1>This is the Shop</h1>
            <shopContext.Provider value={{user,setUser}}>
                {children}
            </shopContext.Provider>
        </>
    )
}



export default Shop