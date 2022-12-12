import React from 'react'
import AdminNavbar from '../components/AdminNavbar';
import { useNavigate } from 'react-router-dom';
function AdminDashboard() {

  const navigate = useNavigate();
  const ToEmployeCreate = () => {
    navigate('/admin/AdminDashboard/CreateEmployeForm')
  }

  return (
    <>
      <AdminNavbar />
      <div className='w-11/12 mx-auto my-10 '>
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Employee" required />
          <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
        </div>
      </div>

      <div className='w-11/12 mx-auto min-h-screen flex justify-center mt-4 '>

        <div className="overflow-x-auto relative w-full  px-2 sm:px-4 py-2.5">
          <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 ">
              <tr className=''>
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
              <tr className="bg-white border-b font-[600]  ">
                <th scope="row" className="font-medium  py-4 px-6  text-gray-900 whitespace-nowrap ">
                  1
                </th>
                <td className="py-4 px-6 flex items-center ">
                  <img className="w-8 h-8 rounded-full" src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-1024.png" alt="" />
                  <span className='ml-2 '>Gaurav Misal</span>

                </td>
                <td className="py-4 px-6 ">
                  $2999
                </td>
                <td className="py-4 px-6 ">
                  SDE-1
                </td>
                <td className="py-4 px-6 ">
                  9112738470
                </td>
                <td className="py-4 px-6 ">
                  1-6-22
                </td>
                <td className="py-4 px-6 ">
                  <a href="/" className="font-[600] text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
              </tr>
              <tr className="bg-white font-[600] border-b ">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                  2
                </th>
                <td className="py-4 px-6 flex items-center">
                  <img className="w-8 h-8 rounded-full" src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/man_male_avatar_portrait-1024.png" alt="" />
                  <span className='ml-2'>Vinit Khollam</span>
                </td>
                <td className="py-4 px-6">
                  $8999
                </td>
                <td className="py-4 px-6">
                  SDE-2
                </td>
                <td className="py-4 px-6">
                  7821939932
                </td>
                <td className="py-4 px-6">
                  2-4-22
                </td>
                <td className="py-4 px-6">
                  <a href="/" className="font-[600] text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
              </tr>
              <tr className="bg-white font-[600]">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                  3
                </th>
                <td className="py-4 px-6 flex items-center">
                  <img className="w-8 h-8 rounded-full" src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/boy_male_avatar_portrait-1024.png" alt="" />
                  <span className='ml-2'>Vedant Gandhi</span>
                </td>
                <td className="py-4 px-6">
                  $5000
                </td>
                <td className="py-4 px-6">
                  SDE-3
                </td>
                <td className="py-4 px-6">
                  8911338673
                </td>
                <td className="py-4 px-6">
                  3-10-22
                </td>
                <td className="py-4 px-6">
                  <a href="/" className="font-[600] text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='justify-center  flex mb-2'>
        <button onClick={ToEmployeCreate} type="button" className="fixed right-10 bottom-10 text-blue-700 border border-blue-700 bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-5 text-center inline-flex items-center ">

        <i class='bx bx-plus  text-blue-200'></i>
              </button>
      </div>
    </>
  )
}

export default AdminDashboard