import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Formik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from 'react';
import axios from 'axios';



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
    EmpPassword: Yup
      .string('Enter Password')
      .required('Password is required'),
    EmpJoinDate: Yup
      .date('Enter JoinDate')
      .required('JoinDate is required'),
    EmpPhoto: Yup
      .string('Enter Photo')
      .required('Photo is required'),
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
          EmpPassword: ""
        }}
        onSubmit={(values) => {
          // Alert the input values of the form that we filled
          // alert(JSON.stringify(values));
          console.log(values)
          axios.post('http://localhost:3001/employee/register', values, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
            .then(res => {
              console.log(res)
              navigate('/admin/AdminDashboard')
            }
            )
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
                  <label htmlfor="success" className="block mb-2 text-lg font-medium text-black-500 ">Enter Employee's Name </label>
                  <input name='EmpName' onChange={handleChange}
                    onBlur={handleBlur} value={values.EmpName} type="text" id="success" className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="John Doe" />
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.EmpName && touched.EmpName && errors.EmpName}
                  </p>
                </div>
                <div className="mb-6">
                  <label htmlfor="success" className="block mb-2 text-lg font-medium text-black-500 ">Enter Employee's Contact </label>
                  <input name='EmpContact' onChange={handleChange}
                    onBlur={handleBlur} value={values.EmpContact} type="text" id="success" className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="9112233322" />
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.EmpContact && touched.EmpContact && errors.EmpContact}
                  </p>
                </div>
                <div className="mb-6">
                  <label htmlfor="success" className="block mb-2 text-lg font-medium text-black-500 ">Enter Employee's Position </label>
                  <input name='EmpPosition' onChange={handleChange}
                    onBlur={handleBlur} value={values.EmpPosition} type="text" id="success" className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="SDE-1" />
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.EmpPosition && touched.EmpPosition && errors.EmpPosition}
                  </p>
                </div>
                <div className="mb-6">
                  <label htmlfor="success" className="block mb-2 text-lg font-medium text-black-500 ">Enter Employee's Salary </label>
                  <input name='EmpSalary' onChange={handleChange}
                    onBlur={handleBlur} value={values.EmpSalary} type="text" id="success" className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="40000" />
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.EmpSalary && touched.EmpSalary && errors.EmpSalary}
                  </p>
                </div>
                <div className="mb-6">
                  <label htmlfor="success" className="block mb-2 text-lg font-medium text-black-500 ">Enter Employee's Password</label>
                  <input name='EmpPassword' onChange={handleChange}
                    onBlur={handleBlur} value={values.EmpPassword} type="password" id="success" className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="Password" />
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.EmpPassword && touched.EmpPassword && errors.EmpPassword}
                  </p>
                </div>
                <div className="mb-6">
                  <label htmlfor="success" className="block mb-2 text-lg font-medium text-black-500 ">Enter Employee's Join Date </label>
                  <input name='EmpJoinDate'
                    value={values.EmpJoinDate}
                    onChange={(e) => {
                      const maindate = new Date(e.target.value);
                      const DATE = maindate.toISOString();
                      console.log(DATE.toString());
                      setFieldValue('EmpJoinDate', DATE);

                    }}
                    onBlur={handleBlur} type="date" id="success" className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="2021-08-01" />
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.EmpJoinDate && touched.EmpJoinDate && errors.EmpJoinDate}
                  </p>
                </div>
                <label className="block mb-2 text-lg font-medium text-black-500 " htmlfor="file_input">Upload file</label>
                <input onChange={(ev) => {

                  const MAX_FILE_SIZE = 5120 // 5MB
                  const file = ev.target.files[0];
                  const fileSizeKiloBytes = file.size / 1024;
                  console.log(fileSizeKiloBytes);

                  if (fileSizeKiloBytes <= MAX_FILE_SIZE) {
                    setFieldValue("EmpPhoto", file)
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