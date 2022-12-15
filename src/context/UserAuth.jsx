import axios from 'axios'
import React, { useEffect } from 'react'
import  { useContext, useState } from 'react'
import {baseURL} from '../api/config';
const UserContext = React.createContext()

export function useUserContext(){
    return useContext(UserContext)
  }


function UserAuth({children}) {
  const [user, setUser] = useState({
  });

  const login = async (payload)=>{
  
    return await axios.post(`${baseURL}/auth/login`,payload).then((res)=>{

    const {token} = res.data;
    
    
    localStorage.setItem("token",token.toString());
     

        setUser(res.data)


        return res.data;
     }).catch((err)=>{
      return {err:err.response.data.message}
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