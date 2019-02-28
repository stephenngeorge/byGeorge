import React from 'react'

// import child components
import Institution from './Institution'

export default (props: any) => {
    let { institutions, icon } = props

    return (
        <div className='about-page__education about-page__drawer'>
            <img className='drawer-icon' src={ icon } alt='education' />
            <h2 className='drawer-title'>Education</h2>
            {
                institutions.map((institution: any) => <Institution key={ institution.location } institution={ institution } />)
            }
        </div>
    )
}