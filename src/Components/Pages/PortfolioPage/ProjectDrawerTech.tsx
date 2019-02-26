import React from 'react'

export default (props: any) => {
    let { techStack } = props
    return (
        <ul className='project-drawer__techStack'>
            {
                techStack.map((tech: string, i: number) =>
                                <li key={ i }
                                    className='project-drawer__techStack--tech'
                                >{ tech }</li>)
            }
        </ul>
    )
}