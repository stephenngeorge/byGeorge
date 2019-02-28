import React, { Fragment, useState } from 'react'

// import child components
import AboutNav from './AboutNav'
import WorkHistory from './WorkHistory'
import Education from './Education'
import Skills from './Skills'
import Interests from './Interests'

// import data
import { education, interests, jobs, skills } from '../../../data'

export default () => {

    const [activeDrawer, setActiveDrawer] = useState('')

    let renderDrawer = () => {
        switch(activeDrawer) {
            case 'WORK_HISTORY':
                return <WorkHistory jobs={ jobs } />
            case 'EDUCATION':
                return <Education institutions={ education } />
            case 'SKILLS':
                return <Skills skills={ skills } />
            case 'INTERESTS':
                return <Interests interests={ interests } />
            case '':
                return null
            default: return null
        }
    }
    let drawer = renderDrawer()

    return (
        <Fragment>
            <AboutNav setActiveDrawer={ setActiveDrawer } />
            {
                drawer
            }
        </Fragment>
    )
}