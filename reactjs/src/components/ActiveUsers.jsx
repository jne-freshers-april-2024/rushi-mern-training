import { useMemo } from "react"

const ActiveUsers = (props)=>{
    console.log(props.users)
    const activeUser = useMemo(()=>{
        return props.users.filter(user=> user.active)
    },[props.users])

    return(
        <>
            <h1>Active Users</h1>
            <ul>
                {activeUser.map(user=>(
                    <li>{user.name}</li>
                )
                )}
            </ul>
        </>
    )
}

export default ActiveUsers;
