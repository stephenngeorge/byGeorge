import React, { Fragment } from 'react'

interface Props {
    title: string,
    description: string
}

export default (props: Props) => {
    let { title, description } = props
    return (
        <Fragment>
            <h2 className='project-drawer__title'>{ title }</h2>
            <p className='project-drawer__description'>{ description }</p>
        </Fragment>
    )
}