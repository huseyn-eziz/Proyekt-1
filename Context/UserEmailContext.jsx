import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Emailistifade = createContext('')

const UserEmailContext = ({children}) => {
const [email,setEmail] = useState('')

const url = 'https://jsonplaceholder.typicode.com/users'
useEffect(()=>{
    axios.get(url).then(({data})=> 
    setEmail(data[0].email))
},[])

  return (
    <Emailistifade.Provider value ={email}>
        {children}
    </Emailistifade.Provider>
  )
}

export default UserEmailContext


