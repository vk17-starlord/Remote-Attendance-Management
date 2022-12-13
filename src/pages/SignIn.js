import React from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import { useGeolocated } from "react-geolocated";

function SignIn() {

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
 
  useGeolocated({
      positionOptions: {
          enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
  });


  const schema = Yup.object().shape({
    EmployeeID: Yup.string()
      .required("Employee ID is a required field")
    ,
    Password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
  });
  const navigate = useNavigate()
  return (
     <div className='w-full min-h-screen grid-cols-1 grid md:grid-cols-2'>
        
      {
        !isGeolocationAvailable ? <div className='w-screen z-50 flex-col fixed min-h-screen bg-white flex justify-center items-center'>
        
        <img className='w-[30vw] object-cover h-[30vw] rounded-full' src="https://cdn.dribbble.com/users/945601/screenshots/14570188/media/086d0d7dbdaead7a762fa1f442e50616.png?compress=1&resize=1200x900&vertical=top" alt="" />
       <h1>Your Browser Doesn't Support Geolocation !! Please Use Another Browser</h1>
        </div>:null
      }  

      <div className="col text-white  bg-[#3c37ff] flex justify-between items-start flex-col p-10 w-full min-h-screen">

        <div className="flex justify-start items-center">
          <i className='bx bxl-d/ev-to text-3xl'></i>
          <p> Capture It ! </p>
        </div>

        
        <div className="text">
          <h1 className='text-3xl font-bold uppercase'>Remote Attendance Management System</h1>
          <p className='text-white/70 my-5'>We have developed a cutting-edge attendance recorder. Using face recognition, you can easily record attendance and have access to in-depth analysis and a wide range of functionalities. </p>
        </div>

        <div className="comment bg-dark-primary md:w-9/12 w-6/12 px-10 py-5 mx-auto rounded-md">
          <p className='mb-5'>State of art attendance recorder.Hassle free attendance recording using face recognation</p>
          <div className="profile flex">
            <img src="https://media.sketchfab.com/models/7b9a05ad2bfc42eca59141d550a868e2/thumbnails/c0a545aba25e4fc1a27a040429227266/cd1f9baf456146ab948056ff64f83b51.jpeg" className='w-12 object-cover h-12 rounded-full' alt="profile" />
            <div className="txt">
              <h3 className='ml-5'>John Doe</h3>
              <h3 className='ml-5 text-white/70'>Software Engineer</h3>

            </div>
          </div>
        </div>
      </div>

      <div className="col md:w-full min-h-screen flex justify-center items-center ">
        <div className=" mx-auto justify-center w-96">
          <h1 className='font-bold text-3xl my-5 text-center'> Sign In </h1>
          <Formik
            validationSchema={schema}
            initialValues={{ EmployeeID: "", Password: "" }}
            onSubmit={(values) => {
              // Alert the input values of the form that we filled
      
              const payload = {...values,coords}
              console.log(payload)
              navigate('/faceauth')
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <div className="login ">
                {/* <h1 className='font-bold mx-auto text-center my-10 text-2xl'>Login </h1> */}
                <div className="form ">
                  {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                  <form noValidate onSubmit={handleSubmit}>

                    {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}

                    <div class="mb-6">
                      <label for="success" class="block mb-2 text-lg font-medium text-black-500 ">Enter  Employee ID</label>
                      <input name='EmployeeID' onChange={handleChange}
                        onBlur={handleBlur} value={values.EmployeeID} type="text" id="success" class="bg-gray-50 border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="e.g EIA127538234" />
                      <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                        {errors.EmployeeID && touched.EmployeeID && errors.EmployeeID}

                      </p>
                    </div>

                    <div class="mb-6">
                      <label for="success" class="block mb-2 text-lg font-medium text-black-500 ">Enter Password </label>
                      <input name='Password' onChange={handleChange}
                        onBlur={handleBlur} value={values.Password} type="password" 
                        id="success" class="bg-gray-50 border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="e.g YourPass@1234" />
                      <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                        {errors.Password && touched.Password && errors.Password}
                      </p>
                    </div>
                    <button className='bg-[#304FFE] text-white w-full py-2 rounded-md font-medium' type="submit  ">Login To My Account</button>
                  </form>
                </div>
              </div>
            )}
          </Formik>
        </div>
       </div>
     </div>
  )
  
}

export default SignIn