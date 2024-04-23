import { useContext } from "react"
import {shopContext} from './shop'

const Product = ()=>{
    const {user} = useContext(shopContext);

    return(
        <div>
            <h1>User Profile</h1>
            <p>Name: {user.name}</p>
            <p>Status: {user.loggedIn ? 'Logged In' : 'Logged Out'}</p>
      </div>
    )
}

export default Product;