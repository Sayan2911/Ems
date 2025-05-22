import React, { createContext, useEffect, useState } from 'react'
import { getItemLocal, setItemLocal } from '../utils/LocalStorage'

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        // setItemLocal()
        const { employeeData, adminData } = getItemLocal()

        setUserData({ employeeData, adminData })

    }, [])




    return (
        <div>
            <AuthContext value={userData}>
                {children}
            </AuthContext>
        </div> 
    )
}

export default AuthProvider