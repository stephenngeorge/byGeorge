import React from 'react'

// import child components
import Interest from './Interest'

export default (props: any) => {
    let { interests, icon } = props
    
    return (
        <div className='about-page__interests about-page__drawer'>
            <img src={ icon } alt='interests' />
            <h2>Interests</h2>
            {
                interests.map((interest: any, i: number) => <Interest key={ i } interest={ interest } />)
            }
        </div>
    )
}