import React, { useContext, useEffect, useState } from 'react'
import { DeleteEmployeeByID, getEmployees } from '../api/AdminAPI'
const AllEmployeesContext = React.createContext()


  export function useAllEmployeeContext(){
    return useContext(AllEmployeesContext)
  }


function EmployeeAuth({children}) {



const [AllEmployees, setAllEmployees] = useState(null);


const UpdateEmployees= (data)=>{
  setAllEmployees(data)
}
  
const DeleteEmployee = async(id)=>{
  const res =await DeleteEmployeeByID(id)
  if(res){

    RefreshData()
  }
 
}

const RefreshData = async()=>{
  const res = await getEmployees();
  if(res.err){
     
  }else{
    console.log(res)
    const {pageData} = res;
    UpdateEmployees(pageData)
  }
}




  return (

        <AllEmployeesContext.Provider value={{RefreshData , AllEmployees ,UpdateEmployees,DeleteEmployee }}>
        {
            children
        }
        </AllEmployeesContext.Provider> 

  )
}

export default EmployeeAuth;