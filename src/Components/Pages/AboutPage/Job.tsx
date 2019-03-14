import React from 'react'
import { IPropsJob } from './WorkHistoryType'

export default (props: IPropsJob) => {
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