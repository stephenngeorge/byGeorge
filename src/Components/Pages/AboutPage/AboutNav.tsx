import React from 'react'

// import assets
import {
    education_icon,
    interests_icon,
    skills_icon,
    work_icon
} from '../../../assets'

export default (props: any) => (
    <ul className='about-nav'>
        <li className='about-nav__item' onClick={ () => props.setActiveDrawer('WORK_HISTORY') }>
            <img src={ work_icon } alt='work histroy' />
            <p className='tag'>work history</p>
        </li>
        <li className='about-nav__item' onClick={ () => props.setActiveDrawer('EDUCATION') }>
            <img src={ education_icon } alt='education' />
            <p className='tag'>education</p>
        </li>
        <li className='about-nav__item' onClick={ () => props.setActiveDrawer('SKILLS') }>
            <img src={ skills_icon } alt='skills' />
            <p className='tag'>skills</p>
        </li>
        <li className='about-nav__item'>
            <img src={ interests_icon } alt='interests' />
            <p className='tag'>interests</p>
        </li>
    </ul>
)