import React from 'react'
import Titlebar from '../Titlebar/Titlebar'

export default function Profile() {
    return (
        <div>
            <Titlebar />
            <div className='panel'>
                <h1>My Account</h1>
                <div className='profile-menu'>
                    <font>Add account</font>
                </div>
            </div>
        </div>
    )
}
