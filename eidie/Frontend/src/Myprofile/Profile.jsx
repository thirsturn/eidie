import React from 'react'
import Titlebar from '../Titlebar/Titlebar'
import './Profile.css'

export default function Profile() {
    return (
        <div>
            <Titlebar />
            <div className='panel'>
                <h1>My Account</h1>
                <div className='profile-menu'>
                    <a href="/account/add_account">Add an account</a>
                </div>
            </div>
        </div>
    )
}
