import React, { useState } from 'react'

// import child components
import ProjectCard from './ProjectCard'
import ProjectDrawer from './ProjectDrawer'

import { projects } from '../../../data'

export default () => {

    let [focusProject, setFocusProject] = useState({})

    return (
        <div className='portfolio-page'>
            {
                projects.map(project => <ProjectCard    key={ project.title }
                                                        project={ project }
                                                        setFocusProject={ setFocusProject }
                                        />)
            }
            {
                Object.keys(focusProject).length !== 0 &&
                <ProjectDrawer project={ focusProject } setFocusProject={ setFocusProject } />
            }
        </div>
    )
}