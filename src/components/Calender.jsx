import React, { useEffect, useState } from 'react'
import { getEmployeeAttendance } from '../api/AdminAPI';

function Calender({id}) {

    const currentDate = new Date();

    const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
    const currentYear = currentDate.getFullYear();


  const [year, setyear] = useState(currentYear);
  const [month, setmonth] = useState(currentMonth);
  const [attendance, setattendance] = useState(null);
  
   const monthsData = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  
  const currentYearData = (new Date()).getFullYear();
  const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
  
  

  useEffect(()=>{

  const getData = async()=>{
    const d = new Date();
    d.setMonth(month);
    d.setFullYear(year);
    const timeStamp = d.toISOString();
    const res = await getEmployeeAttendance(id,timeStamp);
    if(res.err){
        console.log(res.err)
    }else
    {
        setattendance(res)
    }
 
  }

  getData()

  },[year,month,id])

  return (
    <div className='mx-5 my-5'>
     
    </div>
  )
}

export default Calender