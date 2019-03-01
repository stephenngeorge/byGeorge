import React, { Fragment, useState, useEffect } from 'react'

// import child components
import AboutNav from './AboutNav'
import WorkHistory from './WorkHistory'
import Education from './Education'
import Skills from './Skills'
import Interests from './Interests'

// import data
import { education, interests, jobs, skills } from '../../../data'

// import assets
import { education_icon, interests_icon, skills_icon, work_icon } from '../../../assets'

export default () => {

    const [activeDrawer, setActiveDrawer] = useState('')

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        const handleCloseDrawer = (e: any) => {
            if (e.key === 'x' || e.key === '<') closeDrawer()
        }
        window.addEventListener('keypress', handleCloseDrawer)

        return () => window.removeEventListener('keypress', handleCloseDrawer)
    }, [activeDrawer])


    const closeDrawer = () => {
        let drawer = document.querySelector('.about-page__drawer')
        if (drawer !== null) {
            drawer.classList.remove('slide-in-from-left')
            setTimeout(() => setActiveDrawer(''), 400)
        }
    }

    let renderDrawer = () => {
        switch(activeDrawer) {
            case 'WORK_HISTORY':
                return <WorkHistory jobs={ jobs } icon={ work_icon } closeDrawer={ closeDrawer } />
            case 'EDUCATION':
                return <Education institutions={ education } icon={ education_icon } closeDrawer={ closeDrawer } />
            case 'SKILLS':
                return <Skills skills={ skills } icon={ skills_icon } closeDrawer={ closeDrawer } />
            case 'INTERESTS':
                return <Interests interests={ interests } icon={ interests_icon } closeDrawer={ closeDrawer } />
            case '':
                return null
            default: return null
        }
    }
    let drawer = renderDrawer()

    return (
        <Fragment>
            <AboutNav   setActiveDrawer={ setActiveDrawer }
                        closeDrawer={ closeDrawer }
                        activeDrawer={ activeDrawer }
            />
            {
                drawer
            }
        </Fragment>
    )
}