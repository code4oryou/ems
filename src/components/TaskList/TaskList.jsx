import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    return (
        <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 w-full py-5 mt-10'>
            {data.tasks.map((elem, idx) => {

                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} />
                }

                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} />
                }

                if (elem.completed) {
                    return <CompleteTask key={idx} data={elem} />
                }

                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} />
                }

            })}

            {/* 
            <AcceptTask />

            <NewTask />

            <CompleteTask />

            <FailedTask /> */}

            {/* <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High Priority</h3>
                    <h4>24 Nov 2024</h4>
                </div>
                <h2 className='text-2xl mt-5 font-semibold'>Task Title</h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo magni laborum ipsum sit eos sint! Voluptatibus!</p>
            </div> */}

        </div>
    )
}

export default TaskList