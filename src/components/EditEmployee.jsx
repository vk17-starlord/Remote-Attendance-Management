import React from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditEmployee = () => {

    const [employee, setEmployee] = useState([]);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(null);
    const { id } = useParams()

    useEffect(() => {
        setloading(true);
        axios.get(`http://localhost:5000/employee/${id}`)
            .then((res) => {
                console.log(res.data);
                setEmployee(res.data);
                setloading(false);
            })
            .catch((err) => {
                seterror(err);
                setloading(false);
            })
    }, [])
    const schema = Yup.object().shape({
        name: Yup
            .string('Enter Name'),
        empId: Yup
            .string('Enter ID'),
        phone: Yup
            .string('Enter Contact'),
        position: Yup
            .string('Enter Position'),
        salary: Yup
            .number('Enter Salary'),
        password: Yup
            .string('Enter Password'),
        joiningDate: Yup
            .date('Enter JoinDate'),
        profileImage: Yup
            .string('Enter Photo'),
    });

    return (
        <div className="w-full flex lg:justify-center justify-center">
            <Formik
                validationSchema={schema}
                initialValues={{
                    // there is something wrong in initial values while updating
                    name: employee.name,
                    empId: employee.empId,
                    phone: employee.phone,
                    position: employee.position,
                    salary: employee.salary,
                    joiningDate: employee.joiningDate,
                    profileImage: employee.profileImage,
                    password: employee.password,
                }}
                onSubmit={(values) => {
                    console.log("Values before update")
                    console.log(values);
                    axios.put(`http://localhost:5000/employees/${id}`, {
                        data: values

                    })
                        .then((res) => {
                            console.log(res);
                            console.log("Employee Updated Successfully");
                        })
                        .catch((err) => {
                            console.log(err);
                            console.log("Employee Not Updated");
                        })
                }}>
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
                        <h1 className='font-bold mx-auto text-center my-10 text-2xl w-96'>Edit Employee</h1>
                        <div className="form ">
                            <form noValidate onSubmit={handleSubmit} className="w-96 md:w- lg:w-full ">
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
                                <div className="mb-6">
                                    <label htmlFor="success" className="block mb-2 text-lg font-medium text-black-500 ">Enter Employee's Password</label>
                                    <input name='password' onChange={handleChange}
                                        onBlur={handleBlur} value={values.password} type="password" id="success" className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="40000" />
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                        {errors.password && touched.password && errors.password}
                                    </p>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="success" className="block mb-2 text-lg font-medium text-black-500 ">Enter Employee's Join Date </label>
                                    <input name='joiningDate'
                                        value={values.joiningDate}
                                        onChange={(e) => {
                                            const maindate = new Date(e.target.value);
                                            const DATE = maindate.toISOString();
                                            console.log(DATE.toString());
                                            setFieldValue('joiningDate', DATE);

                                        }}
                                        onBlur={handleBlur} type="date" id="success" className=" border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 " placeholder="2021-08-01" />
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                        {errors.joiningDate && touched.joiningDate && errors.joiningDate}
                                    </p>
                                </div>


                                <label className="block mb-2 text-lg font-medium text-black-500 " htmlFor="file_input">Upload file</label>
                                <input onChange={(ev) => {
                                    const MAX_FILE_SIZE = 5120 // 5MB
                                    const file = ev.target.files[0];
                                    const fileSizeKiloBytes = file.size / 1024;
                                    console.log(fileSizeKiloBytes);
                                    if (fileSizeKiloBytes <= MAX_FILE_SIZE) {
                                        setFieldValue("profileImage", file)
                                    };
                                }} className="p-3 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer  " aria-describedby="file_input_help" id="file_input" type="file" />
                                <p className="mt-1 mb-4 text-[13px] text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                                <button className='bg-[#304FFE] text-white w-full py-2 rounded-md font-medium' type="submit">Edit Employee</button>
                            </form>
                        </div>
                    </div>
                )}
            </Formik>
        </div >
    )
}

export default EditEmployee