import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center mx-28 mt-6'>
      <div className='text-4xl font-bold'>
        hello <br /> Sayan👋
      </div>
      <button className='bg-red-700 rounded-md p-3'>Log Out</button>
    </div>
  )
}

export default Header
