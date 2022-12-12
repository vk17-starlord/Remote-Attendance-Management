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
      <div className='w-full min-h-screen flex justify-center items-center '>

        <div className="overflow-x-auto relative w-full  px-2 sm:px-4 py-2.5">
          <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-800 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
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
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  1
                </th>
                <td className="py-4 px-6 flex items-center">
                  <img className="w-8 h-8 rounded-full" src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-1024.png" alt="" />
                  <span className='ml-2'>Gaurav Misal</span>

                </td>
                <td className="py-4 px-6">
                  $2999
                </td>
                <td className="py-4 px-6">
                  SDE-1
                </td>
                <td className="py-4 px-6">
                  9112738470
                </td>
                <td className="py-4 px-6">
                  1-6-22
                </td>
                <td className="py-4 px-6">
                  <a href="/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
                  <a href="/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
                  <a href="/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='justify-center flex mb-2'>
        <button onClick={ToEmployeCreate} type="button" className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center ">
          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          <span className="sr-only">Create Employee</span>
        </button>
      </div>
    </>
  )
}

export default AdminDashboard