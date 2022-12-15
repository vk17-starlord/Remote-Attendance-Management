import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import { clearInterval, setInterval } from "worker-timers";
import { useUserContext } from "../../context/UserAuth";
import { baseURL, headers } from "../../api/config";
import { useGeolocated } from "react-geolocated";
const videoConstraints = {
  width: 500,
  height: 500,
  facingMode: "user",
};

function DashboardWebcam({ images, setimages }) {

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =

    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  const webcamRef = React.useRef(null);

  const { user } = useUserContext();
  const [startTimer, setstartTimer] = useState(false);
  const navigate = useNavigate();
  const [timerID, settimerID] = useState(null);

  const [interval, setinterval] = useState(5000);

  const toggleTimer = () => {
    setstartTimer(!startTimer);
  };

  const closeTimer = (id) => {
    if (timerID) {
      toggleTimer();
      clearInterval(timerID);
      navigate("/");
    }
  };

  

  useEffect(() => {
    const VerifyFace = (imgSrc) => {
      const payload = {
        empId: user.empId,
        image: imgSrc,
        cords:"location" 
      };
  
      axios
        .post(`${baseURL}/employee/verify-capture`, payload,{headers:headers})
        .then((ele) => {
        }).catch((err) => {
          alert("Error occurred")
          navigate("/");
        });
    };

    if (startTimer) {
      var intervalId = setInterval(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        VerifyFace(imageSrc)
      }, interval);

      settimerID(intervalId);
    }

    return () => {
     closeTimer()
    };
  }, [webcamRef, startTimer , interval]);

  return (
    <div className="w-full mx-auto flex justify-center items-center flex-col">
      <div className="webcam-container bg-gray-100 rounded-md p-5 my-10">
        <Webcam
          audio={false}
          height={400}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={400}
          videoConstraints={videoConstraints}
        />
      </div>

      {startTimer === false ? (
        <button
          onClick={() => toggleTimer()}
          className="bg-[#304FFE] text-white w-max px-20 py-2 rounded-md font-medium"
        >
          Start My Work
          <i class="bx bxs-briefcase  mx-2 align-baseline"></i>
        </button>
      ) : (
        <button
          onClick={() => {
            closeTimer();
          }}
          className="w-max px-10 rounded-md py-2 text-[#FFF6F8] bg-[#F50057] my-5"
        >
          End My Work <i class="bx mx-2 bxs-briefcase align-middle"></i>
        </button>
      )}
    </div>
  );
}

export default DashboardWebcam;
