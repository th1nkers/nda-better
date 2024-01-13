import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import MainNavigation from './shared/components/navigation/MainNavigation'

const Root = () => {
  return (
    <>
      <MainNavigation/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Root
