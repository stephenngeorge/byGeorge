import React, { useEffect } from 'react'

// import assets
import {
    education_icon,
    interests_icon,
    skills_icon,
    work_icon
} from '../../../assets'

export default (props: any) => {

    useEffect(() => {
        window.scrollTo(0, 0)
        let aboutNav = document.querySelector('.about-nav')
        if (aboutNav !== null) {
            aboutNav.classList.add('fade-in')
        }

        return () => {
            if (aboutNav !== null) {
                aboutNav.classList.remove('fade-in')
            }
        }
    }, [])

    const handleClick = (drawer: string) => {
        let { activeDrawer, setActiveDrawer, closeDrawer } = props
        
        if (activeDrawer === drawer) {
            closeDrawer()
        }
        else if (activeDrawer !== '') {
            closeDrawer()
            setTimeout( () => setActiveDrawer(drawer), 410)
        }
        else {
            setActiveDrawer(drawer)
        }
    }
    

    return (
        <ul className='about-nav'>
            <li className='about-nav__item' onClick={ () => handleClick('WORK_HISTORY') }>
                <img src={ work_icon } alt='work history' />
                <p className='tag'>work history</p>
            </li>
            <li className='about-nav__item' onClick={ () => handleClick('EDUCATION') }>
                <img src={ education_icon } alt='education' />
                <p className='tag'>education</p>
            </li>
            <li className='about-nav__item' onClick={ () => handleClick('SKILLS') }>
                <img src={ skills_icon } alt='skills' />
                <p className='tag'>skills</p>
            </li>
            <li className='about-nav__item' onClick={ () => handleClick('INTERESTS') }>
                <img src={ interests_icon } alt='interests' />
                <p className='tag'>interests</p>
            </li>
        </ul>
    )
}