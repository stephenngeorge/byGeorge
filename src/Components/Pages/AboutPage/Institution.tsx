import React from 'react'

interface Props {
    institution: {
        headline: string,
        location: string,
        dateFrom: string,
        dateTo: string,
        summary: string[]
    }
}

export default (props: Props) => {
    let { institution } = props

    return (
        <div className='institution'>
            <div className='institution__header'>
                <h3>{ institution.headline }</h3>
                {
                    institution.dateFrom !== institution.dateTo &&
                    <p>{ institution.dateFrom } - { institution.dateTo }</p>
                }
                {
                    institution.dateFrom === institution.dateTo &&
                    <p>{ institution.dateTo }</p>
                }
            </div>
            <p className='institution-location'>{ institution.location }</p>
            {
                institution.summary.map((qualification: any, i: number) => 
                                            <p className='institution-qualification' key={ i }>
                                                { qualification.subject } : { qualification.grade }
                                            </p>)
            }
        </div>
    )
}