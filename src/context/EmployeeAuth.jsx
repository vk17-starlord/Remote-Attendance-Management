import React, { useContext, useState } from 'react'
const EmployeeContext = React.createContext()

export function useEmployeeContext(){
    return useContext(EmployeeContext)
  }



function EmployeeAuth({children}) {

const [user, setUser] = useState({

});

  return (
    <EmployeeContext.Provider value={{user,setUser}} >
        {
            children
        }
    </EmployeeContext.Provider>
  )
}

export default EmployeeAuth