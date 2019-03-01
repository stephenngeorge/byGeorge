import React, { useEffect } from 'react'

// import child components
import Profile from './Profile'

export default () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='home-page'>
            <Profile />
        </div>
    )
}