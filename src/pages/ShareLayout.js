import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function ShareLayout() {
  return (
    <>
<Navbar/>
<Outlet/>

    </>
  )
}
