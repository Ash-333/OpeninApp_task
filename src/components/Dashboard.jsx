import React from 'react'
import Sidebar from './Sidebar'
import Upload from './Upload'

const DashBoard = () => {
  return (
    <div className='bg-[#FAFAFB] flex'>
        <Sidebar/>
        <Upload/>
    </div>
  )
}

export default DashBoard