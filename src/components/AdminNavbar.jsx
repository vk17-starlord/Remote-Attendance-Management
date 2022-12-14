import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminNavbar = () => {

    const navigate = useNavigate();
    const handlechange = () => {
        console.log('clicked')
        navigate('/admin')

    }
    return (
        <>

            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="/" className="flex items-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/1286/1286965.png" className="h-6 mr-3 sm:h-6" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap ">Admin</span>
                    </a>

                    <div className="flex items-center md:order-2">
                        <span className="sr-only">Open user menu</span>
                        <img className="w-8 h-8 rounded-full" src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-1024.png" alt="" />
                        <span onClick={handlechange}>
                            <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                        </span>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default AdminNavbar