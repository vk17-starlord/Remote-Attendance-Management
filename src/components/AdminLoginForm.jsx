import React from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';


const AdminLoginForm = () => {
    const schema = Yup.object().shape({
        EmployeeID: Yup.string()
            .required("Employee ID is a required field")
        ,
        Password: Yup.string()
            .required("Password is a required field")
            .min(8, "Password must be at least 8 characters"),
    });

    const navigate = useNavigate();

    return (
        <div className='w-full min-h-screen flex lg:justify-center justify-center  '>

            <Formik
                validationSchema={schema}
                initialValues={{ EmployeeID: "", Password: "" }}
                onSubmit={(values) => {
                    // Alert the input values of the form that we filled
                
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
                    <div className="login w-96 my-10 bg-white border border-gray-200 rounded-xl shadow-md  p-10 ">
                        <h1 className='font-bold mx-auto text-center my-10 text-2xl'>Admin Login </h1>
                        <div className="form ">
                            {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                            <form noValidate onSubmit={handleSubmit}>

                                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}

                                <div class="mb-6">
                                    <label for="success" class="block mb-2 text-lg font-medium text-black-500 ">Enter Admin ID</label>
                                    <input name='EmployeeID' onChange={handleChange}
                                        onBlur={handleBlur} value={values.EmployeeID} type="text" id="success" class=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="Admin ID" />
                                    <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                                        {errors.EmployeeID && touched.EmployeeID && errors.EmployeeID}

                                    </p>
                                </div>

                                <div class="mb-6">
                                    <label for="success" class="block mb-2 text-lg font-medium text-black-500 ">Enter Password </label>
                                    <input name='Password' onChange={handleChange}
                                        onBlur={handleBlur} value={values.Password} type="password" id="success" class=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="Password" />
                                    <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                                        {errors.Password && touched.Password && errors.Password}
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
