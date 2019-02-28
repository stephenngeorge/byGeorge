import React from 'react'

// import child components
import Institution from './Institution'

export default (props: any) => {
    let { institutions, icon } = props

    return (
        <div className='about-page__education about-page__drawer'>
            <img src={ icon } alt='education' />
            <h2>Education</h2>
            {
                institutions.map((institution: any) => <Institution key={ institution.location } institution={ institution } />)
            }
        </div>
    )
}