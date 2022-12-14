import { useEffect, useState } from "react"
import DashboardWebcam from "../components/webcam/DashboardWebcam"
import { useUserContext } from "../context/UserAuth"
function Dashboard() {

  const {user} = useUserContext();

  
  const [images, setimages] = useState([])
    
  useEffect(() => {
  
  console.log(user)
  
  }, [user]);

  return (
    <div className='w-full min-h-screen  flex-col flex justify-center items-center'>
       
    <div className="w-full grid grid-cols-3">
      <div className="col">

      </div>
      <div className="col">
            <DashboardWebcam  images={images} setimages={setimages}/>
      </div>
      <div className="col flex justify-center items-center">
        <div className="w-10/12 mx-auto min-h-[50vh] bg-white shadow-md rounded-md">

        </div>
      </div>
    </div>
  
        
 
     </div>
  )
}

export default Dashboard