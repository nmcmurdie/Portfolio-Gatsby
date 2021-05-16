import React from 'react'
import ProfileIcon from '../res/profile.jpg'
import './Profile.css'

const PROFILE_SIZE = 200;

function Profile() {
    return (
        <img width={`${PROFILE_SIZE}px`} height={`${PROFILE_SIZE}px`} className="profile" src={ProfileIcon} alt="Profile Icon" />
    )
}

export default Profile
