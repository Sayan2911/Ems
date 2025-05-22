import React from 'react'
import Forms from '../Shared/Forms'
import Header from '../Shared/Header'

const AdminDashboard = () => {
  return (
    <>
     <Header />
    <div className='p-20'>

        <Forms formDesc="admin"/>
    </div>
    </>
  )
}

export default AdminDashboard