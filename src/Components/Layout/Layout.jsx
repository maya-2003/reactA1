import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import './Layout.css'

export default function Layout() {
    return (<>
        <Navbar />
        <div className='outlet-container'>
        <Outlet />
        </div>
        
        <Footer />
    </>

    )
}
