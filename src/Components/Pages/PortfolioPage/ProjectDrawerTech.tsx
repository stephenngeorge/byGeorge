import React from 'react'

interface Props {
    techStack: string[] | undefined
}

export default (props: Props) => {
    let { techStack } = props
    return (
        <ul className='project-drawer__techStack'>
            {
                techStack !== undefined &&
                techStack.map((tech: string, i: number) =>
                                <li key={ i }
                                    className='project-drawer__techStack--tech'
                                >{ tech }</li>)
            }
        </ul>
    )
}