import React from 'react'
import { IPropsInterest } from './InterestsType'



export default (props: IPropsInterest) => {
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