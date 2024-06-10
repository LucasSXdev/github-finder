import Search from "../components/Search"
import { useState } from "react"
import { UserProps } from "../types/user"
import User from "../components/User"
import Error from "../components/Error"

export  function Home(){
    const [user, setUser] = useState<UserProps|null>(null)
    const [error,setError]=useState(false)

    

    const loadUser = async (username:string) => {
        
        setError(false)
        setUser(null)
        

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

        if(res.status === 404){
            setError(true)
            return
        }
        

    }

    return(
        <div>
            <Search loadUser = {loadUser}/>
            {user && <User{...user}/>}
            {error && <Error/>}
        </div>
    )
}