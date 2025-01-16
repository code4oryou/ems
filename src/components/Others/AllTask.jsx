import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>

            <div className='flex justify-between py-2 px-4 rounded mb-2 bg-red-400'>
                <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
                <h3 className='text-lg font-medium w-1/5'>New Task</h3>
                <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
                <h5 className='text-lg font-medium w-1/5'>Completed</h5>
                <h5 className='text-lg font-medium w-1/5'>Failed</h5>
            </div>

            <div className=''>
                {userData.map(function (elem, idx) {
                    return <div key={idx} className='border-2 border-emerald-500 flex justify-between py-2 px-4 rounded mb-2'>
                        <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
                        <h3 className='text-lg font-medium w-1/5 text-blue-400'>{elem.taskCounts.newTask}</h3>
                        <h5 className='text-lg font-medium w-1/5 text-yellow-300'>{elem.taskCounts.active}</h5>
                        <h5 className='text-lg font-medium w-1/5 text-white'>{elem.taskCounts.completed}</h5>
                        <h5 className='text-lg font-medium w-1/5 text-red-400'>{elem.taskCounts.failed}</h5>
                    </div>
                })}
            </div>

        </div>
    )
}

export default AllTask