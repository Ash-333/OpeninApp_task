import React from 'react'
import Sidebar from './Sidebar'
import Upload from './Upload'
import Side from './Side'

const DashBoard = () => {
  return (
    <div className='bg-[#FAFAFB] flex items-start w-screen'>
      <Sidebar/>
      <Upload/>
    </div>
  )
}

export default DashBoard