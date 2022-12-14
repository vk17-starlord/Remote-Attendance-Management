import React, { useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import axios from "axios";
import DeleteEmployee from "../components/DeleteEmployee";




function AdminDashboard() {
  const navigate = useNavigate();
  const ToEmployeCreate = () => {
    navigate("/admin/AdminDashboard/CreateEmployeForm");
  };

  function handleEdit() {

  }

  // get data from server
  // const [loading, setloading] = useState(false);
  // const [error, seterror] = useState(null);

  const [EmployeeData, setEmployeeData] = useState([
    {
      id: 1,
      empname: "Gaurav Misal",
      empsalary: "20000",
      position: "Frontend Developer",
      contact: 50000,
      joinDate: "11-2-2022",
      profile:
        "https://images.pexels.com/photos/3483800/pexels-photo-3483800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      empname: "Ishan Khirsagar",
      empsalary: "20000",
      position: "Data Scientist",
      contact: 100000,
      joinDate: "11-2-2022",
      profile:
        "https://images.pexels.com/photos/3483800/pexels-photo-3483800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      empname: "Vinit Khollam",
      empsalary: "20000",
      position: "Frontend Developer",
      contact: 800000,
      joinDate: "11-2-2022",
      profile:
        "https://images.pexels.com/photos/3483800/pexels-photo-3483800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      empname: "Abbas Pathan",
      empsalary: "200000",
      position: "Backend Developer",
      contact: 50000,
      joinDate: "11-2-2022",
      profile:
        "https://images.pexels.com/photos/3483800/pexels-photo-3483800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 5,
      empname: "Vedant Gandhi",
      empsalary: "20000",
      position: "Fullstack Developer",
      contact: 50000,
      joinDate: "11-2-2022",
      profile:
        "https://images.pexels.com/photos/3483800/pexels-photo-3483800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 6,
      empname: "Shivam Mishra",
      empsalary: "200000",
      position: "Blockchain Developer",
      contact: 50000,
      joinDate: "11-2-2022",
      profile:
        "https://images.pexels.com/photos/3483800/pexels-photo-3483800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    }
  ]);

  // useEffect(() => {
  //   // setloading(true);
  //   axios.get('http://localhost:3001/employees')
  //     .then((res) => {
  //     setEmployeeData(res.data);
  //       console.log(res.data);
  //       // setloading(false);
  //     })
  //     .catch((err) => {
  //       // seterror(err);
  //       // setloading(false);
  //     })
  // }, [])

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
          >
            Search
          </button>
        </div>
      </div>

      <div className="w-11/12 mx-auto min-h-screen flex justify-center mt-4 ">
        <div className="overflow-x-auto relative w-full  px-2 sm:px-4 py-2.5">
          <table className="w-[1370px] text-sm text-left text-gray-600 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 ">
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
                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {EmployeeData.map((emp) => {
                return (
                  <tr className="bg-white border-b font-[600] " key={emp.id}>
                    <th
                      scope="row"
                      className="font-medium  py-4 px-6  text-gray-900 whitespace-nowrap "
                    >
                      {emp.id}
                    </th>
                    <td className="py-4 px-6 flex items-center ">
                      <img
                        className="w-10 h-10 mx-2 rounded-full"
                        src={emp.profile}
                        alt=""
                      />
                      <span className="ml-2 ">{emp.empname}</span>
                    </td>
                    <td className="py-4 px-6 ">${emp.empsalary}</td>
                    <td className="py-4 px-6 ">{emp.position}</td>
                    <td className="py-4 px-6 ">{emp.contact}</td>
                    <td className="py-4 px-6 ">{emp.joinDate}</td>
                    <td className="py-4 px-6 ">

                      <button onClick={() => {
                         console.log("edit");
                         navigate(`/admin/AdminDashboard/EditEmployee/${emp.id}`)
                      }} className="w-12 h-12 rounded-full bg-blue-500">
                        <i className='bx bx-edit text-xl text-white'></i>
                      </button>

                      <button className="w-12 mx-5 h-12 rounded-full bg-red-500">
                        <i className='bx bxs-trash text-white text-xl'></i>                      </button>

                      <button onClick={() => {
                        navigate(`/employeeDetail/${emp.id}`)
                      }} className="w-12  h-12 rounded-full bg-green-700">
                        <i className='bx bxs-user-detail  text-xl  text-white'></i></button>

                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="justify-center  flex mb-2">
        <button
          onClick={ToEmployeCreate}
          type="button"
          className="fixed right-10 bottom-10 text-blue-700 border border-blue-700 bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-5 text-center inline-flex items-center "
        >
          <i className="bx bx-plus  text-blue-200"></i>
        </button>
      </div>
    </>
  );
}

export default AdminDashboard;
