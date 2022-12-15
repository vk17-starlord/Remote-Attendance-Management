import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Formik } from "formik";
import * as Yup from "yup";
import { CreateEmployeeData } from '../api/AdminAPI';
const CreateEmployeForm = () => {



  // const [employees, setEmployees] = useState([])

  // useEffect(() => {
  //   axios.get('http://localhost:3001/employees')

  //     .then(res => {
  //       console.log(res)
  //       setEmployees(res.data)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }, [])





  const validationSchema = Yup.object({
    name: Yup
      .string('Enter Name')
      .required('Name is required'),
    empId: Yup
      .string('Enter ID')
      .required('empId is required'),
    phone: Yup
      .string('Enter Contact')
      .required('Contact is required'),
    position: Yup
      .string('Enter Position')
      .required('Position is required'),
    salary: Yup
      .number('Enter Salary')
      .required('Salary is required'),
    password: Yup
      .string('Enter Password')
      .required('Password is required'),
    joiningDate: Yup
      .date('Enter JoinDate')
      .required('JoinDate is required'),
    profileImage: Yup
      .string('Enter Photo')
      .required('Photo is required'),
  });

  const navigate = useNavigate();

  // const handleDateChange = (e) => {
  //   const date = e.target.value;

  //   const maindate = new Date(date);
  //   const DATE = maindate.toISOString();
  // }

  return (
    <div className='lg:w-full min-h-screen  flex lg:justify-center items-center justify-center '>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          name: '',
          empId: '',
          phone: '',
          position: '',
          salary: '',
          joiningDate: '',
          profileImage: "",
          password: ""

        }}
        onSubmit={async(values) => {
          // Alert the input values of the form that we filled
          console.log(values)
          const res = await CreateEmployeeData(values)
          console.log(res)
          if(res.error){
            alert("Error occurred please try again")
          }else{
            alert("Employee Created Successfully !!")
            navigate("/admin/admindashboard")
          }

        }
        }
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,

        }) => (
          <div className="login my-10 bg-white border border-gray-200 rounded-xl shadow-md  p-10">
            <h1 className='font-bold mx-auto text-center my-10 text-2xl w-96'>Create Employee</h1>
            <div className="form ">
              {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <form noValidate onSubmit={handleSubmit} className="w-96 md:w- lg:w-full ">

                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}

                <div className="mb-6">
                  <label htmlfor="success" className="block mb-2 text-lg font-medium text-black-500 ">Enter Employee's ID</label>
                  <input name='empId' onChange={handleChange}
                    onBlur={handleBlur} value={values.empId} type="text" id="success" className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="JohnDoe123" />
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.empId
                      && touched.empId
                      && errors.empId
                    }
                  </p>
                </div>
                <div className="mb-6 ">
                  <label htmlfor="success" className="block mb-2 text-lg font-medium text-black-500 ">Enter Employee's Name </label>
                  <input name='name' onChange={handleChange}
                    onBlur={handleBlur} value={values.name} type="text" id="success" className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="John Doe" />
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.name && touched.name && errors.name}
                  </p>
                </div>
                <div className="mb-6">
                  <label htmlfor="success" className="block mb-2 text-lg font-medium text-black-500 ">Enter Employee's Contact </label>
                  <input name='phone' onChange={handleChange}
                    onBlur={handleBlur} value={values.phone} type="text" id="success" className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="9112233322" />
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.phone && touched.phone && errors.phone}
                  </p>
                </div>
                <div className="mb-6">
                  <label htmlfor="success" className="block mb-2 text-lg font-medium text-black-500 ">Enter Employee's Position </label>
                  <input name='position' onChange={handleChange}
                    onBlur={handleBlur} value={values.position} type="text" id="success" className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="SDE-1" />
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.position && touched.position && errors.position}
                  </p>
                </div>
                <div className="mb-6">
                  <label htmlfor="success" className="block mb-2 text-lg font-medium text-black-500 ">Enter Employee's Salary </label>
                  <input name='salary' onChange={handleChange}
                    onBlur={handleBlur} value={values.salary} type="text" id="success" className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="40000" />
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.salary && touched.salary && errors.salary}
                  </p>
                </div>
                <div className="mb-6">
                  <label htmlfor="success" className="block mb-2 text-lg font-medium text-black-500 ">Enter Employee's Password</label>
                  <input name='password' onChange={handleChange}
                    onBlur={handleBlur} value={values.password} type="password" id="success" className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="40000" />
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.password && touched.password && errors.password}
                  </p>
                </div>
                <div className="mb-6">
                  <label htmlfor="success" className="block mb-2 text-lg font-medium text-black-500 ">Enter Employee's Join Date </label>
                  <input name='joiningDate'
                    value={values.joiningDate}
                    onChange={(e) => {
                      const maindate = new Date(e.target.value);
                      const DATE = maindate.toISOString();
                      setFieldValue('joiningDate', DATE);

                    }}
                    onBlur={handleBlur} type="date" id="success" className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="2021-08-01" />
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.joiningDate && touched.joiningDate && errors.joiningDate}
                  </p>
                </div>


                <label className="block mb-2 text-lg font-medium text-black-500 " htmlfor="file_input">Upload file</label>
                <input onChange={(ev) => {
                  const MAX_FILE_SIZE = 5120 // 5MB
                  const file = ev.target.files[0];
                  const fileSizeKiloBytes = file.size / 1024;
                  console.log(fileSizeKiloBytes);
                  if (fileSizeKiloBytes <= MAX_FILE_SIZE) {
                    setFieldValue("profileImage", file)
                  };
                }} className="p-3 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer  " aria-describedby="file_input_help" id="file_input" type="file" />
                <p class="mt-1 mb-4 text-[13px] text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>


                <button className='bg-[#304FFE] text-white w-full py-2 rounded-md font-medium' type="submit">Create Employee</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  )
}

export default CreateEmployeForm