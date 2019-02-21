import React from 'react'

export default (props :any) => {
    let { project } = props
    return (
        <div className='project-card'>
            <img src={ project.img } alt='project card' />
            <div className='project-card__overlay'>
                <h2>{ project.title }</h2>
            </div>
        </div>
    )
}