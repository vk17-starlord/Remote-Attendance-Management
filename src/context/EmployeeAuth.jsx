import React, { useContext, useEffect, useState } from 'react'
import { DeleteEmployeeByID, getEmployees } from '../api/AdminAPI'
const EmployeeContext = React.createContext()
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
    alert("error occurred")
  }else{
    console.log(res)
    const {pageData} = res;
    UpdateEmployees(pageData)
  }

}


useEffect(() => {
  console.log("here")
  const getData = async()=>{
    const res = await getEmployees();
    if(res.err){
      alert("error occurred")
    }else{
      console.log(res)
      const {pageData} = res;
      UpdateEmployees(pageData)
    }
  
}

  getData()

}, []);

  return (

        <AllEmployeesContext.Provider value={{RefreshData , AllEmployees ,UpdateEmployees,DeleteEmployee }}>
        {
            children
        }
        </AllEmployeesContext.Provider> 

  )
}

export default EmployeeAuth;