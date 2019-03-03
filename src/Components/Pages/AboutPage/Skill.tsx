import React from 'react'

interface Props {
    skill: {
        name: string,
        logo: string
    }
}

export default (props: Props) => {
    let { skill } = props

    return (
        <div className='skill'>
            <p>{ skill.name }</p>
            <img src={ skill.logo } alt={ skill.name } />
        </div>
    )
}