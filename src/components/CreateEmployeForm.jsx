import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Formik, FormikContext, useFormikContext  } from "formik";
import * as Yup from "yup";

const CreateEmployeForm = () => {
  const validationSchema = Yup.object({
    EmpName: Yup
      .string('Enter Name')
      .required('Name is required'),
    EmpId: Yup
      .string('Enter ID')
      .required('EmpId is required'),
    EmpContact: Yup
      .string('Enter Contact')
      .required('Contact is required'),
    EmpPosition: Yup
      .string('Enter Position')
      .required('Position is required'),
    EmpSalary: Yup
      .number('Enter Salary')
      .required('Salary is required'),
    EmpJoinDate: Yup
      .date('Enter JoinDate')
      .required('JoinDate is required'),
    // EmpPhoto: Yup
    //   .string('Enter Photo')
    //   .required('Photo is required'),


  });

  const navigate = useNavigate();


  return (
    <div className='lg:w-full min-h-screen  flex lg:justify-center items-center justify-center '>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          EmpName: '',
          EmpId: '',
          EmpContact: '',
          EmpPosition: '',
          EmpSalary: '',
          EmpJoinDate: '',
          EmpPhoto: "",
          

        }}
        onSubmit={(values) => {
          // Alert the input values of the form that we filled
          alert(JSON.stringify(values));
          navigate('/admin/AdminDashboard')
        }}
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
                  <label for="success" className="block mb-2 text-lg font-medium text-black-500 ">Enter Employee's ID</label>
                  <input name='EmpId' onChange={handleChange}
                    onBlur={handleBlur} value={values.EmpId} type="text" id="success" className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="JohnDoe123" />
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.EmpId
                      && touched.EmpId
                      && errors.EmpId
                    }
                  </p>
                </div>
                <div className="mb-6 ">
                  <label for="success" className="block mb-2 text-lg font-medium text-black-500 ">Enter Employee's Name </label>
                  <input name='EmpName' onChange={handleChange}
                    onBlur={handleBlur} value={values.EmpName} type="text" id="success" className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="John Doe" />
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.EmpName && touched.EmpName && errors.EmpName}
                  </p>
                </div>
                <div className="mb-6">
                  <label for="success" className="block mb-2 text-lg font-medium text-black-500 ">Enter Employee's Contact </label>
                  <input name='EmpContact' onChange={handleChange}
                    onBlur={handleBlur} value={values.EmpContact} type="text" id="success" className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="9112233322" />
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.EmpContact && touched.EmpContact && errors.EmpContact}
                  </p>
                </div>
                <div className="mb-6">
                  <label for="success" className="block mb-2 text-lg font-medium text-black-500 ">Enter Employee's Position </label>
                  <input name='EmpPosition' onChange={handleChange}
                    onBlur={handleBlur} value={values.EmpPosition} type="text" id="success" className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="SDE-1" />
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.EmpPosition && touched.EmpPosition && errors.EmpPosition}
                  </p>
                </div>
                <div className="mb-6">
                  <label for="success" className="block mb-2 text-lg font-medium text-black-500 ">Enter Employee's Salary </label>
                  <input name='EmpSalary' onChange={handleChange}
                    onBlur={handleBlur} value={values.EmpSalary} type="text" id="success" className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="40000" />
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.EmpSalary && touched.EmpSalary && errors.EmpSalary}
                  </p>
                </div>
                <div className="mb-6">
                  <label for="success" className="block mb-2 text-lg font-medium text-black-500 ">Enter Employee's Join Date </label>
                  <input name='EmpJoinDate' onChange={handleChange}
                    onBlur={handleBlur} value={values.EmpJoinDate} type="date" id="success" className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="2021-08-01" />
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.EmpJoinDate && touched.EmpJoinDate && errors.EmpJoinDate}
                  </p>
                </div>


<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" HTMLfor="file_input">Upload file</label>
<input onChange={(ev)=>{
const file = ev.target.files[0];
const reader = new FileReader();
reader.onloadend = () => {
    console.log(reader.result);
setFieldValue("EmpPhoto",reader.result.toString())
    // Logs data:<type>;base64,wL2dvYWwgbW9yZ...
};

reader.readAsDataURL(file);
}} class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 " aria-describedby="file_input_help" id="file_input" type="file"/>
<p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>


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