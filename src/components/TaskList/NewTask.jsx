import React from 'react'

const NewTask = () => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High Priority</h3>
                <h4>24 Nov 2024</h4>
            </div>
            <h2 className='text-2xl mt-5 font-semibold'>Task Title</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo magni laborum ipsum sit eos sint! Voluptatibus!</p>
            <div className='flex justify-between mt-4 '>
                <button className='mt-4'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask