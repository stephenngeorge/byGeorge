import React from 'react'

// import child components
import Navigation from './Navigation'
import Profile from './Profile'

export default () => (
    <div className='landing-page'>
        <Profile />
        <Navigation />
    </div>
)