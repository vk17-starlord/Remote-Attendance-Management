import React from 'react'

function EmployeeCard({employee}) {
  return (
    <div className="w-10/12 min-w-[20vw] flex justify-center items-center flex-col mx-auto pb-5 bg-white shadow-md rounded-md">
    <div className="w-full flex justify-center rounded-md mb-5 bg-card">
      <img src={employee.profileUrl} className='w-32 h-32 object-cover object-top rounded-full my-10' alt="" />    
    </div>
             <h1 className="my-1 w-10/12"> <span className="font-Poppins text-md  font-bold "> Name - </span> {employee?.name} </h1>
            <h1 className="my-1 w-10/12"> <span className="font-Poppins text-md  font-bold "> Position- </span> {employee?.position} </h1>
            <h1 className="my-1 w-10/12"> <span className="font-Poppins text-md  font-bold "> Joined on - </span> {employee?.joiningDate.substring(0,10)} </h1>
   
         </div>
  )
}

export default EmployeeCard