import React from 'react'

const AcceptTask = () => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High Priority</h3>
                <h4>24 Nov 2024</h4>
            </div>
            <h2 className='text-2xl mt-5 font-semibold'>Task Title 1</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo magni laborum ipsum sit eos sint! Voluptatibus!</p>
            <div className='flex justify-between mt-4 '>
                <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
                <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask