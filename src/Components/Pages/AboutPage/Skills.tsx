import React, { useEffect } from 'react'

// import child components
import Skill from './Skill'

// import assets
import { close_icon } from '../../../assets'

interface Props {
    skills: any[],
    icon: string,
    closeDrawer(): any
}

export default (props: Props) => {
    let { skills, icon, closeDrawer } = props

    useEffect(() => {
        let drawer = document.querySelector('.about-page__drawer')
        if (drawer !== null) {
            drawer.classList.add('slide-in-from-left')
        }
    }, [])

    return (
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
    )
}