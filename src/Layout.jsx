import React from 'react'
import { Outlet } from 'react-router-dom'
import Example from './components/Navbar'

const Layout = () => {
    return (
        <>
            <Example />
            <Outlet />
        </>
    )
}

export default Layout