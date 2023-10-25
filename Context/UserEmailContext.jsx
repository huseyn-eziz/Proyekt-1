import axios from "axios"
import { createContext, useEffect, useState } from "react"

export const UsEmailContext = createContext('')

const url = 'https://jsonplaceholder.typicode.com/users'


const UserEmailContext = ({ children }) => {
    const [email, setEmail] = useState('')


    useEffect(() => {
        axios.get(url).then(({ data }) => {
            setEmail(data[0].email)
        })
    }, [])

    return (
        <UsEmailContext.Provider value={email}>
            {children}
        </UsEmailContext.Provider>
    )
}

export default UserEmailContext;
