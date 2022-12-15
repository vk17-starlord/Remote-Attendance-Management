import React, { useEffect, useState } from 'react'
import { getEmployeeByID } from '../api/AdminAPI';
import {useParams} from 'react-router-dom';
import Calender from './Calender';

const ViewEmployee = () => {

    const [Employee, setEmployee] = useState(null);
    const {id} =useParams()
    useEffect(() => {
     const getData = async ()=>{
       const res = await getEmployeeByID(id) 
       if(res.err){
        alert("Error occurred")
       }else{
        setEmployee(res)
         console.log(res)
    
       }
    
     }
     getData()
     
    }, [id]);

    return (
        <div className='w-full'>
        <div className="bg-card  w-full min-h-[25vh] ">
            
        </div>

         <div className="w-10/12 lg:w-9/12 grid gap-5 mt-[-10vh] grid-cols-[4fr_8fr] mx-auto">
            <div className="col h-max  w-full bg-white rounded-xl shadow-lg p-5 ">
                  <div className="flex">
                  <img className='w-24 h-24 object-center rounded-lg object-cover' src="https://images.pexels.com/photos/623305/pexels-photo-623305.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
                  <div className="block">
                  <h1 className='font-bold mx-5'>{Employee?.name}</h1>
                  <h1 className='text-gray-500 mx-5 my-2'><span><i class='bx bxs-briefcase'></i></span> {Employee?.position}</h1>
                  <h1 className='text-gray-500 mx-5 my-2'><i class='bx bxs-phone text-xl align-middle' ></i> {Employee?.phone}</h1>
                  </div>
            </div>

            </div>

            <div className="col bg-white rounded-xl shadow-xl p-5  w-full">

                <div className="flex justify-between">
                <h1 className='font-bold mx-5'>Joining Date - <span className='font-medium text-gray-500'>{Employee?.joiningDate.substr(0,10)}</span></h1>
                <h1 className='font-bold mx-5'>Employee ID - <span className='font-medium text-gray-500'>{Employee?.empId}</span></h1>

                </div>

               <Calender id={id}></Calender>

            </div>



         </div>
            
        </div>
    )
}

export default ViewEmployee