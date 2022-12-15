import React, { useMemo, useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import { useEffect } from "react";
import { getEmployees } from "../api/AdminAPI";
import { Link, useNavigate } from "react-router-dom";
import { useAllEmployeeContext } from "../context/EmployeeAuth";
import { SearchByName } from "../api/AdminAPI";




function AdminDashboard() {

  const navigate = useNavigate()

  const { AllEmployees, DeleteEmployee, RefreshData, UpdateEmployees } = useAllEmployeeContext();


  useMemo(() => {
    const getData = async () => {
      const data = RefreshData()
      return data;
    }
    getData()
  }, [])






  return (
    <>
      <AdminNavbar />
      <div className="w-11/12 mx-auto my-10 ">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only "
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Search Employee"
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
            onClick={
              () => {
                const value = document.getElementById("default-search").value;
                SearchByName(value)
                console.log(value)

              }
            }
          >
            Search
          </button>
        </div>
      </div>

      <div className="w-11/12 mx-auto min-h-max flex justify-center mt-4 ">
        <div className="overflow-x-auto relative w-full  px-2 sm:px-4 py-3 bg-[#f8f9fa] rounded-md shadow-lg">
          <table className="w-[1370px] min-h-max text-sm text-left ">
            <thead className="text-xxl font-bold text-gray-700 uppercase  ">
              <tr className="">
                <th scope="col" className="py-3 px-6 ">
                  Employee ID
                </th>
                <th scope="col" className="py-3 px-6">
                  Employee Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Employee Salary
                </th>
                <th scope="col" className="py-3 px-6">
                  Employee Position
                </th>
                <th scope="col" className="py-3 px-6">
                  Employee Contact
                </th>
                <th scope="col" className="py-3 px-6">
                  Employee Join Date
                </th>
                <th scope="col" className="py-3 px-6 ml-2">

                  <p className="ml-[70px]">Actions</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {AllEmployees?.map((emp) => {
                return (
                  <tr className="bg-white border-b font-[600]" key={emp.empId}>
                    <th
                      scope="row"
                      className="font-[600] py-4 px-6  text-gray-900 whitespace-nowrap "
                    >
                      {emp.empId}
                    </th>
                    <td className="py-9 pr-6 flex items-center justify-start">
                      <img
                        className="w-10 h-10  rounded-full"
                        src={emp.profileUrl}
                        alt=""
                      />
                      <span className="ml-2">{emp.name}</span>
                    </td>
                    <td className="py-4 px-6 ">${emp.salary}</td>
                    <td className="py-4 px-6 ">{emp.position}</td>
                    <td className="py-4 px-6 ">{emp.phone}</td>
                    <td className="py-4 px-6 ">{emp.joiningDate.substring(0, 10)}</td>
                    <td className="py-4 px-5 ">

                      <button onClick={() => {
                        console.log("edit");
                        navigate(`/admin/AdminDashboard/EditEmployee/${emp.empId}`)
                      }} className="w-11 h-11 rounded-full bg-blue-500">
                        <i className='bx bx-edit text-xl text-white'></i>
                      </button>

                      <button

                        onClick={() => {

                          DeleteEmployee(emp.empId)


                        }}
                        className="w-11 mx-5  h-11 rounded-full bg-red-500">
                        <i className='bx bxs-trash text-white text-xl'></i></button>

                      <button onClick={() => {
                        navigate(`/employeeDetail/${emp.empId}`)
                      }} className="w-11  h-11 rounded-full bg-green-700">
                        <i className='bx bxs-user-detail  text-xl  text-white'></i></button>

                      {/* /admin/AdminDashboard/ResetPassword */}
                      <button onClick={() => {
                        navigate(`/admin/AdminDashboard/ResetPassword/${emp.empId}`)
                      }} className=" ml-5  w-12 h-12 rounded-full bg-blue-400 ">
                        <i className='bx bx-lock-alt text-white'></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="justify-center  flex mb-2">
        <Link to={"/admin/AdminDashboard/CreateEmployeForm"}>
          <button
            // onClick={ToEmployeCreate}
            type="button"
            className="fixed right-10 bottom-10 text-blue-700 border border-blue-700 bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-5 text-center inline-flex items-center "
          >
            <i className="bx bx-plus  text-blue-200"></i>
          </button>
        </Link>
      </div>
    </>
  );
}

export default AdminDashboard;
