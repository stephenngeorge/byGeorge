import React from 'react'

// import assets
import { code_icon, home_icon } from '../../../assets'

interface Props {
    path: string,
    repo: string,
    live: boolean
}

export default (props: Props) => {
    let { path, repo, live } = props

    let projectLink = !!live ? path : 'javascript:void(0)'
    let inactive = !!live ? '' : 'inactive'
    return (
        <ul className='project-drawer__links'>
            <li className={`project-drawer__links--item ${inactive}`} id='project-drawer__links--website'>
                <a href={ projectLink } target='_blank'>
                    <img src={ home_icon } alt='visit website' />
                </a>
                <p>go to project</p>
            </li>
            <li className='project-drawer__links--item' id='project-drawer__links--repo'>
                <a href={ repo } target='_blank'>
                    <img src={ code_icon } alt='view source' />
                </a>
                <p>source code</p>
            </li>
        </ul>
    )
}