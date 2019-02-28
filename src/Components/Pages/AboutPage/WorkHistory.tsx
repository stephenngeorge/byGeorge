import React from 'react'

// import child components
import Job from './Job'

export default (props: any) => {
    let { jobs } = props
    return (
        <div className='about-page__jobs about-page__drawer'>
            <h2>Work History</h2>
            {
                jobs.map((job: any) => <Job job={ job } key={ job.title } />)
            }
        </div>
    )
}