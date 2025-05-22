import React from 'react'

const OverviewBox = ({boxColor, textInput,numberInput }) => {
  return (
    <div className=' w-[45%] rounded-xl py-6 px-9' style={{backgroundColor:boxColor}}>
        <h2 className='text-3xl font-semibold '>{numberInput}</h2>
        <h3 className='text-xl font-medium '>{textInput}</h3>

    </div>
  )
}

export default OverviewBox