import React from 'react'
import './css/Home.css'
import { Outlet } from 'react-router-dom'

export default function Home() {
    return (
        <div className='home'>
            <Outlet />
        </div>
    )
}
