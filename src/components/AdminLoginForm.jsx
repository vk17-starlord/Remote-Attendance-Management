import React from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import UserAuth, { useUserContext } from '../context/UserAuth';

const AdminLoginForm = () => {
    const schema = Yup.object().shape({
        empId: Yup.string()
            .required("Employee ID is a required field")
        ,
        password: Yup.string()
            .required("Password is a required field")
            .min(8, "Password must be at least 8 characters"),
    });

    const navigate = useNavigate();
    const { login } = useUserContext()


    return (
        <div className='w-full h-[570px] flex lg:justify-center justify-center  '>

            <Formik
                validationSchema={schema}
                initialValues={{ empId: "", password: "" }}
                onSubmit={(values) => {
                    // Alert the input values of the form that we filled
                    const payload = { ...values }
                   
                    login(payload)
                    // console.log(values);
                    navigate('/admin/AdminDashboard');
                }}>
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <div className="login w-96 my-10 bg-white border border-gray-200 rounded-xl shadow-md  p-10 ">
                        <h1 className='font-bold mx-auto text-center my-10 text-2xl'>Admin Login </h1>
                        <div className="form ">
                            {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                            <form noValidate onSubmit={handleSubmit}>

                                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}

                                <div className="mb-6">
                                    <label htmlFor="success" className="block mb-2 text-lg font-medium text-black-500 ">Enter Admin ID</label>
                                    <input name='empId' onChange={handleChange}
                                        onBlur={handleBlur} value={values.empId} type="text" id="success" className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="Admin ID" />
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                        {errors.empId && touched.empId && errors.empId}

                                    </p>
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="success" className="block mb-2 text-lg font-medium text-black-500 ">Enter password </label>
                                    <input name='password' onChange={handleChange}
                                        onBlur={handleBlur} value={values.password} type="password" id="success" className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="password" />
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                        {errors.password && touched.password && errors.password}
                                    </p>
                                </div>
                                <button className='bg-[#304FFE] text-white w-full py-2 rounded-md font-medium' type="submit  ">Login </button>
                            </form>
                        </div>
                    </div>
                )}
            </Formik>


        </div>
    )
}

export default AdminLoginForm
