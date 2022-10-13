import React from 'react'
import {Outlet, useLocation, Navigate} from 'react-router-dom'


const Index = () => {
    const location = useLocation()
    const user = JSON.parse(localStorage.getItem('user'))
    const content = user? <Outlet /> : <Navigate to='/signin' state={{from:location}} replace />
  return content
}

export default Index