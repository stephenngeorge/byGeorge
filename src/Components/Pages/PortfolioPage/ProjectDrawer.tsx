import React from 'react'

// import child components
import ProjectDrawerInfo from './ProjectDrawerInfo'
import ProjectDrawerLinks from './ProjectDrawerLinks'
import ProjectDrawerTech from './ProjectDrawerTech'

export default (props: any) => {
    let { project } = props
    return (
        <div className='project-drawer'>
            <ProjectDrawerInfo title={ project.title } description={ project.description } />
            <ProjectDrawerLinks path={ project.path } repo={ project.repo } />
            <ProjectDrawerTech techStack={ project.techStack } />
        </div>
    )
}