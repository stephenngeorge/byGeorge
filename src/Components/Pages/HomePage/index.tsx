import React, { useEffect } from 'react'

// import child components
import Profile from './Profile'

export default () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        let homePage = document.querySelector('.home-page')
        if (homePage !== null) {
            homePage.classList.add('fade-in')
        }

        return () => {
            if (homePage !== null) {
                homePage.classList.remove('fade-in')
            }
        }
    }, [])

    return (
        <div className='home-page'>
            <Profile />
        </div>
    )
}