import axios from "axios";
import { useEffect, useState } from "react"
import DashboardWebcam from "../components/webcam/DashboardWebcam"
import { useUserContext } from "../context/UserAuth"
import {baseURL} from '../api/config';


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
         <div className="w-10/12 min-w-[20vw] flex justify-center items-center flex-col mx-auto pb-5 bg-white shadow-md rounded-md">
 <div className="w-full flex justify-center rounded-md mb-5 bg-card">
 <img  className="w-32  my-5 h-32 rounded-full  object-cover object-center" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />

 </div>
          <h1 className="my-1 w-10/12"> <span className="font-Poppins text-md  font-bold "> Name - </span> {employee?.name} </h1>
         <h1 className="my-1 w-10/12"> <span className="font-Poppins text-md  font-bold "> Position- </span> {employee?.position} </h1>
         <h1 className="my-1 w-10/12"> <span className="font-Poppins text-md  font-bold "> Joined on - </span> {employee?.joiningDate.substring(0,10)} </h1>

      </div>
       }
      </div>
    </div>
  
        
 
     </div>
  )
}

export default Dashboard