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
      <div className="col">

      </div>
    </div>
  
        
        <div className="grid grid-cols-6 w-8/12 mx-auto gap-5 my-10">
      {
        images?.map((ele)=>{
        return <div className="block">
          <img src={ele?.image} className="w-12 h-12 object-cover" alt="" />
          <h1>{ele.timeStamp}</h1>
        </div>

      })
      }
     </div>
     </div>
  )
}

export default Dashboard