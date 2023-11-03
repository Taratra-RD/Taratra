import React from 'react'
import './css/Main.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Main() {
    const navigate = useNavigate()
    return (
        <div className='main'>
            <div className="main--left">
                <h1 className='main--title'>DEVELOPPEUR WEB</h1>
                <div className="main--description">
                    Lorem ipsum dolor sit amet aliquid fuga consectetur consequatur maxime repellat reiciendis dolorem itaque cumque eius dicta soluta doloribus maiores suscipit modi. Fuga obcaecati est nulla dolorem. Velit incidunt temporibus nam minima nesciunt aliquid inventore accusamus, officiis perspiciatis facilis aperiam sed deleniti quod harum tempore excepturi fugiat a beatae quidem ex. Officiis ad debitis temporibus blanditiis ex?
                </div>
                <button className='main--hire--me' onClick={() => navigate("/myself")}>
                    Why should you hire me ?
                </button>
            </div>
            <div className="main--right">

            </div>
        </div>
    )
}
