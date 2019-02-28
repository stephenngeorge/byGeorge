import React from 'react'

// import child components
import Job from './Job'

export default (props: any) => {
    let { jobs, icon } = props
    return (
        <div className='about-page__jobs about-page__drawer'>
            <img src={ icon } alt='work history' className='drawer-icon' />
            <h2 className='drawer-title'>Work History</h2>
            {
                jobs.map((job: any) => <Job job={ job } key={ job.title } />)
            }
        </div>
    )
}