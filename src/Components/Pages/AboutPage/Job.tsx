import React from 'react'

export default (props: any) => {
    let { job } = props
    return (
        <div className='job'>
            <div className='job-header'>
                <h3>{ job.title }</h3>
                <p>{ job.dateFrom } - { job.dateTo }</p>
            </div>
            <p>{ job.location }</p>
            {
                job.summary.map((bullet: string) => <p>{ bullet }</p>)
            }
        </div>
    )
}