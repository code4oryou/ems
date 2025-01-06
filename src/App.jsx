import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  useEffect(() => {
    // setLocalStorage()
    getLocalStorage()
  },)

  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      console.log('admin')
    } else if (email == 'user@me.com' && password == '123') {
      setUser('employee')
      console.log('employee')
    } else {
      alert("invalid")
    }
  }

  // handleLogin(email, password)

  const data = useContext(AuthContext)
  console.log(data)

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  )
}

export default App
