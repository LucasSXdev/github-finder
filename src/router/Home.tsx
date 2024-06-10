import Search from "../components/Search"
import { useState } from "react"
import { UserProps } from "../types/user"

export  function Home(){
    const [user, setUser] = useState<UserProps|null>(null)

    const loadUser = async (username:string) => {
        const res = await fetch(`https://api.github.com/users/${username}`)
        const data = await res.json()
        console.log(data)
        

    }

    return(
        <div>
            <Search loadUser = {loadUser}/>
        </div>
    )
}