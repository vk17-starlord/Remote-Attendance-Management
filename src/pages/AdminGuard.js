import React from 'react'
import {Navigate} from 'react-router-dom'
import {useUserContext} from '../context/UserAuth';

function AdminGuard({children}) {
    const{ user} = useUserContext()
    console.log(user)
   
    if(user?.role!=="admin" || user==={}){
       return <Navigate to="/admin"></Navigate>
    }

    return children;
}

export default AdminGuard