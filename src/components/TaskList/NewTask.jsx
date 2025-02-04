import React from 'react'

const NewTask = ({ data }) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4>{data.taskDate}</h4>
            </div>
            <h2 className='text-2xl mt-5 font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>
            <div className='flex justify-between mt-4 '>
                <button className='mt-6'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask