import React, { useEffect, useState } from 'react'
import Webcam from "react-webcam";
import { clearInterval, setInterval } from 'worker-timers';


const videoConstraints = {
    width: 500,
    height: 500,
    facingMode: "user"
  };

function Dashboard() {
    const webcamRef = React.useRef(null);

    const [images, setimages] = useState([])

    useEffect(() => {
        var intervalId = setInterval(() => {
      
            const imageSrc = webcamRef.current.getScreenshot();
            setimages([...images , imageSrc])

        }, 5000);
        return () => {
            clearInterval(intervalId);
        };

    }, [webcamRef,images]);



  return (
    <div className='w-full min-h-screen  flex-col flex justify-center items-center'>
       
        <div className="w-7/12 mx-auto flex justify-center items-center flex-col">
   <div className="webcam-container p-5 my-10 rounded-md shadow-md">
          
            <Webcam
        audio={false}
        height={500}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={500}
        videoConstraints={videoConstraints}
      />
            </div>
            <button className='bg-[#304FFE] text-white w-max px-20 py-2 rounded-md font-medium' >
                Start My Work <i class='bx bxs-briefcase align-middle'></i>
            </button>
        </div>
  
        
        <div className="block">
   
     </div>
     </div>
  )
}

export default Dashboard