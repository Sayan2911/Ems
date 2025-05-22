import React from 'react'
import Header from '../Shared/Header'
import OverviewBox from '../Shared/OverviewBox'
import AllTask from '../TaskList/AllTask'

const EmployeeDashboard = () => {
  return (
    <div>
      <Header />
      <div className=' mx-[6%]'>
        
      <div className='flex mt-12  justify-between gap-5'>

      <OverviewBox boxColor={"blue"} textInput={"New Task"} numberInput={"0"}/>
      <OverviewBox boxColor={"green"} textInput={"Completed"} numberInput={"3"}/>
      <OverviewBox boxColor={"yellow"} textInput={"Accepted"} numberInput={"0"}/>
      <OverviewBox boxColor={"red"} textInput={"Failed"} numberInput={"1"}/>
      </div>
      <AllTask/>
      </div>
    </div>
  )
}

export default EmployeeDashboard
