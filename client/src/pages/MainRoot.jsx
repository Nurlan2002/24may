import React from 'react'
import Footer from '../Companents/Footer'
import Navbar from '../Companents/Navbar'
import {Outlet} from  'react-router-dom'

const MainRoot = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
  )
}

export default MainRoot