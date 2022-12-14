import React from 'react'

const ViewEmployee = () => {
    return (
        <div className='w-full'>
            <div className='w-full h-full bg-int'>
                <div className="w-[75%] text-white font-inter flex justify-between items-center min-h-[40vh] mx-auto">
                    <div className="info flex">
                        <div className="w-24 bg-white flex justify-center items-center h-24 rounded-full">
                            <img alt='meta' className='w-17 rounded-full object-contain h-17' src={'https://images.pexels.com/photos/3483800/pexels-photo-3483800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} />
                        </div>
                        <div className="flex flex-col mx-10 justify-center">
                            <h1 className='font-medium text-lg '>Employee Name -  <span className='font-medium text-white/70'></span></h1>
                            <h1 className='font-medium text-lg '>Employee Position -  <span className='font-medium text-white/70'></span></h1>
                            <h1 className='font-medium text-lg '>Employee Salary -  <span className='font-medium text-white/70'></span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewEmployee