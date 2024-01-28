import React from 'react'
import Auth from './Auth'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import DashBoard from './DashBoard'


const Body = () => {
    const router=createBrowserRouter([
        {
            path:'/',
            element:<Auth/>
        },
        {
            path:'/dashboard',
            element:<DashBoard/>
        }
    ])
  return (
    <div>
       <RouterProvider router={router}/>
    </div>
  )
}

export default Body