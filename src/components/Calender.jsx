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

   const [yearData, setyearData] = useState([]);
  
   const getData = async()=>{
    const d = new Date();
    d.setMonth(month);
    d.setFullYear(year);
    const timeStamp = d.toISOString();
    const res = await getEmployeeAttendance(id,timeStamp);
    if(res.err){
    }else
    {
        setattendance(res)
    }
 
  }


  useEffect(()=>{
   

    const now = new Date().getUTCFullYear();    
    const years = Array(now - (now - 20)).fill('').map((v, idx) => now - idx);
   
  setyearData(years)
  getData()

  },[year,month,id])

  const [openYear, setopenYear] = useState(false);
  const [openMonth, setopenMonth] = useState(false);

  const toggleYear = ()=>{
    setopenYear(!openYear)
  }

  const toggleMonth = ()=>{
    setopenMonth(!openMonth)
  }

  const updateMonth = (idx)=>{

    setmonth(idx)

    setmonthText(monthsData[idx])
    toggleMonth()
    
  }

  const updateYear = (yr)=>{
  
    setyear(yr)
    setyearText(yr)
    toggleYear()
  }

  const [monthText, setmonthText] = useState(monthsData[currentDate.getMonth()]);
  const [yearText, setyearText] = useState(currentDate.getFullYear());
  
 
  return (
    <div className='mx-5 my-5'>
     
<div className="flex justify-between">
<div className="block">
<button onClick={()=>toggleMonth()} id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" class="text-blue-600 bg-blue-200 hover:bg-blue-800    font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center w-44  dark:hover:bg-blue-500 hover:text-white " type="button">

 {monthText}
  </button>


{
    openMonth ? <div  id="dropdownInformation" class=" z-10 my-5 fixed overflow-scroll max-h-[50vh] w-44 bg-white rounded divide-y divide-gray-100 shadow ">
    {
   monthsData.map((ele,index)=>{
         return   <h1 key={index}  onClick={()=>{updateMonth(index)}} className='w-full text-blue-600 text-left text-sm   py-2 px-4 '>{ele}</h1>
        })
    }

</div> : null
}


</div>
<div className="block">
<button onClick={()=>toggleYear()} id=" dropdownInformationButton" data-dropdown-toggle="dropdownInformation" class="text-blue-600  bg-blue-200 hover:bg-blue-800    font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center w-44  dark:hover:bg-blue-500 hover:text-white " type="button">
 {
yearText
 }
 </button>
    

 {
    openYear ? <div  id="dropdownInformation" class=" z-10 my-5 fixed overflow-scroll max-h-[50vh] w-44 bg-white rounded divide-y divide-gray-100 shadow ">
    {
   yearData.map((ele,index)=>{
         return   <h1 key={index}  onClick={()=>{updateYear(ele)}} className='w-full text-blue-600 text-left text-sm   py-2 px-4 '>{ele}</h1>
        })
    }

</div> : null
}
</div>
</div>



<div className="w-full grid grid-cols-4  gap-2 my-10">
    {
        attendance?.map((data)=>{
            return  <div className="tile  w-full flex-col border-2 rounded-xl flex justify-center items-start border-gray-200 py-5">
       
               <h1 className='font-bold mx-2 text-black text-sm'>Date - <span className='text-gray-500 font-medium'> {data.createdAt.substr(0,10)}</span></h1>
               <h1 className='font-bold mx-2 text-black text-sm'>Time Spent - <span className='text-gray-500 font-medium'> {data.totalHours.toFixed(3)}</span></h1>
       
            </div>
        })
    }
</div>


    </div>
  )
}

export default Calender