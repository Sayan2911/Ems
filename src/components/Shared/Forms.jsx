import React from 'react'

const Forms = ({ formDesc }) => {
  return (
    <div>
      {formDesc == 'signup' && <div>hello this is for sign up</div>}
      {formDesc == 'login' && <div>hello this is for login</div>}
      {formDesc == 'admin' && (
        <div className='bg-gray-800  rounded-lg '>
          <form className='w-full flex h-[50vh] justify-between p-10 gap-10'>
            <div className='w-[40%] '>
              <div>
                <h3 className='text-2xl mb-2'>Task Title</h3>
                <input
                  type='text'
                  placeholder='Make a Ui design'
                  className=' rounded-md w-full border-2 border-gray-500 py-3 px-5 bg-transparent text-xl  mb-2'
                />
              </div>

              <div>
                <h3 className='text-2xl mb-2'>Date</h3>
                <input
                  type='date'
                  className=' rounded-md w-full border-2 border-gray-500 py-3 px-5 bg-transparent text-xl  mb-2'
                />
              </div>
              <div>
                <h3 className='text-2xl mb-2'>Assign to</h3>
                <input
                  type='text'
                  name=''
                  id=''
                  placeholder='emloyee name'
                  className=' rounded-md w-full border-2 border-gray-500 py-3 px-5 bg-transparent text-xl  mb-2'
                />
              </div>
              <div>
                <h3 className='text-2xl mb-2'>Category</h3>
                <input
                  type='text'
                  placeholder='design, dev etc'
                  className=' rounded-md w-full border-2 border-gray-500 py-3 px-5 bg-transparent text-xl  mb-2'
                />
              </div>
            </div>

            <div className='w-[40%]'>
              <div>
                <h3 className='text-2xl mb-2'>Description</h3>
                <textarea
                  name=''
                  id=''
                  cols='30'
                  rows='10'
                  className=' rounded-md w-full border-2 border-gray-500 py-3 px-20 bg-transparent text-xl text-center mb-2'
                ></textarea>
              </div>
              <button className=' rounded-md w-full border-2 bg-green-700 border-transparent py-3 px-20 bg-transparent text-xl text-center mb-2'>
                Create task
              </button>
            </div>
          </form>
        </div>
      )}
      {formDesc == 'member' && <div>hello this is for member</div>}
    </div>
  )
}

export default Forms
