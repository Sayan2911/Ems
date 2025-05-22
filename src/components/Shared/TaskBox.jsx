import React from 'react'

const TaskBox = ({ color, priority, dateInput, title, textInput }) => {
  const now = Date.now()
  const currentDate = new Date(now)
  const options = {
    month: 'short',
    year: 'numeric',
    day: 'numeric'
    // hour: '2-digit',
    // minute: '2-digit'
  }
  const customFormattedDate = new Intl.DateTimeFormat('en-IN', options).format(
    currentDate
  )
  return (
    <div
      className='w-[25%] h-full  rounded-3xl  flex-shrink-0 p-10'
      style={{ backgroundColor: color }}
    >
      <div className='flex justify-between'>
        <h3 className='bg-red-700 px-4 py-2 text-md font-semibold rounded-lg'>
          {priority || 'Normal'}
        </h3>
        <h4>{dateInput || customFormattedDate}</h4>
      </div>

      <h1 className='text-3xl font-bold mb-4 mt-2'>
        {title || 'This is Title'}
      </h1>
      <h2>{textInput || 'This is body text'}</h2>
    </div>
  )
}

export default TaskBox
