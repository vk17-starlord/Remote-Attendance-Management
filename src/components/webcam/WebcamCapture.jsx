import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import "./Webcam.css";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL , headers } from "../../api/config";
import { useUserContext } from "../../context/UserAuth";
import Dashboard from "../../pages/Dashboard";

const videoConstraints = {
  width: 500,
  height: 500,
  facingMode: "user",
};

function WebcamCapture() {
  const webcamRef = React.useRef(null);
  const [image, setimage] = useState(null);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { user } = useUserContext();

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setimage(imageSrc);
    handleOpen();
  }, [webcamRef]);

  const handleFaceVerify = async () => {
    
    const payload = {
      empId: user.empId,
      image: image,
      verifyOnly:true
      
    };
   
    axios
      .post(`${baseURL}/employee/verify-capture`, payload , {headers:headers})
      .then((ele) => {
        const { isMatch } = ele.data;
        if (isMatch) {
          navigate("/dashboard");
        } else {
          alert("Face Doesn't Match with Employee Details");
          navigate("/");
        }
      })
      .catch((err) => {
        alert("error occurred")
        navigate("/");
      });
  };

  return (
    <div className="w-full flex justify-center items-center flex-col min-h-screen">
      {open ? (
        <div
          className={`modal fixed w-[40vw] p-5 min-h-[70vh] bg-white rounded-xl shadow-md`}
        >
          <img src={image} className="w-full object-cover rounded-md" alt="" />
          <div className="grid grid-cols-2 gap-5 w-full">
            <button
              onClick={() => {
                handleFaceVerify();
              }}
              className="w-full px-10  my-5 text-[#4CAF50] py-2 rounded-md  bg-[#E7FFE8]"
            >
              {" "}
              Accept{" "}
            </button>
            <button
              onClick={() => {
                handleClose();
              }}
              className="w-full px-10 rounded-md py-2 bg-[#FFF6F8] text-[#F50057] my-5"
            >
              Click Again !{" "}
            </button>
          </div>
        </div>
      ) : null}

      <Webcam
        audio={false}
        height={400}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={400}
        videoConstraints={videoConstraints}
      />

      <button
        className=" px-10 py-2 rounded-md my-5  bg-[#304FFE] text-white "
        onClick={() => {
          capture();
        }}
      >
        Verify Face{" "}
      </button>
    </div>
  );
}

export default WebcamCapture;
