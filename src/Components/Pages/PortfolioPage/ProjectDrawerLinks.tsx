import React from 'react'

// import assets
import { code_icon, home_icon } from '../../../assets'

export default (props: any) => {
    let { path, repo } = props
    return (
        <ul className='project-drawer__links'>
            <li className='project-drawer__links--item' id='project-drawer__links--website'>
                <a href={ path }>
                    <img src={ home_icon } alt='visit website' />
                </a>
                <p>go to project</p>
            </li>
            <li className='project-drawer__links--item' id='project-drawer__links--repo'>
                <a href={ repo }>
                    <img src={ code_icon } alt='view source' />
                </a>
                <p>source code</p>
            </li>
        </ul>
    )
}