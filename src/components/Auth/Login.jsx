import React, { useState } from 'react'

const Login = ({loginHandler}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    console.log('clicked login button',email,password)
    loginHandler(email,password)
    setEmail("")
    setPassword("")
  }

  return (
    <div className='flex items-center justify-center  h-screen w-screen '>
      <div className='border-2 border-emerald-600  p-20 rounded-xl '>
        <form
          className='flex flex-col items-center justify-center gap-7 mb-5'
          onSubmit={e => {
            handleSubmit(e)
          }}
        >
          <input
            value={email}
            onChange={e => {
              setEmail(e.target.value)
            }}
            type='email'
            placeholder='enter your email'
            className=' rounded-full border-2 border-emerald-600 py-3 px-20  bg-transparent text-xl text-center'
            name='emailInput'
          />
          <input
            value={password}
            onChange={e => {
              setPassword(e.target.value)
            }}
            type='password'
            placeholder='enter your password'
            className=' rounded-full border-2 border-emerald-600 py-3 px-20 bg-transparent text-xl text-center'
            name='passwordInput'
          />

          <button className=' rounded-full border-2 border-emerald-600 py-3 px-10  bg-emerald-600  text-xl'>
            Login
          </button>
        </form>
        <div className='flex items-center justify-center '>
          <div className='flex items-center justify-center gap-2 h-8'>
            <input type='checkbox' name='' id='' />
            <p>remember password</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
