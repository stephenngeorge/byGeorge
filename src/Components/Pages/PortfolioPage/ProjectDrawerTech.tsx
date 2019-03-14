import React from 'react'
import { IProps } from './ProjectDrawerTechType'

export default (props: IProps) => {
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