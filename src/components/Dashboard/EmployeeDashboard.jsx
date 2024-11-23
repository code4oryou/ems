import React from 'react'
import Header from '../Others/Header'
import TaskListNos from '../Others/TaskListNos'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
    return (

        <div className='p-10 bg-[#1C1C1C] h-screen'>
            <Header />
            <TaskListNos />
            <TaskList />
        </div>

    )
}

export default EmployeeDashboard
