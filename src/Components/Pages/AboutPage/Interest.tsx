import React from 'react'

interface Props {
    interest: {
        title: string,
        info?: string
    }
}

export default (props: Props) => {
    let { interest } = props

    return (
        <div className='interest'>
            <p className='interest-title'>{ interest.title }</p>
            {
                !!interest.info &&
                <p className='interest-info'>{ interest.info }</p>
            }
        </div>
    )
}