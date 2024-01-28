import React from 'react'

const SidebarItem = ({img,title}) => {
  return (
    <div className='flex p-5'>
        <img className='mr-4' src={img} alt="" />
        <h1 className='text-gray-400'>{title}</h1>
    </div>
  )
}

export default SidebarItem