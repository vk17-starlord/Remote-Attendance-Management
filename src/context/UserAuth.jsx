import axios from 'axios'
import React from 'react'
import  { useContext, useState } from 'react'
const UserContext = React.createContext()

export function useUserContext(){
    return useContext(UserContext)
  }


function UserAuth({children}) {
  const [user, setUser] = useState({
  });

  const login = async (payload)=>{

     console.log(payload)
     axios.post('http://localhost:3001/auth/login',payload).then((res)=>{
      console.log(res.data)
      setUser(res.data)
      return user;
     }).catch((err)=>{
      console.log(err)
      return err;
     })
  }

  return (
    <UserContext.Provider value={{user , login} }>
      {
        children
      }
    </UserContext.Provider>
    )
}




export default UserAuth