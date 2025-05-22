import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import Header from './components/Shared/Header'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getItemLocal, setItemLocal } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

function App() {
  const [user, setUser] = useState(null)
  console.log(user);

  const AuthData = useContext(AuthContext)
  console.log(AuthData);

  useEffect(() => {
    if(AuthData){
      const loogedInUser= localStorage.getItem("loggedInUser")
      if(loogedInUser){
        setUser(loogedInUser.role)
      }
    }
  }, [AuthData])
  

  const handleLogin = (email, password) => {
    if (AuthData && AuthData.employeeData.find((e) => email == e.email && password == e.password)) {

      // setUser(null)
      setUser("user")
      localStorage.setItem("loogedInUser",JSON.stringify({role: "user"})) 
      console.log("this is user");
    }
    else if (AuthData && AuthData.adminData.find((e) => email == e.email && password == e.password)) {
      // setUser(null)
      localStorage.setItem("loogedInUser",JSON.stringify({role: "admin"})) 
      setUser("admin")
      console.log("this is admin");
    }
    else
      alert("invalid credential");
  }


  return (
    <>
      {user == null ? <Login loginHandler={handleLogin} />
        : ""}
      {user == "admin" ? <AdminDashboard /> : user == "user" ? <EmployeeDashboard /> : ''}

    </>
  )
}

export default App
