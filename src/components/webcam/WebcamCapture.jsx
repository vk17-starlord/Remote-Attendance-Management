import { Button } from '@mui/material';
import { Container, Stack } from '@mui/system';
import React, { useEffect, useState } from 'react'
import Webcam from "react-webcam";
import "./Webcam.css"
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useNavigate} from 'react-router-dom'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#fff',
  boxShadow: 24,
  p: 4,
};


const videoConstraints = {
  width: 500,
  height: 500,
  facingMode: "user"
};


function WebcamCapture() {
  const webcamRef = React.useRef(null);
 const [image, setimage] = useState(null);
 const navigate = useNavigate()
 const [open, setOpen] = React.useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);



  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      console.log(imageSrc)
       setimage(imageSrc)
       handleOpen()
    },
    [webcamRef]
  );


  useEffect(()=>{

    // setInterval(() => {
    //   const imageSrc = webcamRef.current.getScreenshot();
    //   setimage([...image,imageSrc])

    // }, 2000);


  },[image,webcamRef])

  return (
   <div className="container">

  <Webcam
        audio={false}
        height={400}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={400}
        videoConstraints={videoConstraints}
      />

  <Button onClick={()=>{
    capture()
  }} variant="contained">Verify Face <EmojiEmotionsIcon /> </Button>
  


 


   </div>
  )
}

export default WebcamCapture