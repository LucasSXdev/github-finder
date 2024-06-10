import Search from "../components/Search"
import { useState } from "react"
import { UserProps } from "../types/user"

export  function Home(){
    const [user, setUser] = useState<UserProps|null>(null)

    const loadUser = async (username:string) => {
        const res = await fetch(`https://api.github.com/users/${username}`)
        const data = await res.json()
        
        const {avatar_url,login,location,followers,following}= data

        const UserData : UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following,
        }

        setUser(UserData)
        

    }

    return(
        <div>
            <Search loadUser = {loadUser}/>
            {user && <p>{user.login}</p>}
        </div>
    )
}