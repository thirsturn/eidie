import React from 'react'
import './Titlebar.css'
import home from '../assets/home.svg'
import notifi from '../assets/notifi.svg'
import profile from '../assets/person.svg'

export default function Titlebar() {
    return (
        <div className='title-bar'>

            <h1 className='title-name'>
                EIDIÉ
            </h1>
            <nav className='nav-bar'>
                <ul className='nav-list'>
                    <li><a href="/"><img src={home} alt="" /></a></li>
                    <li><a href="/notifications"><img src={notifi} alt="" /></a></li>
                    <li><a href=""><img src={profile} alt="" /></a></li>
                </ul>
            </nav>
        </div>
    )
}
