import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Webcam from "react-webcam";
import { clearInterval, setInterval } from 'worker-timers';


const videoConstraints = {
    width: 500,
    height: 500,
    facingMode: "user"
  };

function DashboardWebcam({images,setimages}) {
    const webcamRef = React.useRef(null);

 
    const [startTimer, setstartTimer] = useState(false);
     const navigate =  useNavigate()
     const [timerID, settimerID] = useState(null);
    const toggleTimer = ()=>{
      setstartTimer(!startTimer)
    }

    const closeTimer = (id)=>{
      if(timerID){
        toggleTimer()
        clearInterval(timerID)
        navigate("/")
      }
    }

    useEffect(() => {
      if(startTimer){

       var intervalId = setInterval(() => {
         
          const imageSrc = webcamRef.current.getScreenshot();
          var today = new Date(),

          time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

          setimages([...images , {image:imageSrc , timeStamp:time}])

      }, 5000);
      
      settimerID(intervalId)
      

      }

    return () => {
        clearInterval(intervalId);
    };

    }, [webcamRef,startTimer]);


  return (
    <div className="w-full mx-auto flex justify-center items-center flex-col">
    <div className="webcam-container p-5 my-10 shadow-md">
           
             <Webcam
         audio={false}
         height={400}
         ref={webcamRef}
         screenshotFormat="image/jpeg"
         width={400}
         videoConstraints={videoConstraints}
       />
             </div>
          
          {
           startTimer ===false ? 
           <button onClick={()=>toggleTimer()} className='bg-[#304FFE] text-white w-max px-20 py-2 rounded-md font-medium' >
           Start My Work 
        <i class='bx bxs-briefcase  mx-2 align-baseline'></i>
       </button> :
   <button onClick={()=>{closeTimer()}} className='w-max px-10 rounded-md py-2 text-[#FFF6F8] bg-[#F50057] my-5'>
    End My Work        <i class='bx mx-2 bxs-briefcase align-middle'></i>
  </button>
 
          }
 
         </div>
  )
}

export default DashboardWebcam