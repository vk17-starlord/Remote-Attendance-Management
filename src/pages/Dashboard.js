import axios from "axios";
import { useEffect, useState } from "react"
import DashboardWebcam from "../components/webcam/DashboardWebcam"
import { useUserContext } from "../context/UserAuth"
import {baseURL, headers} from '../api/config';
import EmployeeCard from "../components/EmployeeCard";
import logo from "../assets/R.A.M.S-1(1).png"

function Dashboard() {

  const {user} = useUserContext();

  
  const [images, setimages] = useState([])
  
  const [employee, setemployee] = useState(null);
 
  useEffect(() => {

      const getDetail = ()=>{
        
      axios.get(`${baseURL}/employee/${user.empId}`,{headers:headers}).then((res)=>{
        console.log(res.data)
        setemployee(res.data)
      })
  
    }

    getDetail()

  }, [user]);


  return (
    <div className='w-full min-h-screen  flex-col flex justify-start items-center'>
      <div className="w-full   bg-blue-600">
       
        <div className="w-10/12 min-h-[10vh] flex justify-between items-center rounded-xl mx-auto">
          <img src={logo} className="w-16 h-16" alt="" />
          <button className="bg-blue-50/50 text-blue-600 px-10 py-2 h-max">Logout</button>
        </div>

      </div> 

    <div className="w-10/12 flex justify-between items-cent">
      
      <div className="col">
            <DashboardWebcam  images={images} setimages={setimages}/>
      </div>
      <div>

      </div>
      <div className="col flex justify-center items-center">
       {
        employee 
        &&
         <EmployeeCard employee={employee}></EmployeeCard>
       }
      </div>
    </div>
  
        
 
     </div>
  )
}

export default Dashboard