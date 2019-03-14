import React, { useEffect } from 'react'
import Hammer from 'react-hammerjs'
import { IPropsSkills } from './SkillsType'

// import child components
import Skill from './Skill'

// import assets
import { close_icon } from '../../../assets'

export default (props: IPropsSkills) => {
    let { skills, icon, closeDrawer } = props

    useEffect(() => {
        let drawer = document.querySelector('.about-page__drawer')
        if (drawer !== null) {
            drawer.classList.add('slide-in-from-left')
        }
    }, [])

    return (
        <Hammer onSwipe={ closeDrawer } direction='DIRECTION_HORIZONTAL'>
            <div className='about-page__skills about-page__drawer'>
                <button className='btn__close-drawer' onClick={ closeDrawer }>
                    <img src={ close_icon } alt='close drawer' />
                </button>
                <img className='drawer-icon' src={ icon } alt='skills' />
                <h2 className='drawer-title'>Skills</h2>
                {
                    skills.map((skill: any, i: number) => <Skill key={ i } skill={ skill } />)
                }
            </div>
        </Hammer>
    )
}