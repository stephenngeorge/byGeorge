import React from 'react'

interface Props {
    job: {
        title: string,
        location: string,
        summary: string[],
        dateFrom: string,
        dateTo: string
    }
}

export default (props: Props) => {
    let { job } = props
    return (
        <div className='job'>
            <div className='job__header'>
                <h3>{ job.title }</h3>
                <p>{ job.dateFrom } - { job.dateTo }</p>
            </div>
            <p className='job-location'>{ job.location }</p>
            {
                job.summary.map((bullet: string) => <p className='job-summary' key={ bullet }>{ bullet }</p>)
            }
        </div>
    )
}