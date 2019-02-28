import React from 'react'

export default (props: any) => {
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