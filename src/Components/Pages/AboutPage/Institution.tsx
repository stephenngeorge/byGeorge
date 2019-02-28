import React from 'react'

export default (props: any) => {
    let { institution } = props

    return (
        <div className='institution'>
            <div className='institution__header'>
                <h3>{ institution.headline }</h3>
                <p>{ institution.dateFrom } - { institution.dateTo }</p>
            </div>
            <p>{ institution.location }</p>
            {
                institution.summary.map((qualification: any, i: number) => 
                                            <p key={ i }>
                                                { qualification.subject } : { qualification.grade }
                                            </p>)
            }
        </div>
    )
}