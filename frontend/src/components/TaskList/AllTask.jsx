import React from 'react'
import TaskBox from '../Shared/TaskBox'

const AllTask = () => {
  return (
    <div id='allTask' className='w-[100%] h-[50vh] rounded-xl  mt-10 p-10 flex overflow-x-auto gap-5  flex-nowrap  scroll-none'>
     <TaskBox color="#115515" priority="high" dateInput="10 jul 2024" title= "Deadline is approaching" textInput= "Work faster"/>
     <TaskBox color="#123511" priority="high" dateInput="10 jul 2024" title= "Deadline is approaching" textInput= "Work faster"/>
     <TaskBox color="#513545" priority="high" dateInput="10 jul 2024" title= "Deadline is approaching" textInput= "Work faster"/>
     <TaskBox color="#556936" priority="high" dateInput="10 jul 2024" title= "Deadline is approaching" textInput= "Work faster"/>
     <TaskBox color="#897563" priority="high" dateInput="10 jul 2024" title= "Deadline is approaching" textInput= "Work faster"/>
     
    </div>
  )
}

export default AllTask
