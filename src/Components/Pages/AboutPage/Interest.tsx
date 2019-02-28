import React from 'react'

export default (props: any) => {
    let { interest } = props

    return (
        <div className='interest'>
            <p>{ interest.title }</p>
            {
                !!interest.info &&
                <p>{ interest.info }</p>
            }
        </div>
    )
}