import React, { useEffect } from 'react'

// import child components
import Institution from './Institution'

// import assets
import { close_icon } from '../../../assets'

interface Props {
    institutions: any[],
    icon: string,
    closeDrawer(): any
}

export default (props: Props) => {
    let { institutions, icon, closeDrawer } = props

    useEffect(() => {
        let drawer = document.querySelector('.about-page__drawer')
        if (drawer !== null) {
            drawer.classList.add('slide-in-from-left')
        }
    }, [])

    return (
        <div className='about-page__education about-page__drawer'>
            <button className='btn__close-drawer' onClick={ closeDrawer }>
                <img src={ close_icon } alt='close drawer' />
            </button>
            <img className='drawer-icon' src={ icon } alt='education' />
            <h2 className='drawer-title'>Education</h2>
            {
                institutions.map((institution: any) => <Institution key={ institution.location } institution={ institution } />)
            }
        </div>
    )
}