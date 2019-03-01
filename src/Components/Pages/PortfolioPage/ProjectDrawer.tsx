import React, { useEffect } from 'react'

// import child components
import ProjectDrawerInfo from './ProjectDrawerInfo'
import ProjectDrawerLinks from './ProjectDrawerLinks'
import ProjectDrawerTech from './ProjectDrawerTech'

// import assets
import { close_icon } from '../../../assets'

export default (props: any) => {
    useEffect(() => {
        const drawer = document.querySelector('.project-drawer')
        if (drawer !== null) drawer.classList.add('slide-in-from-right')

        return () => {
            if (drawer !== null) drawer.classList.remove('slide-in-from-right')
        }
    }, [props.project])

    const closeDrawer = () => {
        const drawer = document.querySelector('.project-drawer')
        if (drawer !== null) {
            drawer.classList.remove('slide-in-from-right')
            setTimeout(() => setFocusProject({}), 400)
        }
    }

    let { project, setFocusProject } = props
    return (
        <div className='project-drawer'>
            <button className='btn__close-drawer' onClick={ closeDrawer }>
                <img src={ close_icon } alt='close drawer' />
            </button>
            <ProjectDrawerInfo title={ project.title } description={ project.description } />
            <ProjectDrawerLinks path={ project.path } repo={ project.repo } />
            <ProjectDrawerTech techStack={ project.techStack } />
        </div>
    )
}