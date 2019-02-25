import React from 'react'

export default (props :any) => {
    let { project, setFocusProject } = props
    return (
        <div className='project-card'>
            <img src={ project.img } alt='project card' />
            <div className='project-card__overlay'>
                <h2 onClick={ () => setFocusProject(project) }>{ project.title }</h2>
            </div>
        </div>
    )
}