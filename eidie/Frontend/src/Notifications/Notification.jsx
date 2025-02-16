import React from 'react'
import Titlebar from '../Titlebar/Titlebar'
import './Notification.css'

export default function Notification() {
    return (
        <div>
            <Titlebar />
            <div className='panel'>
                <h1>Notifications</h1>
            </div>
        </div>
    )
}
