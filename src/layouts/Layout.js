import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <HeaderComponent/>

        <main>
            
            <Outlet/>
        </main>

        <FooterComponent/>
    </>
  )
}

export default Layout