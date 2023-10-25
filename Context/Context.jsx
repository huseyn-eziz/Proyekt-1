import { createContext } from "react"


export const MenimContext= createContext({})

const melumatlarim = {id:1 ,name : 'Eziz', surname: "Huseyn"}

const Context = ({children}) => {
  return (
    <MenimContext.Provider value={melumatlarim}>
               {children}
    </MenimContext.Provider>
  )
}

export default Context

