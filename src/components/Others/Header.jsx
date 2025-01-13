import React from 'react'
import { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = ({ data }) => {
    // console.log(data)
    // const [username, setUsername] = useState('')
    // if (!data) {
    //     setUsername('Admin')
    // } else {
    //     setUsername(data.firstName)
    // }

    const logOutUser = () => {
        localStorage.setItem('loggedInUser', '')
        window.location.reload()
    }

    return (
        <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-emerald-600 text-3xl font-semibold'>username</span></h1>
            <button onClick={logOutUser} className='bg-red-600 text-lg font-medium px-5 py-2 rounded-md'>Logout</button>
        </div>
    )
}

export default Header
