import React, { useEffect, useState } from 'react'
import { useNavigate , useParams} from 'react-router-dom';
import { Formik } from "formik";
import * as Yup from "yup";
import { CreateEmployeeData , getEmployeeByID, UpdateEmployee} from '../api/AdminAPI';
const EditEmployee = () => {







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

  });

  const navigate = useNavigate();

  // const handleDateChange = (e) => {
  //   const date = e.target.value;

  //   const maindate = new Date(date);
  //   const DATE = maindate.toISOString();
  // }

  const [employee, setemployee] = useState({
    name: '',
    empId: '',
    phone: '',
    position: '',
    salary: '',
  });
  const [showForm, setshowForm] = useState(false);

  const {id} = useParams()
  useEffect(()=>{
    
    const getData = async()=>{

      const data = await getEmployeeByID(id);
      if(data){
        const {name , empId  , position , features , joiningDate , phone , profileUrl , salary} = data;
        setemployee({name,empId,features,position,joiningDate,phone,profileUrl,salary})
        setshowForm(true)
      }
      
    }

    getData()
  },[])



  return (
    <div className='lg:w-full min-h-screen  flex lg:justify-center items-center justify-center '>
     {
    
    
      <Formik
      validationSchema={validationSchema}
      initialValues={employee}
      enableReinitialize={true} 
      onSubmit={async(values) => {
        // Alert the input values of the form that we filled

        console.log(values)
       
        const res = await UpdateEmployee(values);
        console.log(res)
        if(res.err){
          alert("Error occurred please try again!!")
        }
        else{
          alert("Employee Updated Successfully!!")
        }
        
        navigate('/admin/admindashboard')

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
      }) => (
        <div className="login my-10 bg-white border border-gray-200 rounded-xl shadow-md  p-10">
          <h1 className='font-bold mx-auto text-center my-10 text-2xl w-96'>Create Employee</h1>
          <div className="form ">
            {/* Passing handleSubmit parameter tohtml form onSubmit property */}
            <form noValidate onSubmit={handleSubmit} className="w-96 md:w- lg:w-full ">

              {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}

              <div className="mb-6">
                <label htmlFor="success" className="block mb-2 text-lg font-medium text-black-500 ">Enter Employee's ID</label>
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
                <label htmlFor="success" className="block mb-2 text-lg font-medium text-black-500 ">Enter Employee's Name </label>
                <input name='name' onChange={handleChange}
                  onBlur={handleBlur} value={values.name} type="text" id="success" className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="John Doe" />
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errors.name && touched.name && errors.name}
                </p>
              </div>
              <div className="mb-6">
                <label htmlFor="success" className="block mb-2 text-lg font-medium text-black-500 ">Enter Employee's Contact </label>
                <input name='phone' onChange={handleChange}
                  onBlur={handleBlur} value={values.phone} type="text" id="success" className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="9112233322" />
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errors.phone && touched.phone && errors.phone}
                </p>
              </div>
              <div className="mb-6">
                <label htmlFor="success" className="block mb-2 text-lg font-medium text-black-500 ">Enter Employee's Position </label>
                <input name='position' onChange={handleChange}
                  onBlur={handleBlur} value={values.position} type="text" id="success" className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="SDE-1" />
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errors.position && touched.position && errors.position}
                </p>
              </div>
              <div className="mb-6">
                <label htmlFor="success" className="block mb-2 text-lg font-medium text-black-500 ">Enter Employee's Salary </label>
                <input name='salary' onChange={handleChange}
                  onBlur={handleBlur} value={values.salary} type="text" id="success" className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="40000" />
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errors.salary && touched.salary && errors.salary}
                </p>
              </div>
 
              <button className='bg-[#304FFE] text-white w-full py-2 rounded-md font-medium' type="submit">Update Employee</button>
            </form>
          </div>
        </div>
      )}
    </Formik> 
     }
    </div>
  )
}

export default EditEmployee