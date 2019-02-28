import React from 'react'

export default (props: any) => {
    let { skill } = props

    return (
        <div className='skill'>
            <p>{ skill.name }</p>
            <img src={ skill.logo } alt={ skill.name } />
        </div>
    )
}