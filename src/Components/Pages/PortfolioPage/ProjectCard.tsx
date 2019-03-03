import React from 'react'

interface Project {
    title?: string,
    description?: string,
    path?: string,
    repo?: string,
    img?: string,
    techStack?: string[],
    live?: boolean
}
interface Props {
    project: Project,
    focusProject: Project,
    setFocusProject(project: Project): any
}

export default (props: Props) => {
    let { project, setFocusProject, focusProject } = props

    const handleClick = (selectProject: any) => {
        let drawer = document.querySelector('.project-drawer')

        // toggle drawer in and out if same project card is clicked
        if (drawer !== null && selectProject.title === focusProject.title) {
            drawer.classList.toggle('slide-in-from-right')
            setTimeout(() => setFocusProject({}), 410)
        }
        // swap drawers if different project card is clicked
        else if (drawer !== null) {
            drawer.classList.remove('slide-in-from-right')
            setTimeout(() => setFocusProject(selectProject), 410)
        }
        // if no porject drawer, set new focus project
        else {
            setFocusProject(selectProject)
        }
    }

    return (
        <div className='project-card'>
            <img src={ project.img } alt='project card' />
            <div className='project-card__overlay'>
                <h2 onClick={ () => handleClick(project) }>{ project.title }</h2>
            </div>
        </div>
    )
}