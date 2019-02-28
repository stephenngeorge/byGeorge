import React from 'react'

// import child components
import Interest from './Interest'

export default (props: any) => {
    let { interests, icon } = props
    
    return (
        <div className='about-page__interests about-page__drawer'>
            <img className='drawer-icon' src={ icon } alt='interests' />
            <h2 className='drawer-title'>Interests</h2>
            {
                interests.map((interest: any, i: number) => <Interest key={ i } interest={ interest } />)
            }
        </div>
    )
}