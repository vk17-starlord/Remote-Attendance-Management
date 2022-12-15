import axios from "axios";
import { useEffect, useState } from "react"
import DashboardWebcam from "../components/webcam/DashboardWebcam"
import { useUserContext } from "../context/UserAuth"
import {baseURL} from '../api/config';
import EmployeeCard from "../components/EmployeeCard";
import {CreateEmployeeData} from '../api/AdminAPI';


function Dashboard() {

  const {user} = useUserContext();

  
  const [images, setimages] = useState([])
  
  const [employee, setemployee] = useState(null);
 
  useEffect(() => {

      const getDetail = ()=>{
      axios.get(`${baseURL}/employee/${user.empId}`).then((res)=>{
        console.log(res.data)
        setemployee(res.data)
      })
  
    }

    getDetail()

  }, [user]);


  return (
    <div className='w-full min-h-screen  flex-col flex justify-center items-center'>
       
    <div className="w-10/12 flex justify-between items-cent">
      
      <div className="col">
            <DashboardWebcam  images={images} setimages={setimages}/>
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