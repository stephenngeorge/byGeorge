import React from 'react'

export default (props: any) => {

    let { project } = props
    return (
        <div className='project-drawer'>
            <h1>{ project.title }</h1>
        </div>
    )
}